window.onload = function(){
    var da = document.getElementById("da");
    var db = document.getElementById("db");
    var sx = document.getElementById("sx");
    var zg = document.getElementById("zg");
    var btn = document.getElementById("btn");
    

    btn.onclick = function()
    {
        console.log("计时开始")
        var aval = da.value;
        var bval = db.value = "";
        var alen = aval.length;
        zg.innerText = alen;
        var idx = 0;
        var timer = setInterval(function(){
            db.value += aval.substr(idx,1);
            da.value = da.value.slice(1);
            idx++;
            idx == alen && (clearInterval(timer) ,console.log("计时结束") ) ;
        },100);
    }
    
    // 时时刻刻计算左边的总长度和剩余长度
    var timer2 = setInterval(function(){
        sx.innerText = da.value.length;
    },100);

   
}// onload END