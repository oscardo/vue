const scores: Array<number> = []
const names: Array<string> = []

function IdentifyOne(val: string | boolean): string | boolean{
    return val
}

function IdentifyTwo(val: any): any{
    return val
}

function IdentifyThree<type>(val: type): type{
    return val
}

IdentifyThree("3")
IdentifyThree(3)
IdentifyThree('3')
IdentifyThree(true)
IdentifyThree(false)

function IdentifyFour<T>(val: T): T{
    return val //iqual that IdentifyThree
}


interface iBootle{
    brand: string,
    type: number
}

IdentifyFour<iBootle>({brand: "Brisa", type: 1})

function getSearchProducts<T>(products: T[]): T{
    //return 3 //error es number
    return products[3]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

function anotherFunc<T, K>(valorOne: T, valorTwo: K): object{
    return {
        valorOne,
        valorTwo
    }
}

anotherFunc(2, "trampa")

interface Databases{
    connection: string;
    username: string;
    password: string;
}

function conexion<T,K extends Databases>(valorOne: T, valorTwo: K):object{
    return {
        valorOne,
        valorTwo
    }
}

conexion(1, {
    connection: "conectDB",
    password: "12345678",
    username: "Oscardo"
})

interface quiz{
    name: string,
    type: string
}
interface course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(products: T){
        this.cart.push(products)
    }
}

export{}