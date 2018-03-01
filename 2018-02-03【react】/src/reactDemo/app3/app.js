import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/*
    输入内容添加li的例子
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            val:'',
            arr:[]
        }
    }
    //就是以前的事件函数
    change = (ev) => {
        this.setState({
            val:ev.target.value
        });
    }

    keyup = (ev) => {
        if(ev.keyCode == 13){
            let {arr,val} = this.state;
            let arr2 = arr.concat();
            arr2.unshift(val);
            this.setState({
                arr:arr2,
                val:''
            });
        }
    }

    //react自带
    render(){
        let {val,arr} = this.state;
       
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.change}
                    onKeyUp={this.keyup}
                    value={val}
                />
                <ul>
                    {
                        arr.map((e,i)=>{
                            return <li key={i}>{e}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

   
}

 

export default App;

