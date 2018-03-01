window.onload = function()
{
    var oul = document.getElementById("cons").getElementsByTagName("ul")[0];
    var btn = document.getElementById("btn").getElementsByTagName("span");
    var iss2b = true;
    var preact = btn[0]; // 上一个点击的按钮
    init();//初始化

    btn[0].onclick =function(){
        preact.className ="";
        this.className = "active";
        preact = this;
        //如果当前是从小到大，则按从大到小排序，反之亦然。
        iss2b ? (s2b(), btn[0].innerText = "从小到大") : (b2s() ,btn[0].innerText = "从大到小") ;
    } 
    btn[1].onclick = function(){
        preact.className ="";
        this.className = "active";
        preact = this;
        rand();
    }; 
    btn[2].onclick = function(){
        preact.className ="";
        this.className = "active";
        preact = this;
        randImg();
    }; 
    btn[3].onclick = function(){
        preact.className ="";
        this.className = "active";
        preact = this;
        randCon();
    }; 

    //初始化
    function init()
    {
        var str = "";
        // 挨个循环数组中的数据，填入
        data.forEach(function(e){
            str += "<li><img src = "+e.url+"><p>"+e.text+"</p></li>"
        });
        oul.innerHTML = str;
      
    }
    //从小到大
    function s2b()
    {
        iss2b = false;
        //根据p标签中的数字，从小到大排序
        data.sort(function(a,b){
            return parseFloat(a.text) - parseFloat(b.text);
        });
        init();
    }

    //从大到小
    function b2s()
    {
        iss2b = true;
        //根据p标签中的数字，从大到小排序
        data.sort(function(a,b){
            return parseFloat(b.text) - parseFloat(a.text);
        });
        init();
    }

    //随机
    function rand()
    {
        //返回值随机为正或者负，则随机调换数组中的数据顺序，达到随机排序的目的
        data.sort(function(){
            return Math.random() - 0.5;
        });
        init();
    }

    //随机li中的图片
    function randImg()
    {
        //先随机打乱数组
        data.sort(function(){
            return Math.random() - 0.5;
        });
      
        var imgs = oul.getElementsByTagName("img");
        imgs = [].slice.call(imgs);//将imgs类数组变为数组
        
        //将已经打乱的数组中的数据中的图片地址随机填入每个img标签的src中
        imgs.forEach(function(e,i){
            e.src = data[i].url;
        });
    }
    //随机li中的图片中 p 中的文字，但是 p 中的数字序号不变
    function randCon()
    {
        data.sort(function(){
            return Math.random() - 0.5;
        });
      
        var imgs = oul.getElementsByTagName("img");
        var ps = oul.getElementsByTagName("p");
        imgs = [].slice.call(imgs);
        ps = [].slice.call(ps);
        
        //将已经打乱的数组中的数据中的图片地址随机填入每个img标签的src中
        imgs.forEach(function(e,i){
            e.src = data[i].url;
        });

        //先将每个p中的数字保留，然后将已经打乱的数组中的数据中的文字（除去数字）随机和之前的保留的数字拼接，然后填入p标签中
        //达到序号不变，而图片和文字都在变的效果
        ps.forEach(function(e,i){
            e.innerText = e.innerText.split("-")[0] +"-"+ data[i].text.split("-")[1];
        });
    }

    


}