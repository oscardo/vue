/*
public
private o #
*/

// class User {
//     email: string;
//     name: string;
//     readonly city: string = "Bogotá"
//     constructor(email:string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

//otra forma más general seria esta:
class User {
    private _courseCount = 1;
    constructor(public email:string, public name: string){ 
        
    }

    get getAppleEmail():string{
        return `Apple ${this.email}`
    }

    get CourseCount(): number{
        return this._courseCount;
    }

    set courseCount(CourseNum: number){
        if(CourseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = CourseNum;
    }
}

const hitest = new User("osc@r.com", "Oscardo")
