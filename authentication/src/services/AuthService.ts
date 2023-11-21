import { Ref, ref } from "vue";

class AuthService{
    
    private jwt: Ref<string>;
    private errors: Ref<string>;

    constructor(){
        this.jwt = ref('')
        this.errors =ref('')
    }

    getjwt():Ref<string>{
        return this.jwt;
    }

    geterrors():Ref<string>{
        return this.errors;
    }

    async login(email:string, password:string): Promise<boolean>{
        try {
            //https://hfp69ilv.directus.app/auth/login/
            const resp = await fetch('https://hfp69ilv.directus.app/auth/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
        
            const response = await resp.json();
            if('errors' in response){
                this.errors.value = 'Login failed'
                return false;
            }
            
            this.jwt.value = response.data.access_token;
            return true;
        } 
        catch (error) {
            console.error('Error: ' + error)
            return false
        }
    }
}

export default AuthService