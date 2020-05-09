import {Sphere, Cuboid} from './obj';
import {Vect3} from './vect3';

class Game{
    objs: any[];
    me: Sphere;

    constructor(){
        this.me = new Sphere(20);
        this.objs = [];
    }

    update(){
        
    }

    draw(ctx:CanvasRenderingContext2D){
        let canvas = ctx.canvas;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';

        for(let i = 0; i < this.objs.length; i++){
            this.objs[i].draw(ctx, this.me.pos.add(new Vect3(0,0,0)));
        }

        this.me.draw(ctx, this.me.pos);
    }
}

export {Game};