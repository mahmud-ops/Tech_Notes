class rectangle{
    constructor(height , width){
        this.height = height;
        this.width = width;

    }
    getArea(){
       return this.height * this.width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // _width , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The width should be positive`);
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; // _height , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The height should be positive`);
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}

const rectangle_1 = new rectangle(200 , 25);
console.log(`Height = ${rectangle_1.height}`);
console.log(`width = ${rectangle_1.width}`);