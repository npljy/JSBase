const t = {
    //  获取元素 s：查找目标， p：父级元素
    $ : function( s , p = document){
            return p.querySelectorAll(s);
        }
    //  获取所有子元素 get chhildren
    ,gcs : function(id){
            var arr = [];
            for(a in data){
                if(data[a].pid == id)arr.push(data[a]);
            }
            return arr;
        },
    //  获取父元素 get parent
    gp : function(id){

        }
    //  获取所有父元素 get parents
    ,gps : function(id){
            var arr = [];
            var _this = data[id];
            while(_this){
                arr.unshift(_this);
                _this = data[""+_this.pid];
            }
            return arr;
        }
    ,crt : function(tagname,classname = "",idx = ""){
            var tag = document.createElement(tagname);
                tag.className= classname;
                tag.dataset.idx = idx;
            return tag;
        }

}