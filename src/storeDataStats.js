import { defineStore } from 'pinia'

export const useStats = defineStore({
  id: 'main',
  state: () => ({
    numbers: ["27", "3298", "2m 34s", "64%", "86%", "+34%"],
    oldNumbers: ["27", "3298", "2m 34s", "64%", "86%", "+34%"],
    stats: [
        { title: 'Active Users', graph: false },
        { title: 'Questions Answered', graph: false },
        { title: 'Av. Session Length', graph: false },
        { title: 'Starting Knowledge', graph: true },
        { title: 'Current Knowledge', graph: true },
        { title: 'Knowledge Gain', graph: true },
      ]
  }),
  actions: {
    updateNumbers() {
      this.oldNumbers = this.numbers;
      this.numbers = [
        `${Math.floor(Math.random() * 81)}`,
        `${Math.floor(Math.random() * 3001)}`,
        `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
        `${Math.floor(Math.random() * 101)}%`,
        `${Math.floor(Math.random() * 101)}%`,
        `+${Math.floor(Math.random() * 201)}%`
      ]
    },
  },
})