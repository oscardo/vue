function funcionValidar(valor: string | number){
    if(typeof valor === "string"){
        return valor.toLocaleUpperCase()
    }
    return valor + 1
}

function funcionValidar2(valor: string | null){
    if(!valor){
        console.log("por favor coloca un ID Valido!")
        return
    }
    return valor.toLocaleUpperCase()
}
//IN 
interface User{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function IsAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

export{}