    /**
     * 修饰器不仅可以修饰类，还可以修饰类的属性。
     * 
     * 
     * 
    */
    function log(target){
        /**
         * 获取对象的所有自身属性的 描述符
         * a={x:'x1',y:'y1',z:'z1'}
         * Object.getOwnPropertyDescriptors(a)
         * 结果为
         * x: {value: "x1", writable: true, enumerable: true, configurable: true}
         * y: {value: "y1", writable: true, enumerable: true, configurable: true}
         * z: {value: "z1", writable: true, enumerable: true, configurable: true}
         * __proto__: Object
         * 
         * */ 
        var desc = Object.getOwnPropertyDescriptors(target.prototype);
        
        for(let key of Object.keys(desc)){
            if(key === 'constructor'){
                continue;
            }
            const fn = desc[key].value;
            if('function' === typeof fn){
                Object.defineProperty(target.prototype,key,{
                    value(... args){
                        console.log("before"+key)
                        const ret = fn.call(this,args)
                        console.log("after"+key)
                        return ret;
                    }
                })
            }
        }
    }




    @log 
    class Numberic{
        PI  =  3.1415926;
        add(...nums){
            return nums.reduce((p,n)=>(p+n),0)
        }
    }

    new Numberic().add(1,2,3,4)
    