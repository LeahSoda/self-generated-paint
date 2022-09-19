const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//store the click spots in an array
let atoms = [];

class Atom {
    constructor(x, y){
        //initialize the brush
        this.x = x;
        this.y = y;
        //this.radius = Math.random()*1.5; //dotted lines
        //this.speedX = Math.random() * 8 - 4;    //x increment [-4,4]
      // this.speedY = Math.random() * 8 - 4;

        //take 2
        this.radius = Math.random()*4;
        this.speedX=Math.random()*30-15;
        this.speedY=Math.random()*30-15;
    }
    //update window?
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    //draw
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        //maybe change color
        ctx.fill();
    }
}

//start autopaint whrn mouse is clicked
canvas.addEventListener('click', function (e) {
    //the line grows in 20 start point
        for (let i = 0; i < 300; i++) {
            atoms.push(new Atom(e.x, e.y));
    }
    console.log(e.x, e.y);
});

//generate animation
const animate = () => {
    atoms.forEach(atom => {
        atom.draw();
        atom.update();
    });
    requestAnimationFrame(animate);
}

animate();
