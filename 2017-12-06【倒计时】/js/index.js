window.onload = function () {
    
        var btns = document.querySelectorAll("button");
        var covs = document.querySelectorAll(".cover");
        var cir1s = document.querySelectorAll(".cir1");
        var ipts = document.querySelectorAll("input");
        var lis = document.querySelectorAll("li");
        var botmUl = document.querySelector(".botmul");
        var btnsLen = btns.length;
        var timer1 = null;

        var out = null;
        // var liStr = [
        //     '<li><span>5.5寸Retina显示屏</span><span>8388元</span><img height="80" src="img/iPhone7.jpg" alt=""></li>',
        //     '<li><span>60寸Retina显示屏</span><span>99999元</span><img height="80" src="img/desktop.jpg" alt=""></li>',
        //     '<li><span>华为、小米。OV国产集锦</span><span>1999元</span><img height="80" src="img/andriod.jpg" alt=""></li>',
        //     '<li><span>石英手表</span><span>999元</span><img height="80" src="img/watch.jpg" alt=""></li>'
        // ];
        
        // 每个按钮添加点击事件
        for (var i = 0; i < btnsLen; i++) {
            btns[i].onoff = true;
            function btnClk(n) {
                btns[n].onclick = function () {
                    // if (!btns[n].onoff) return;
                    // btns[n].onoff = false;
                    clearInterval(timer1);
                    clearInterval(this.timer2) ;
                    iptText = ipts[n].value;
                    var nowTime = +new Date();
                    var intTime = +new Date(iptText);
                    var result = Math.floor(intTime - nowTime);
                                       
                    if(result <= 0)
                    {
                        start(n);
                    }
                    else
                    {
                        intoTime(n, result);//写入剩余时间
                        this.timer2 = setInterval(function(){
                            start(n);
                        }, 1000);
                    }

                    function start(n) {
                        var nowTime2 = +new Date();
                        var result2 = Math.floor(intTime - nowTime2);
                        result2 < 0 ? ( show(n) , clearInterval(btns[n].timer2)  ) : intoTime(n, result2);
                    }
                    
                }
            }
            btnClk(i);//用到了闭包
        }
        // 写入剩余时间
        function intoTime(x, y) {
            var spans = lis[x].querySelector(".timeP");
    
            var t = y / 1000;// 秒
            var hh = toDouble(Math.floor(t / 3600)); // 小时
            var timeStr = "剩余";
            into(hh, false);
    
            t %= 3600; //除去 整小时 后 剩余的秒数
            var MM = toDouble(Math.floor(t / 60)); // 分
            into(MM, false);
    
            t %= 60;// 除去整分钟 后剩余的秒数
            var ss = toDouble(Math.floor(t));
            into(ss, true);
    
            spans.innerHTML = timeStr;
            //根据剩余时间的位数，决定写入的个数
            function into(obj, last) {
                for (var i = 0, hLen = obj.length; i < hLen; i++) {
                    timeStr += `<span>${obj[i]}</span>`;
                }
                !last && (timeStr += "<b>:</b>");
            }
        }
    
        // 显示遮盖层
        function show(n) {
            let ps = lis[n].getElementsByTagName("p");
            cir1s[n].style.visibility = "visible";
            cir1s[n].style.transform = "rotate(340deg) scale(1)";
            // botmUl.innerHTML += liStr[n];
            // <li><span>5.5寸Retina显示屏</span><span>8388元</span><img height="80" src="img/iPhone7.jpg" alt=""></li>
            setTimeout(function(){
                botmUl.innerHTML += '<li><span>'+ps[3].innerText+'</span><span>'+ps[4].innerText+'</span>'+ps[2].innerHTML+'</li>';
            },500);
            setTimeout(function () {
                covs[n].style.visibility = "visible";
                covs[n].style.transform = 'scale(1)';
                shake(lis[n], "left", 20);
                
            }, 150);
    
        }
    
        // 抖动
        function shake(obj, attr, num) {
            var arr = [];
            var n = 0;
            for (var i = num; i > 0; i -= 5) {
                arr.push(-i, i);
            }
            arr.push(0);
            timer1 = setInterval(function () {
                obj.style[attr] = parseFloat(getComputedStyle(obj)[attr]) + arr[n] + "px";
                n++;
                n > arr.length && (clearInterval(timer1), n = 0 );
            }, 50)
        }
    
        function toDouble(n) {
            return n < 10 ? n = "0" + n : "" + n;
        }
    
    
    
    
    }//onload