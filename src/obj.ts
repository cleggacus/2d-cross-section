import {Vect3} from './vect3';

class Sphere{
    pos: Vect3;
    r: number;

    constructor(r: number = 50, pos: Vect3 = new Vect3()){
        this.pos = pos;
        this.r = r;
    }

    draw(ctx:CanvasRenderingContext2D, pos:Vect3){
        let posNew = this.pos.subtract(pos);
        let r = this.r > posNew.z ? Math.sqrt(Math.pow(this.r, 2) - Math.pow(posNew.z, 2)) : 0;

        ctx.beginPath();
        ctx.arc(posNew.x + ctx.canvas.width/2, posNew.y + ctx.canvas.height/2 , r, 0, 2 * Math.PI);
        ctx.fill();
    }
}

class Cuboid{
    pos: Vect3;
    rotation: Vect3;
    scale: Vect3;

    constructor(scale: Vect3 = new Vect3(50,50,50), pos: Vect3 = new Vect3(), rotation: Vect3 = new Vect3()){
        this.pos = pos;
        this.scale = scale;
        this.rotation = rotation
    }

    draw(ctx:CanvasRenderingContext2D, pos:Vect3){
        let posNew = this.pos.subtract(pos);
        if(Math.abs(posNew.z) < 0.5 * this.scale.z){
            ctx.beginPath();
            ctx.fillRect(posNew.x + (ctx.canvas.width - this.scale.x)/2, posNew.y + (ctx.canvas.height - this.scale.y)/2, this.scale.x, this.scale.y);
        }
    }
}

export {Sphere,Cuboid};