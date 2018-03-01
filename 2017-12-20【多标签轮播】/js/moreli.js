window.onload = function (){
    var main = document.getElementById("wrap");
    var navs = Array.from(document.getElementsByTagName("nav")[0].getElementsByTagName("a"));
    var divs = Array.from(document.getElementById("box").getElementsByTagName("div"));
    var box = document.getElementById("box");
    var inDiv = Array.from( box.getElementsByTagName("div") );

    var lis = null ;
    var imgs = null  ;
    var oldNav = null  ;
    var oldDiv =  null ;
    var oldImg =  null ;
    var oldLi =  null ;

    var timer1 = null;
    var timer2 = null;

    var inLen = inDiv.length;
    var inNum = 0 ;
    var outNum = 0;
    // var liNum = 0;

    var timer1 = setInterval(tab,1000); // 定时切换

    //nav添加鼠标事件
    navs.forEach(function(e,i){
        e.onmouseover = function(){
            rm(inNum,outNum);
            outNum = i;
            inNum = 0;
            ad(inNum,outNum);  
        }; 

        var inLis = Array.from(divs[i].getElementsByTagName("li"));
        inLis.forEach(function(ea,idx){
            ea.onmouseover = function(){
                rm(inNum,outNum);
                inNum = idx;
                ad(inNum,outNum);  
            }
        });

    });

    //切换,先li切换，当切换到最后一个li，然后切换nav
    function tab(){
        rm( inNum,outNum );
        inNum ++ ;
        inNum > imgs.length-1 && ( inNum = 0 , outNum ++ );
        outNum > navs.length - 1 && ( outNum = 0 ) ;
        ad(inNum,outNum);
    }
 
    //清除class
    function rm(i,o){
        lis = Array.from(inDiv[o].getElementsByTagName("li"));
        imgs = Array.from(inDiv[o].getElementsByTagName("img"));
        navs[o%navs.length].className = "";
        divs[o%divs.length].className = "";
        imgs[i%imgs.length].className = "";
        lis[i%lis.length].className = "";
    }
    //添加class
    function ad(i,o){
        lis = Array.from(inDiv[o].getElementsByTagName("li"));
        imgs = Array.from(inDiv[o].getElementsByTagName("img"));
        navs[o%navs.length].className = "active";
        divs[o%divs.length].className = "show";
        imgs[i%imgs.length].className = "active";
        lis[i%lis.length].className = "active";

    }

    main.onmouseenter = function()
    {
        clearInterval(timer1);
    }
    main.onmouseleave = function()
    {
        timer1 = setInterval(tab,1000);
    }

}// onload END