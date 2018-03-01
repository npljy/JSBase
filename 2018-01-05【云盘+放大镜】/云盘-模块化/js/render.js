var treeMenu = t.$("#section ree-menu")[0];
var breadNav = t.$(".bread-nav")[0];
var folders = t.$(".folders")[0];
var fempty = t.$(".f-empty")[0];
var checkAll = t.$(".checkall i")[0];
// function renderTree(obj,id){
    
// }
 /*
    <div class="file-item">
        <img src="img/folder-b.png" alt="" />
        <span class="folder-name">JS基础课程</span>
        <input type="text" class="editor"/>
        <i class="checked"></i>
    </div>
 */ 

// //渲染结构树，显示当前id的 所有子元素 和 所有兄弟元素 和 所有父级元素
// function renderTree(id=0){
    
// }


//渲染面包屑
renderNav(0);
function renderNav(id=0){
    var arr = t.gps(id);
    var str = "";
    arr.forEach((e,i) => {
        if(i == arr.length-1){
            str += "<span>"+e.title+"</span>"
        }
        else{
            str += "<a href='javascript:' data-oid = '"+e.id+"' data-pid = '"+e.pid+"'>"+e.title+"</a>"
        }
    });
    breadNav.innerHTML = str;
    var navas = Array.from(t.$("a",breadNav));
    navas.forEach( e => {
        e.onclick = function(){
            renderCont(e.dataset.oid);
            renderNav(e.dataset.oid);
        }
    });
}


//渲染右侧内容   
renderCont(0);
function renderCont(id=0){
    folders.innerHTML = "";
    checkAll.className = "checkedAll";
    var arr = t.gcs(id);
    if(!arr.length){
        fempty.style.display = "block";
        return;
    }
    else{
        fempty.style.display = "none";
    }
    arr.forEach((e,i) => {
        var cdiv = t.crt("div","file-item");
        var cimg = t.crt("img","",id);
            cimg.src = "img/folder-b.png";
        var cspan = t.crt("span","folder-name");
            cspan.innerText = e.title;
        var cipt = t.crt("input","editor");
            cipt.type = "text";
        var ci = t.crt("i");
        
        cimg.ondblclick = function(){
            renderNav(e.id);
            renderCont(e.id)
        }
        
        ci.onclick = function(){
            this.classList.toggle("checked");
            cdiv.classList.toggle("active");
            cis = Array.from(t.$("i",folders));
            checkAll.className = cis.every( e => e.classList.contains("checked") ) ? "checked" : "checkedAll";
        }

        cdiv.appendChild(cimg);
        cdiv.appendChild(cspan);
        cdiv.appendChild(cipt);
        cdiv.appendChild(ci);
        folders.appendChild(cdiv);
    });
}


