const User = {
    name: 'Oscar',
    email: 'Osc@gl.com',
    isActive: true
}

function createUser({name: string, isPaid:boolean}):void{

}
createUser({name: 'Oscardo', isPaid: true});

function createCourse():{name: string, price: number}{
    return {name: 'Alberto', price: 223}
}

createCourse()

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUserSpecial(usuario: User):void{

}
let usuario = User
usuario.name = "Oswaldo"
usuario.email = "Oswaldo@com.co"
usuario.isActive = true
createUserSpecial(usuario)
createUserSpecial({name: "Soledad", email: "s@md.com", isActive: true})

type UserSpecial = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

const US: UserSpecial = {
    _id: "1234",
    name: "Ricardo",
    email: "ricardo@gmail.com",
    isActive: true
}

type cardNumber = {
    cardnumber: number
}
type cardDate = {
    carddate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}



