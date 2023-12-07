import { defineStore } from "pinia"

export const useExample = defineStore('useExample', {
    state: () => {
        return {
            count: 1 /*número elegido */
        }
    },
    actions: {
        init(){
            const initCount = localStorage.getItem('count')
            if(initCount){
                this.count = Number(initCount)
            }
        },
        increment(val = 1){
            this.count += val
            localStorage.setItem('count', this.count.toString())
        }
    }
})