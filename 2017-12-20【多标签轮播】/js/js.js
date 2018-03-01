window.onload = function(){
    var main = document.getElementById("wrap");
    var navs = main.getElementsByTagName("a");
    var box = document.getElementById("box");
    var boxes = box.getElementsByTagName("div");
    var boxLen = boxes.length;
    var imgs = main.getElementsByTagName("img");
    var imgLen = imgs.length;
    var lis = main.getElementsByTagName("li");
    var liLen = lis.length;
    var oldnav = navs[0]; //定点清除
    var oldBox = boxes[0]; ///定点清除
    var oldNav = navs[0]; //定点清除
    var oldImg = imgs[0]; //定点清除
    var oldLi = lis[0]; //定点清除
    let num = 0;

    // 切换方法
    function tab()
    {
        for(var i=0; i< imgLen ,i< liLen; i++)
        {
            init(num);
        }
        num++;
        num = num%liLen;
    }
    // 定时器，定时切换
    var timer1 = setInterval(tab,1000);

    // 点击 nav
    navs = [].slice.call(navs);
    navs.forEach(function(e,i){
        e.onmouseover = function()
        {
            //num赋值为  当前 点击的 nav 的 下标 乘以 boxLen ， 即 i*boxLen，
            //这样点第 1 个nav，i 为 0 ，num为 0，第0个li，即当前选项卡的第一个li为active
            //这样点第 2 个nav，i 为 1 ，num为 3，第3个li，即当前选项卡的第一个li为active
            //这样点第 3 个nav，i 为 2 ，num为 6，第6个li，即当前选项卡的第一个li为active
            num = i*boxLen; 
            init(num); 
        }
    });
    // 点击 li
    lis = [].slice.call(lis);
    lis.forEach(function(e,i){
        e.onmouseover = function(){
            num = i; // num赋值为当前点击的li的下标
            init(num);
        }
    });
    // 鼠标进入：停止定时器、离开：重新打开定时器
    main.onmouseover = function()
    {
        clearInterval(timer1);
    }
    main.onmouseout = function()
    {
        timer1 = setInterval(tab,1000);
    }
    // 初始化
    function init(num)
    {
        oldnav.className = ""; //定点清楚
        oldBox.className = ""; //定点清楚
        oldImg.className = ""; //定点清楚
        oldLi.className = ""; //定点清楚 
        oldnav = navs[Math.floor(num/boxLen)]; //重新定义上一个，将当前定义为上一个
        oldBox = boxes[Math.floor(num/boxLen)]; //重新定义上一个，将当前定义为上一个
        oldImg = imgs[num];//重新定义上一个，将当前定义为上一个
        oldLi = lis[num];//重新定义上一个，将当前定义为上一个
        navs[Math.floor(num/boxLen)].className = "active"; //为当前添加class
        boxes[Math.floor(num/boxLen)].className = "show";//为当前添加class
        imgs[num].className = "active";//为当前添加class
        lis[num].className = "active";//为当前添加class
    }
}//onload END
