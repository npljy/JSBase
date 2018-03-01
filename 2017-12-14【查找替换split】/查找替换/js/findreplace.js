window.onload = function(){
    var open = document.getElementById("open");
    var find = document.getElementById('find');
    var replace = document.getElementById('replace');
    
    var open2 = document.getElementById("open2");
    var find2 = document.getElementById('find2');
    var replace2 = document.getElementById('replace2');
    var close = document.getElementById('close');

    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var obottom = document.getElementById('bottom');
    var btn1 = document.getElementById('btn1');

    var valP = document.getElementById('top').getElementsByTagName("p")[0];
    var val = valP.innerText;
    var isopen = false; // 记录是否展开
    var isfind = true;//记录点击的是 "查找"  还是 "替换"
    var str = ""; // 储存 查找 或者 替换后的字符串
    var arr = []; // 储存 查找 或者 替换过程中，split 之后的数据，可以根据数组成都减一 算出命中的个数
    open.onclick = function(){
        //如果没有展开则展开，如果已经展开则关闭
        if(!isopen)
        {
            isopen = true;
            find.style.top = "95px";
            replace.style.top = "190px";
            open.getElementsByTagName("img")[0].style.transform = "rotate(45deg)";
        }
        else
        {
            isopen = false;
            find.style.top = "";
            replace.style.top = ""; 
            open.getElementsByTagName("img")[0].style.transform = "rotate(0)";
        }
    }

    find.onclick = function(){
        isfind = true;
        obottom.style.display = "block";
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";

        text1.value = text2.value = text3.value = "";
    }

    find2.onclick = function()
    {
        isfind = true;
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        text1.value = text2.value = text3.value = "";
    }

    replace.onclick = function(){
        isfind = false;
        obottom.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "block";
        text1.value = text2.value = text3.value = "";

    }

    replace2.onclick = function()
    {
        isfind = false;
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "block";
        text1.value = text2.value = text3.value = "";
    }


    btn1.onclick = function()
    {

        var txt = val;
        if(isfind)//如果点击的是查找
        {
            var sw = text1.value;
            if( !txt.includes(sw) )
            {
                return info.innerText = "没有找到\""+sw+"\"";
            }
            arr = txt.split(sw);
            info.innerText = "共找到"+(arr.length-1)+"个\""+sw+"\"";
            str = arr.join("<span class='hit'>"+sw+"</span>");
            valP.innerHTML = str;
        }
        else //点击的是替换
        {
            var sw = document.getElementById("text2").value;
            var sw2 = document.getElementById("text3").value;
            if( !txt.includes(sw) )
            {
                return info.innerText = "没有找到\""+sw+"\"";
            }
            arr = txt.split(sw);
            info.innerText = "共将"+(arr.length-1)+"个\""+sw+"\"替换成了\""+sw2+"\"";
            str = arr.join("<span class='hit'>"+sw2+"</span>");
            valP.innerHTML = str;
            val = valP.innerText;
            
        }



    }

    close.onclick = function()
    {
        //关闭的时候清空 input 中的 value 
        obottom.style.display = "none";
        text1.value = text2.value = text3.value = "";

    }





}// onload END