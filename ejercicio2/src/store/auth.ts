import { defineStore } from "pinia";

const useAuth = defineStore('auth', {

    // [POST] 127.0.0.1:8000/api/auth/register    -> Crear usuario por POST pasando name, email y password
    // [POST] 127.0.0.1:8000/api/auth/login    -> Acceder con un usuario por POST pasando email y password
    // [GET] 127.0.0.1:8000/api/note          -> Leer notas del usuario autenticado
    // [POST] 127.0.0.1:8000/api/note          -> Guardar nota del usuario pasando 'content'
    state: () => {
        return {
            token: null,
            baseURL: "http://localhost:8000/api"
        }
    },
    getters: {
    },
    actions: {
        async register(name:string, email:string, password: string){
            const uri = `${this.baseURL}/auth/register`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password
                })
            })
            const response = await rawResponse.json()
            if(response.status == false){
                return false
            }else{
                this.token = response.token
                return true
            }
        },
        async login(email: string, password: string){
            //TODO
            const uri = `${this.baseURL}/auth/login`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })
            const response = await rawResponse.json()
            if(response.status == false){
                return false
            }else{
                this.token = response.token
                return true
            }
        },
        async getNotes(){
            const uri = `${this.baseURL}/note`
            const rawResponse = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })
            const response = await rawResponse.json()
            return response
        },
        async CreateNotes(content: string){
            const uri = `${this.baseURL}/note`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    'content': content
                })
            })
            const response = await rawResponse.json()
            if(response.status == false){
                return false
            }else{
                this.token = response.token
                return true
            }
        },
        logout(){
            this.token = null
        }
    },
})

export default useAuth