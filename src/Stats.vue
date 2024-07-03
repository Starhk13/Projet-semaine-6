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

const props = defineProps({
    numbers: Array,
    oldNumbers: Array
})
</script>

<template>
    <div class="card-stats">
      <div class="active-users mini-card">
          <p>Active Users</p>
          <br>
          <NumberAnimation :from="oldNumbers[0]" :to="numbers[0]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
          <span class="denominateur">/80</span>
      </div>
      <div class="questions-answered mini-card">
          <p>Questions Answered</p>
          <br>
          <NumberAnimation :from="oldNumbers[1]" :to="numbers[1]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
      </div>
      <div class="av-session mini-card">
          <p>Av. Session Length</p>
          <br>
          <NumberAnimation :from="oldNumbers[2]" :to="numbers[2]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
      </div>
      <div class="starting-knowledge mini-card">
          <p>Starting Knowledge</p>
          <br>
          <NumberAnimation :from="oldNumbers[3]" :to="numbers[3]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
          <img src="./img/graph.svg" alt="graphique">
      </div>
      <div class="current-knowledge mini-card">
          <p>Current Knowledge</p>
          <br>
          <NumberAnimation :from="oldNumbers[4]" :to="numbers[4]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
          <img src="./img/graph.svg" alt="graphique">
      </div>
      <div class="knwoledge-gain mini-card">
          <p>Knwoledge Gain</p>
          <br>
          <span>+</span>
          <NumberAnimation :from="oldNumbers[5]" :to="numbers[5]" :duration="0.5" :format="formatNumber" autoplay easing="linear" />
          <img src="./img/graph.svg" alt="graphique">
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
        margin-left: 10px; 
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