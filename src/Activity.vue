<script setup>
import { ref } from 'vue';

const months = ref([
   { month :"JAN", activity: 25 },
   { month: "FEB", activity: 30 },
   { month: "MAR", activity: 30 },
   { month: "APR", activity: 66 },
   { month: "MAY", activity: 70 },
   { month: "JUN", activity: 50 },
   { month: "JUL", activity: 66 },
   { month: "AUG", activity: 20 },
   { month: "SEP", activity: 70 },
   { month: "OCT", activity: 80 },
   { month: "NOV", activity: 90 },
   { month: "DEC", activity: 100 },
])

</script>

<template>
    <div class="card-activity">
        <header class="header-activity">
            <h3>Activity</h3>
            <div>Month</div>
        </header>
        <main class="body-activity" >
            <div class="nombre">
                <span>400</span><br>
                <span>300</span><br>
                <span>200</span><br>
                <span>100</span><br>
                <span>0</span>
            </div>
            <div v-for="month in months" :key="month.month">
                <div class="progress-bar-month">
                    <span :style="{ height: month.activity + '%' }"></span>
                </div> 
                <p>{{ month.month }}</p>
            </div>
        </main>
    </div>
</template>

<style lang="scss" >
.card-activity {
    background-color: white;
    width: 546px; 
    border-radius: 20px;
    margin-bottom: 17px; 
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}

.header-activity {
    display: flex;
    width: 511px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 27px;

    h3 {
        color: rgba(77, 77, 77, 1);
        font-size: 14px;
        font-weight: 500;
        padding: 15px 0 15px 0px
    }

    div {
        color: rgba(15, 37, 82, 1);
        font-size: 12px;
        font-weight: 600;
        padding: 15px 3px 15px 0px;

        &::after {
            content: '';
            display: inline-block;
            width: 11px;
            height: 11px;
            margin-top: -1px;
            vertical-align: middle;
            background: url(img/month.svg) center center / contain no-repeat;
            transform: translate(3px, 0px);
        }
    }
}

.body-activity {
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 511px;
    margin-right: auto;
    margin-left: auto;
    
    p {
        color: rgba(131, 131, 131, 1);
        font-size: 9px;
        font-weight: 500;
        margin-top: 15px;
        transform: translateX(-4px);
     }
    
}

.progress-bar-month {
    height: 199px; 
    width: 10px; 
    background-color: rgba(242, 247, 255, 1); 
    border-radius: 5px; 
    position: relative;

}

.progress-bar-month span {
    position: absolute; 
    bottom: 0; 
    width: 100%; 
    background-color: rgba(27, 89, 248, 1);
    border-radius: 5px; 
}

.nombre span {
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 33px;
    transform: translateY(-4px);
}

.nombre span:last-child {
    margin-bottom: 0;
}

</style>