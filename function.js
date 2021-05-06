canvas= document.getElementById("can2");
    ctx= canvas.getContext("2d");
    
    bg_img= "Carry.jpg";
    car_img= "bg101.jpg";
    
    
    car_x= 10;
    car_y= 10;
    car_w= 100;
    car_h= 90;
    
    function add() {
        bg_tag= new Image(); 
        bg_tag.onload= uploadBG; 
        bg_tag.src= car_img; 
    
        c_tag= new Image(); 
    c_tag.onload= uploadcar; 
        c_tag.src= bg_img; 
    }
    
    function uploadBG() {
        ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
    
    }
    function uploadcar() {
        ctx.drawImage(c_tag, car_x, car_y, car_w, car_h);
    
    }
    window.addEventListener("keydown", my_keydown)
    function my_keydown(e) {
        keypressed= e.keyCode;
        if(keypressed=="37") {
            left()
        }
        if(keypressed=="38") {
            up()
        }
        if(keypressed=="39") {
            right()
        }
        if(keypressed=="40") {
            down()
        }
    } 