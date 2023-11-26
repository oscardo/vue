function addTwo(num:number){
    return num + 2
}

addTwo(5)
//functions 
function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("algo")

function signUpUser(name: string, email:string, isPaid:boolean){
    return true;
}

signUpUser('Oscar', 'oscardo@gmail.com', true)

let loginUser = (name: string, email:string, isPaid:boolean) => {
    return false;
}

loginUser("Oscar", "oscardo@gmail.com", false)

let loginUser2 = (name: string, email:string, isPaid:boolean):boolean => {
    let Login: boolean = false
    if(isPaid) { Login: false}
    else { Login: true }
    return Login
}

let final:boolean = loginUser2 ('Oscardo', 'osc@gmail.com', true)

const heros = ['SuperMan', 'Batman', 'Spiderman']
heros.map((hero:string):string => {
    return `hero is ${hero}`
})

function consoleError(errormsg:string):void{
    console.error('Error: ' + errormsg.toUpperCase())
}
consoleError("Error de entrada");

function hadlerError(errormsg:string):never{
    throw new Error(errormsg);
}
hadlerError("Error de entrada de datos");

export {}

