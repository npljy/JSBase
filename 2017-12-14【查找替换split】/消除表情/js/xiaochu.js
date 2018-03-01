window.onload = function(){
    var btn = document.getElementById("btn");
    var score = document.querySelector(".content").querySelectorAll("div");
    var cont = document.querySelector(".content");
    var oimg = document.getElementById("oimg");
    var loseSpan = document.querySelector(".loseNum");
    var winSpan = document.querySelector(".winNum");
    var imgs = ["img/demonI.png","img/demonII.png","img/demonIII.png","img/demonIV.png","img/demonV.png"];
    var imgsLen = imgs.length;
    
    var winNum = 0;
    var loseNum = 0;
    var imgTop = -60;
    var isStart = false;
    var isHit = false;
    var intime = 50;
    var timer1 = null;
    var timer2 = null;
    btn.onclick = function(){
        
        if(!isStart){
            score[0].style.left = "-100px";
            score[1].style.left = "-100px";
            this.style.bottom  = "-60px";
            start();
            intime = 50;
            isStart = true;
        }
    }

    function start()
    {
        clearInterval(timer1);
        clearTimeout(timer2);
        oimg.src = imgs[Math.floor(Math.random()*5)];
        oimg.style.left = Math.floor(Math.random()*600)+"px";
        imgTop = -60;
        oimg.style.top = "-60px";
        // console.log(Math.floor(Math.random()*5));
        timer1 = setInterval(function(){
            oimg.style.top = imgTop +"px";
            imgTop += 5;
            if(imgTop >= 350){
                clearInterval(timer1);
                loseSpan.innerText = ++loseNum+"分";
                shake(cont,"top",10);
                intime -= 5;
                if(intime <= 0){
                    stop();
                    btn.innerText = "游戏结束";
                    oimg.style.display = "none";
                    return;
                }
                timer2 = setTimeout(function(){
                    start();
                },500)
                
            }
        },intime);
    }

    function stop()
    {
        clearInterval(timer1);
        clearTimeout(timer2);
        score[0].style.left = "14px";
        score[1].style.left = "14px";
        btn.style.bottom  = "20px";
    }

    function shake(obj,attr,num)
    {
        var n = 0;
        var arr = [];
        for(var i = num ; i > 0 ; i -= 2){
            arr.push(i,-i);
        }
              
        var timer = setInterval(function(){
            obj.style[attr] = parseFloat(getComputedStyle(obj)[attr]) + arr[n] + "px";
            n++;
            n > arr.length && (clearInterval(timer), n = 0 );
        },30)
            
            
        
    }

    oimg.onclick = function()
    {   
        if(!isHit){
            clearInterval(timer1);
            clearTimeout(timer2);
            oimg.src="img/demonVI.png";
            shake(this,"left",15);
            winSpan.innerText = ++winNum+"分";
            isHit = true;
            intime -= 5;
            var timer = setTimeout(function(){
                start();
                isHit = false;
            },500) ;
        }  
    }
}// onload END