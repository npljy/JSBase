window.onload = function () {
    var divs = null;
    var num = 0; // "新建文件夹"后面的数字
    var checknum = 0; // 已选中的个数
    var wrap = document.getElementById("wrap");
    var as = document.getElementsByTagName("a");
    var files = document.getElementById("files");
    var cont1 = document.createElement("div");
    cont1.className = "ico";
    var cont2 = document.createElement("input");
    cont2.type = "checkbox";
    cont2.className = "check"; //鼠标划过的时候添加
    var cont3 = document.createElement("span");
    cont3.style.color = "black";
    var cont4 = document.createElement("input");
    cont4.type = "text";
    cont4.className = "text";
    cont4.style.display = "none";

    var newfile = document.createElement("div");
    newfile.className = "file";
    newfile.appendChild(cont1)
    newfile.appendChild(cont2);
    newfile.appendChild(cont3);
    newfile.appendChild(cont4);

    // console.log(newfile);
    as[0].onclick = function () {
       
        // console.log(newfile.cloneNode(true));
        cont3.innerText = "新建文件夹"+(++num);
        files.appendChild(newfile.cloneNode(true));
        divs = Array.from(document.querySelectorAll(".file"));
        divs.forEach(function (e) {
            // 鼠标覆盖 选中
            e.onmouseover = function () {
                this.classList.add("fileActive");
            }
            // 鼠标离开  取消选中
            e.onmouseout = function () {
                !this.children[1].checked && this.classList.remove("fileActive");
            }
            // 点击 若没选中 则选中 ，否则取消选中
            e.onclick = function () {
                this.children[1].checked = !this.children[1].checked;
            }
        });

        as[1].onclick = function () {
            //点击删除的时候，删除已经选中的
            divs.forEach(function (e) {
                e.children[1].checked && e.remove();
            });
            // 文件夹过多，自适应高度
            wrap.style.height = files.clientHeight + files.offsetTop + 180 + "px";
            wrap.style.backgroundSize = "cover";
        }
      
        // 自适应高度
        wrap.style.height = files.clientHeight + files.offsetTop + 180 + "px";
        wrap.style.backgroundSize = "cover";

        //双击文字，可以修改
        var spans = Array.from(files.getElementsByTagName("span"));
        spans.forEach((e,i)=>{
            e.onclick = function(evt){
                // 因为点击整个div会取消选中checkbox，所以此处 取消冒泡
                evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
            }
            e.nextElementSibling.onclick = function(evt){
                // 因为点击整个div会取消选中checkbox，所以此处 取消冒泡
                evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
            }
            //双击修改文字
            e.ondblclick = function(){
                rename(this);                           
            }

            //按 F2 修改文字
            document.onkeydown = function(evt){
                checknum = 0;
                var _this = null;
                divs = Array.from(document.querySelectorAll(".file"));
                divs.forEach(function (e){
                    e.children[1].checked && ( _this = e.children[2] , checknum++ ) ;
                });
                checknum == 1 && evt.keyCode == 113 && rename(_this); 
            }
            
            //回车键 确定修改
            e.nextElementSibling.onkeydown = function(evt){
                evt.keyCode == 13 && sub(this);
                
            }
            //失去焦点 确定修改
            e.nextElementSibling.onblur = function(){
                sub(this);
            }
            // 修改
            function rename(obj){
                obj.style.display = "none"; // 隐藏 span
                obj.nextElementSibling.style.display = "block"; // 显示input
                obj.nextElementSibling.value = obj.innerText; // input中的内容为span中的内容
                obj.nextElementSibling.select();//获取焦点之后，选中内容
            }
            //确定
            function sub(obj){
                mytrim(obj.value) && (obj.previousElementSibling.innerText = obj.value ) ; // 将input中的内容添加到span中
                obj.style.display = "none"; // 隐藏input
                obj.previousElementSibling.style.display = "block";// 显示span  
            }
                
        });

    }
    //去除前后空白
    function mytrim(str){
        return str.replace(/(^\s*)|(\s*$)/g,"");
    }


}//onload END