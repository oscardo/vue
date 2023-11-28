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
    protected _courseCount_Probar = 2 
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

class subUser extends User{
    isFamily: boolean = true;
    //private _courseCount = 1; NO se puede acceder a este tipo de objeto YA que es privado
    changeCourseCount(){
        //this._courseCount = 1; marca error
        //mientras que este SI lo permte
        this._courseCount_Probar = 2 
    }
}

const hitest = new User("osc@r.com", "Oscardo")
