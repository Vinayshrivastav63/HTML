interface Shape{
    area(): number;
    perimeter(): number;
}
class Rectangle implements Shape{
    private width: number;
    private height:number;

    constructor(width:number, height:number){
        this.width=width;
        this.height=height;
    }
    area():number{
        return this.width * this.height;
    }
    perimeter():number{
        return 2*(this.width + this.height);
    }
}
const rectangle = new Rectangle(5,10);
console.log("Rectangle Area:",rectangle.area());
console.log("Rectangle Perimeter:",rectangle.perimeter());