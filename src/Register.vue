<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { useRouter } from 'vue-router'

const lastNameContent = ref('')
const firstNameContent = ref('')
const ageContent = ref('')
const emailContent = ref('')
const passwordContent = ref('')
const confirmPasswordContent = ref('')
const errors = ref([])
const showPassword = ref(false)
const toast = useToast()
const router = useRouter()

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const cancelForm = () => {
  lastNameContent.value = ''
  firstNameContent.value = ''
  ageContent.value = ''
  emailContent.value = ''
  passwordContent.value = ''
  confirmPasswordContent.value = ''
  errors.value = []
  router.push('/')
}

const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const validFormRegister = async () => {
  errors.value = []

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/
  const ageRegex = /^[1-9][0-9]*$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

  if (!nameRegex.test(lastNameContent.value)) {
    errors.value.push("Le nom doit comporter au moins 2 caractères et uniquement des lettres.")
  }

  if (!nameRegex.test(firstNameContent.value)) {
    errors.value.push("Le prénom doit comporter au moins 2 caractères et uniquement des lettres.")
  }

  if (!ageRegex.test(ageContent.value)) {
    errors.value.push("L'âge doit être un nombre supérieur à 0.")
  }

  if (!emailRegex.test(emailContent.value)) {
    errors.value.push("L'email doit être valide.")
  }

  if (!passwordRegex.test(passwordContent.value)) {
    errors.value.push("Le mot de passe doit comporter au moins 6 caractères, une majuscule, un chiffre et un caractère spécial.")
  }

  if (passwordContent.value !== confirmPasswordContent.value) {
    errors.value.push("Les mots de passe ne correspondent pas.")
  }

  if (errors.value.length) {
    return;
  }

  try {
    const user = {
        firstName: normalizeString(firstNameContent.value.charAt(0).toUpperCase() + firstNameContent.value.slice(1).toLowerCase()),
        lastName: normalizeString(lastNameContent.value.toUpperCase()),
        age: ageContent.value,
        email: emailContent.value,
        password: passwordContent.value
    }

    await axios.post("http://localhost:8000/auth/register", user)
    const toastInstance = toast.success("L'utilisateur a été enregistré avec succès.", {
      duration: 3000,
      position: "top",
      onClose: () => {
        router.push('/')
      }
    })

    setTimeout(() => {
      router.push('/')
    }, 3000)
    
    cancelForm()
  } catch (error) {
    console.error(error)
    if (error.response && error.response.status === 400) {
      errors.value.push(error.response.data.message)
    } else {
      errors.value.push("Une erreur s'est produite lors de l'enregistrement.")
    }
  }
}

</script>

<template>
    <main>
        <header class="header-top-page">
            <h1>Créer un compte</h1>
        </header>
        <form @submit.prevent="validFormRegister" class="form">
            <div>
                <label for="last-name">Nom : </label>
                <input type="text" id="last-name" required v-model="lastNameContent">
            </div>
            <div>
                <label for="first-name">Prénom : </label>
                <input type="text" id="first-name" required v-model="firstNameContent">
            </div>
            <div>
                <label for="age">Âge : </label>
                <input type="number" id="age"
                required v-model="ageContent">
            </div>
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
                <label for="confirm-password">Confirmer le mot de passe : </label>
                <input :type="showPassword ? 'text' : 'password'" id="confirm-password"
                required v-model="confirmPasswordContent">
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

<style scoped lang="scss"></style>