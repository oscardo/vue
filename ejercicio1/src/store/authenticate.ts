import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            valorAuth: ''
        }
    },
    getters: {
        getAuth: (state) => state.valorAuth
    },
    actions: {
        setAuth(valor:string){
            this.valorAuth = valor
        },
        //async funcion
    }
})

export default useAuthStore;