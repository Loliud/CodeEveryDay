document.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('canvas');
    const c  = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.addEventListener('resize', () =>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    const mouse = {
        x: undefined,
        y: undefined
    };
    document.addEventListener('mousemove', event =>{
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        console.log(mouse.x);
    });
    function randomDistance(min, max){
        return Math.floor(Math.random() * (max - min + 1)+ min);
    }
    function Circle(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radian = Math.random() * Math.PI * 2;
        this.velocity = 0.08;
        this.distanFromeCenter = randomDistance(50, 120);
            
            
        
    }
    var key = 0;
    document.addEventListener('click', function(){
        key += 1;
        if(key === 5){
            key = 0;
        }
        
    });
    
    Circle.prototype.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 20;
        c.fill();
        c.closePath();
    }
    
    Circle.prototype.update = function(){
        if(key === 0){
            this.radian += this.velocity;
            this.x = mouse.x + Math.cos(this.radian) * this.distanFromeCenter;
            this.y = mouse.y + Math.sin(this.radian) * 200;
        }
        if(key === 1){
            this.radian += this.velocity;
            this.x = mouse.x + Math.cos(this.radian) * this.distanFromeCenter;
            this.y = mouse.y + Math.sin(this.radian) * 1;
        }
        if(key === 2){
          
            this.radian += this.velocity;
            this.x = mouse.x + Math.cos(this.radian) * this.distanFromeCenter;
            this.y = mouse.y + Math.sin(this.radian) * 100;
        }
        if(key === 3){
           
            this.x += Math.cos(this.radian) * 10;
            this.y += Math.sin(this.radian) * 10;
            this.radian += this.velocity;
        }
        if(key === 4){
            
           
            this.radian += this.velocity;
            this.x = mouse.x + Math.cos(this.radian) * this.distanFromeCenter;
            this.y = mouse.y + Math.sin(this.radian) * this.distanFromeCenter;
           
            // this.radian += this.velocity;
            // this.x = mouse.x + Math.cos(this.radian) * this.distanFromeCenter;
            // this.y = mouse.y + Math.sin(this.radian) * 100;
        
        }
        
        
        
        this.draw();
    }
    const colors = ['tomato', 'RosyBrown', 'LimeGreen', 'MediumAquamarine','Gold', 'Crimson','Aqua', 'SeaGreen'];
    const arrayCircles = [];

    function init(){
        for(var i = 0; i < 40; i++){
            let circle = new Circle(700, 300, 10, colors[Math.floor(Math.random() * colors.length)]);
            arrayCircles.push(circle);
            
        }
        console.log(arrayCircles);
       
    }
    init();

    function animate(){
        window.requestAnimationFrame(animate);
        if(key % 2 !== 0){
            c.fillStyle = 'rgba(255,255,255,0.3)';
            c.fillRect(0,0, canvas.width, canvas.height);
        }else{
            c.clearRect(0,0,canvas.width, canvas.height);
        }
        
        arrayCircles.forEach((circle) =>{
            circle.update();
        });
    }
    animate();


});