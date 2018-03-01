window.onload = function () {
    var btn = document.getElementById("tijiao");
    var msg = document.getElementById("message");
    var lis = document.getElementsByTagName("li");
    var mList = document.getElementById("mList");

    var li1 = document.createElement("li");
    li1.className = "mText clearfix";
    var cont1 = document.createElement("span");
    
    var contP1 = document.createElement("p");
    contP1.className = "mComtent";
    li1.appendChild(cont1);
    li1.appendChild(contP1);

    var num = 0 ; 
    btn.onclick = function () {
        if (msg.value.replace(/(^\s*)|(\s*$)/g, "")) {
            contP1.innerText = msg.value;
            num%2 ? cont1.className = "mIcon1" : cont1.className = "mIcon1 mIcon2";
            mList.appendChild(li1.cloneNode(true));
            num++;
        }
    }

}//onload END