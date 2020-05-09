import {Game} from './game';
import {Sphere, Cuboid} from './obj';
import { Vect3 } from './vect3';

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const fps = 60;

let mov = new Vect3();

let fpsInterval, startTime, now, then, elapsed, ctx;

let game = new Game();
for(let i = 0; i < 50; i++){
    game.objs.push(new Sphere(Math.random()*30+20, new Vect3(Math.random()*1000-500, Math.random()*1000-500, Math.random()*1000-500)));  
    game.objs.push(new Cuboid(new Vect3(Math.random()*30+20, Math.random()*30+20, Math.random()*30+20), new Vect3(Math.random()*1000-500, Math.random()*1000-500, Math.random()*1000-500)));
}

const animate = () => {
    requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        update();
        then = now - (elapsed % fpsInterval);
        draw();
    }
}

const update = () => {
    game.me.pos = game.me.pos.add(new Vect3(mov.x, mov.y, mov.z));
    game.update();
}

const draw = () => {
    game.draw(ctx);
}
  
const setCanvasSize = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

if (canvas.getContext('2d')) {
    setCanvasSize();

    ctx = canvas.getContext('2d');

    window.addEventListener('resize', () => {
        setCanvasSize();
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'a'){
            mov.x = -1;
        }else if(e.key == 'd'){
            mov.x = 1;
        }

        if(e.key == 'w'){
            mov.y = -1;
        }else if(e.key == 's'){
            mov.y = 1;
        }
        
        if(e.keyCode == 38) {
            mov.z = -1;
        }
        else if(e.keyCode == 40) {
            mov.z = 1;
        }
    })

    document.addEventListener('keyup', (e) => {
        if(e.key == 'a'){
            mov.x = 0;
        }else if(e.key == 'd'){
            mov.x = 0;
        }

        if(e.key == 'w'){
            mov.y = 0;
        }else if(e.key == 's'){
            mov.y = 0;
        }
        
        if(e.keyCode == 38) {
            mov.z = 0;
        }
        else if(e.keyCode == 40) {
            mov.z = 0;
        }
    })

    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    animate();

} else {
    console.error("canvas not surported");
}