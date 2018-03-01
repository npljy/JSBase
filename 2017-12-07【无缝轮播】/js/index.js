window.onload= function(){
    var myimgs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg"];
    var imgLen = myimgs.length;
    var oul = document.getElementsByTagName("ul")[0];
    var ipts = document.activeElement.getElementsByTagName("input");
    var num = 0;
    var imgs = document.getElementsByTagName("img");
    var onoff = true;
    ipts[1].onclick = function()
    {
        if(!onoff) return;
        onoff = false;

        num++; 
        num %= imgLen;
        imgs[2].src = myimgs[num];//这句要写在外面，之前写在里面，无法计算
        oul.style.marginLeft = -1200 + "px";

        setTimeout(function(){
            imgs[1].src = myimgs[num];
            oul.style.transition = "none";//恢复，清掉transition的运动效果

            setTimeout(function(){
                oul.style.marginLeft = -600+"px";

                setTimeout(function(){
                    oul.style.transition = ".5s";  
                    onoff = true;
                },80)
            },50)  
        },500);
    }

    ipts[0].onclick = function()
    {
        if(!onoff) return;
        onoff = false;

        num--; 
        num <0 && (num = imgLen-1);

        imgs[0].src = myimgs[num];
        oul.style.marginLeft = 0;

        setTimeout(function(){
            imgs[1].src = myimgs[num];
            oul.style.transition = "none";

            setTimeout(function(){
                oul.style.marginLeft = -600+"px";

                setTimeout(function(){
                    oul.style.transition = ".5s";  
                    onoff = true;
                },80)
            },50)  
        },500);
    }










}