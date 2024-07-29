<script setup>
import { useStats } from './storeDataStats';
import Activity from './Activity.vue';
import Groups from './Groups.vue';
import Stats from './Stats.vue';
import Strongest from './Strongest.vue';
import UserLead from './UserLead.vue';
import Weakest from './Weakest.vue';

const store = useStats()

const handleClick = () => {
    store.updateNumbers()
}

</script>

<template>
<main>
    <header class="header-top-page">
        <h1>Reports</h1>
        <button class="aleatoire" @click="handleClick" >Aléatoire</button>
    </header>
        <div class="filter">
            <select name="" id="">
                <option value="value-one">Timeframe:  <span class="span">All-time</span></option>
                <option value="value-two">Timeframe:  <span class="span">Last month</span></option>
                <option value="value-three">Timeframe:  <span cla="span">Last-week</span></option>
                <option value="value-four">Timeframe:  <span clas="span">Today</span></option>
            </select>
            <select name="" id="">
                <option value="value-one">People: <span class="span">All</span></option>
                <option value="value-two">People: <span class="span">New</span></option>
                <option value="value-three">People: <span cla="span">Old</span></option>
            </select>
            <select name="" id="">
                <option value="value-one">Topic:  <span class="span">All</span></option>
                <option value="value-two">Topic:  <span class="span">Last month</span></option>
                <option value="value-three">Topic:  <span cla="span">Last-week</span></option>
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