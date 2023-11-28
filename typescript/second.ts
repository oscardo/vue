interface iTakePhoto {
    camaraMode: string;
    filter: string;
    burst: number;
}

interface iStory{
    createStory():void;
}

class Instagram implements iTakePhoto {
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number
    ){

    }
}

class Youtube implements iTakePhoto, iStory {
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){

    }
    createStory():void{
        console.log("Story create!!!")
    }
}


