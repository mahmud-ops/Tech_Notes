class rectangle{
    constructor(width , height){
        this._width = width;
        this._height = height;
    }

    get width(){
        if(this._width < 0){
            console.error(`Width can't be negetive`);
        }
        else{
            this._width = width;
        }
    }
}

const rectangle_1 = new rectangle(-111 , "Apple");

console.log(rectangle_1.width);
console.log(rectangle_1.height);