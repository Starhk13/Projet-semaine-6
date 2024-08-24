<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { useRouter } from 'vue-router'
import { useAuthStore } from './authStore' 

const emailContent = ref('')
const passwordContent = ref('')
const errors = ref([])
const showPassword = ref(false)
const toast = useToast()
const router = useRouter()
const authStore = useAuthStore()
let refreshInterval = null

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const cancelForm = () => {
  emailContent.value = ''
  passwordContent.value = ''
  errors.value = []
  router.push('/')
}

const validFormLogin = async () => {
  errors.value = []

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(emailContent.value)) {
    errors.value.push("L'email doit être valide.")
  }

  if (errors.value.length) {
    return;
  }

  try {
    const user = {
      email: emailContent.value,
      password: passwordContent.value
    }

    const response = await axios.post("http://localhost:8000/auth/login", user)
    const token = response.data.token
    const expirationTime = new Date().getTime() + 60 * 60 * 1000 

    localStorage.setItem('token', token)
    localStorage.setItem('tokenExpiration', expirationTime)

    toast.success("Connexion réussie.", {
      duration: 3000,
      position: "top",
      onClose: () => {
        router.push('/')
      }
    })

    authStore.login() 

    setTimeout(() => {
      router.push('/')
    }, 3000)
    
    cancelForm()
    startTokenRefresh()
    } catch (error) {
    console.error(error)
    if (error.response && error.response.status === 400) {
      errors.value.push(error.response.data.message)
      toast.error(error.response.data.message, {
        duration: 3000,
        position: "top"
      })
    } else {
      errors.value.push("Une erreur s'est produite lors de la connexion.")
      toast.error("Une erreur s'est produite lors de la connexion.", {
        duration: 3000,
        position: "top"
      })
    }
  }
}

const startTokenRefresh = () => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }

  refreshInterval = setInterval(async () => {
    const token = localStorage.getItem('token')
    const expirationTime = localStorage.getItem('tokenExpiration')

    if (token && expirationTime && new Date().getTime() > expirationTime - 5 * 60 * 1000) { 
      try {
        const response = await axios.post("http://localhost:8000/auth/refresh", { token })
        const newToken = response.data.token
        const newExpirationTime = new Date().getTime() + 60 * 60 * 1000 

        localStorage.setItem('token', newToken)
        localStorage.setItem('tokenExpiration', newExpirationTime)
      } catch (error) {
        console.error("Erreur lors du rafraîchissement du token :", error)
        toast.error("Une erreur s'est produite lors du rafraîchissement du token.", {
          duration: 3000,
          position: "top"
        })
      }
    }
  }, 5 * 60 * 1000) 
}

onMounted(() => {
  startTokenRefresh()
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>

<template>
    <main>
        <header class="header-top-page">
            <h1>Connexion</h1>
        </header>
        <form @submit.prevent="validFormLogin" class="form">
            <div>
                <label for="email">E-mail : </label>
                <input type="email" id="email" required v-model="emailContent">
            </div>
            <div>
                <label for="password">Mot de passe : </label>
                <input :type="showPassword ? 'text' : 'password'" id="password"
                required v-model="passwordContent">
                <button type="button" @click="togglePasswordVisibility">Afficher/Masquer</button>
            </div>
            <div>
                <button type="submit">Valider</button>
                <button type="button" @click="cancelForm">Annuler</button>
            </div>
            <div v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
        </form>  
    </main>
</template>

<style scoped lang="scss">

.header-top-page {
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;

    h1 {
        font-weight: bold;
        font-size: 24px;
    }
}
</style>