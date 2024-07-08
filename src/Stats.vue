<script setup>
import NumberAnimation from 'vue-number-animation';

const formatNumber = (value) => {
  if (typeof value === 'number') {
    return Math.floor(value);
  } else if (typeof value === 'string') {
    if (value.includes('%')) {
      const number = parseFloat(value.replace('%', ''));
      return `${Math.floor(number)}%`;
    } else if (value.includes('m') || value.includes('s')) {
      const [minutes, seconds] = value.split('m');
      return `${Math.floor(parseFloat(minutes))}m ${Math.floor(parseFloat(seconds))}s`;
    } else if (value.includes('+')) {
      const number = parseFloat(value.replace('+', ''));
      return `+${Math.floor(number)}%`;
    } else {
      return Math.floor(parseFloat(value));
    }
  }
  return value;
};

const stats = [
  { title: 'Active Users', graph: false },
  { title: 'Questions Answered', graph: false },
  { title: 'Av. Session Length', graph: false },
  { title: 'Starting Knowledge', graph: true },
  { title: 'Current Knowledge', graph: true },
  { title: 'Knowledge Gain', graph: true },
];


const props = defineProps({
    numbers: Array,
    oldNumbers: Array
})
</script>

<template>
  <div class="card-stats">
    <div v-for="(stat, i) in stats" :key="i" class="mini-card">
      <router-link :to="`/statistiques/${i}`" class="custom-link">
        <div>
          <p>{{ stat.title }}</p>
          <br>
          <span v-if="stat.title === 'Knowledge Gain'" 
          :class="{ 'margin-right-15px': stat.title === 'Knowledge Gain' }">+</span>
          <NumberAnimation :from="oldNumbers[i]" :to="numbers[i]" :duration="0.5" 
          :format="formatNumber" autoplay easing="linear" />
          <span v-if="stat.title === 'Active Users'" class="denominateur">/80</span>
          <img v-if="stat.graph" src="./img/graph.svg" alt="graphique">
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">


.card-stats {
    display: flex;
    max-width: 546px;
    flex-wrap: wrap;
    justify-content: space-between;  
}

.mini-card {
    background-color: white;
    width: 171px;
    height: 152px;
    border-radius: 20px;
    margin-bottom: 17px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);

    &:nth-child(1),&:nth-child(2),&:nth-child(3) {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      cursor: pointer;
    }
    
    p {
        text-align: center;
        margin-top: 15px;
        margin-bottom: 19px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
    }

    span {
        color: black;
        font-size: 24px;
        font-weight: bold;
        margin-left: 17px; 
    }

    .denominateur {
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 600;
    margin: 0;
    }

    img {
        margin-left: 17px;
        transform: translateY(10px);
    }
}

.margin-right-15px {
  margin-right: -15px
}


.starting-knowledge p::after {
    content: '';
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-top: -1px;
    vertical-align: middle;
    background: url(img/info-circle-full.svg) center center / contain no-repeat;
    transform: translate(3px, 0px);
}   
</style>