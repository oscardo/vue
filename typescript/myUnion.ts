let score: number | string = 0
score: 34 //numérico
score: "23" //string

type user = {
    name: string
    id: number
}

type admin = {
    username: string
    id: number
}

let usuario: user | admin = {name: "oscardo", id: 123}
usuario = {name: 'Alexa', id: 2334}
usuario = {username: 'Diana', id: 24}

function getDBId(id: number | string){
    //making some API call
    console.log(`DB is ${id}`)
}

getDBId(3)
getDBId("3")

function getDBId_2(id: number | string){
    //making some API call
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }else if(typeof id === "number"){
        id.toPrecision()
    }
}

getDBId_2(3)
getDBId_2("3")

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number | boolean)[] = ["1","2","3", 4, 5, 6, false, true, "7"]
const data4: any[] = ["1","2","3", 4, 5, 6, false, true, "7"]

let variable: "Windows" | "Linux" | "Mac"
variable = "Windows"
variable = "Mac"
variable = "Linux"

export{}

