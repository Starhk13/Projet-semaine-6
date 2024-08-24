<script setup>
  
  const props = defineProps({
    visible: Boolean,
    message: String
  })
  
  const emits = defineEmits(['confirm', 'cancel'])
  
  const confirm = () => {
    emits('confirm')
  }
  
  const cancel = () => {
    emits('cancel')
  }
</script>

<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog">
        <p>{{ message }}</p>
        <button @click="confirm">Oui</button>
        <button @click="cancel">Non</button>
      </div>
    </div>
  </template>
  
<style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
</style>