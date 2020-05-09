class Vect3{
    x:number;
    y:number;
    z:number;

    constructor(x:number = 0, y:number = 0, z:number = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v:Vect3){
        return new Vect3(this.x+v.x, this.y+v.y, this.z+v.z);
    }

    subtract(v:Vect3){
        return new Vect3(this.x-v.x, this.y-v.y, this.z-v.z);
    }
}

export {Vect3};