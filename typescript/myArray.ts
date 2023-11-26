//se puede así de esta forma O se puede así
const SuperHero:string[] = []
//así
const Versus:Array<string> = []
SuperHero.push("Superman")
SuperHero.push("SpiderMan")
SuperHero.push("Chapulin")

Versus.push("Clark Kent")
Versus.push("el chavo del 8")

type User = {
    name: string
    isActive: boolean
}

const AllUser_1:User[] = []
const AllUser_2:Array<User> = []

AllUser_1.push({name: 'Oscardo', isActive: true})
AllUser_2.push({name: 'Eduardo', isActive: false})

const AllUser_3:User[] = [
    {name: "oscar", isActive: false}, 
    {name:'Alirio', isActive: true},
    {name: 'Alicia', isActive: false}
    ]

export{}