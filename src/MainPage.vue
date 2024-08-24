<script setup>
import Activity from './Activity.vue';
import Groups from './Groups.vue';
import Stats from './Stats.vue';
import { useStats } from './storeDataStats';
import Strongest from './Strongest.vue';
import UserLead from './UserLead.vue';
import Weakest from './Weakest.vue';
import { useRouter } from 'vue-router'
import ConfirmLogout from './ConfirmLogout.vue';
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useAuthStore } from './authStore'

const store = useStats()
const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()
const showDialog = ref(false)

const handleClick = () => {
    store.updateNumbers()
}

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('tokenExpiration');
  authStore.logout()
  toast.success("Vous êtes déconnecté.", {
    duration: 3000,
    position: "top"
  });
  router.push('/');
}

const confirmLogout = () => {
  showDialog.value = true
}

const handleConfirm = () => {
  showDialog.value = false
  logout()
}

const handleCancel = () => {
  showDialog.value = false
}

</script>

<template>
<main>
    <header class="header-top-page">
        <h1>Reports</h1>
        <div>
            <router-link v-if="!authStore.isAuthenticated" :to="'/login'" class="custom-link">
                <button class="aleatoire">Se connecter</button>
            </router-link>
            <router-link v-if="!authStore.isAuthenticated" :to="'/register'" class="custom-link" >
                <button class="aleatoire">Créer un compte</button>
            </router-link>
            <button v-if="authStore.isAuthenticated" class="aleatoire" @click="confirmLogout">Se déconnecter</button>
            <button class="aleatoire" @click="handleClick" >Aléatoire</button>
        </div>
    </header>
    <ConfirmLogout :visible="showDialog" message="Êtes-vous sûr de vouloir vous déconnecter ?"
    @confirm="handleConfirm" @cancel="handleCancel" />
        <div class="filter">
            <select name="" id="">
                <option value="value-one">Timeframe:  <span class="span">All-time</span></option>
                <option value="value-two">Timeframe:  <span class="span">Last month</span></option>
                <option value="value-three">Timeframe:  <span class="span">Last-week</span></option>
                <option value="value-four">Timeframe:  <span clas="span">Today</span></option>
            </select>
            <select name="" id="">
                <option value="value-one">People: <span class="span">All</span></option>
                <option value="value-two">People: <span class="span">New</span></option>
                <option value="value-three">People: <span class="span">Old</span></option>
            </select>
            <select name="" id="">
                <option value="value-one">Topic:  <span class="span">All</span></option>
                <option value="value-two">Topic:  <span class="span">Last month</span></option>
                <option value="value-three">Topic:  <span class="span">Last-week</span></option>
            </select>
        </div>
        <div class="card-contain-top">
            <Stats :numbers="store.numbers" :oldNumbers="store.oldNumbers"/>
            <Activity/> 
        </div> 
        <div class="card-contain-middle">
            <Weakest/>
            <Strongest/>
        </div>
        <div class="card-contain-bottom">
            <UserLead/>
            <Groups/>
        </div>
</main>
</template>

<style lang="scss" >
main {
    flex: 1;
    flex-grow: 1;
    margin-left: 0;
    background-color: rgba(245, 245, 245, 1);
}

.header-top-page {
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    h1 {
        font-weight: bold;
        font-size: 24px;
    }

    .aleatoire {
        background-color: rgb(178, 216, 240);
        font-size: 15px;
        font-weight: 700;
        color: black;
        padding: 10px 15px;
        border-radius: 10px;
        margin-left: 5px;
        cursor: pointer;

        &:hover{
            color: white;
            background-color: darken(rgb(178, 216, 240), 25%);
        }
    }
}

.filter {
    display: flex;
    justify-content: space-between;
    max-width: 1110px;
    margin: 28px auto 21px auto;
    
    select {
        width: 365px;
        height: 49px;
        border-radius: 20px;
        border-color: rgba(239, 240, 246, 1);
        padding-left: 15px;
        padding-right: 15px;
        color: black;
        font-size: 16px;
        font-weight: 500;
    }
}

.card-contain-top {
    display: flex;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}

.card-contain-middle {
    display: flex;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}

.card-contain-bottom {
    display: flex;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}


</style>