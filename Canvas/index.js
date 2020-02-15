document.addEventListener('DOMContentLoaded', function(){
    
    var backgroundColors = ['linear-gradient(90deg, rgba(2,0,36,1) 100%, rgba(56,27,82,1) 100%, rgba(0,212,255,1) 100%)', 'linear-gradient(90deg, rgba(55,0,54,1) 0%, rgba(56,27,82,1) 100%, rgba(0,212,255,1) 100%)', 'linear-gradient(90deg, rgba(55,0,54,1) 0%, rgba(47,52,15,1) 0%, rgba(34,71,11,1) 100%)'];
    var canvas = document.getElementById('canvas');
    var blue = document.getElementById('blue');
    var purple = document.getElementById('purple');
    var green = document.getElementById('green');
    var yellow = document.getElementById('yellow');
    var orange = document.getElementById('orange');
    var white = document.getElementById('white');
    var pink = document.getElementById('pink');
    var chocolate = document.getElementById('chocolate');
    var maroon = document.getElementById('maroon');
    var rosybrown = document.getElementById('rosybrown');
    var lightgreen = document.getElementById('lightgreen');
    var speed = document.getElementById('speed');
    var c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let arrayCircles;
    const colors =['#FF6F61', '#6B5B95', '#9B1B30', '#F5D6C6', '#5A3E36', '#935529', '#2A4B7C', '#577284'];
    var mouse = {
        x : undefined,
        y : undefined
    }
    document.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
        
    });
    document.addEventListener('mousemove', event =>{
        mouse.x = event.clientX;
        mouse.y = event.clientY;
       

    });
    
    const maxRadius = 40;
    const minRadius = 10;
    Circle.prototype.beHover = function(){
        if(mouse.x - this.x < 50 && mouse.x - this.x >-50 && mouse.y - this.y < 50 && mouse.y -this.y > -50){

            if(this.radius < maxRadius){
                this.radius += 5;
            }
           
        }else{
            if(this.radius > minRadius){
                this.radius -= 3;
                this.x += this.velocity.x * 8;
                this.y += this.velocity.y * 8;
            }
        }
        
    }
    
    
    function Circle(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: Math.random()*4 - 2,
            y: Math.random()*4 - 2
        }
       
    }
    
    
    blue.addEventListener('click', function(){
        canvas.style.background = backgroundColors[0];
    });
    yellow.addEventListener('click', function(){
        canvas.style.background = '#DAA520';
    });
    white.addEventListener('click', function(){
        canvas.style.background = '#F0FFF0';
    });
    pink.addEventListener('click', function(){
        canvas.style.background = '#DDA0DD';
    });
    orange.addEventListener('click', function(){
        canvas.style.background = '#FF4500';
    });
    purple.addEventListener('click', function(){
        canvas.style.background = backgroundColors[1];
    });
    green.addEventListener('click', function(){
        canvas.style.background = backgroundColors[2];
    });
    chocolate.addEventListener('click', function(){
        canvas.style.background = 'chocolate';
    });
    maroon.addEventListener('click', function(){
        canvas.style.background = 'maroon';
    });
    rosybrown.addEventListener('click', function(){
        canvas.style.background = 'RosyBrown';
    });
    lightgreen.addEventListener('click', function(){
        canvas.style.background = 'LightGreen';
    });
    
    
   
    Circle.prototype.update = function(){
        if(this.x >= canvas.width || this.x <= 0){
            this.velocity.x = - this.velocity.x;
        }
        if(this.y >= canvas.height || this.y <= 0){
            this.velocity.y = - this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
       
        
        this.beHover();
        this.draw();
    }
    
   
    Circle.prototype.draw = function() {
       
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.shadowColor = this.color;
        c.shadowBlur = 20;
        c.closePath();
        
        c.beginPath();
        c.font = '30px source sans pro';
        c.fillStyle = 'tomato';
        c.shadowBlur = 15;
        c.textAlign = 'center';
        c.fillText('Konnichiwa', mouse.x, mouse.y);
        c.fill();
        c.closePath();
        
    };
    
    function init(){
        arrayCircles = [];
        for(let i = 0; i < 150; i++){
            let circle = new Circle(Math.random() * canvas.width,Math.random() * canvas.height,10,colors[Math.floor(Math.random() * colors.length)]);          
            arrayCircles.push(circle);
        }
        
        
    }
    function animate(){
        window.requestAnimationFrame(animate);
        c.clearRect(0,0,canvas.width, canvas.height);
        arrayCircles.forEach((circle) =>{
           
            circle.update();    
        });
    }
    init();
    animate();
    
    
    

});