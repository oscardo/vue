abstract class TakePhoto_ABS{
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number,
    ){}

    abstract getSephia(): void;

    getReelTime(){
        return 8
    }
}

class Instagram_dos extends TakePhoto_ABS{
    constructor(
        camaraMode: string,
        filter: string,
        burst: number
    ){
        super(camaraMode, filter,burst)
    }

    getSephia(): void {
        console.log("Algo que decir")
    }
}

let CI = new Instagram_dos("foto1", "foto1", 3)
CI.getSephia()
CI.getReelTime()

