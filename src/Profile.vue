<script setup>

</script>

<template>
    <header class="header-top-page">
        <h1>Mon profil</h1>
        <div>
            <button class="aleatoire">Modifier mon profil</button>
            <button v-if="isAuthenticated()" class="aleatoire" @click="logout">Se déconnecter</button>
        </div>
    </header>
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