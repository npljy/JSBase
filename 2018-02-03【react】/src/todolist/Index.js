import React,{Component} from 'react';
import List from "./css/list"
import './css/index.css';

class Index extends Component {
    constructor(){
        super();
        this.state={
            arr:[],
            val:""
        }
    }
    render(){
        let {arr,val} = this.state;
        let all = arr.every(e=>e.checked)?false:true;
        let numArr = arr.filter(e=>!e.checked);
        let list = arr.map((e,i)=>{
            let obj = {
                key:i,// 必须有，没有会报错
                id:e.id,
                txt:e.txt,
                checked:e.checked,
                fn:this.changeChked,
                rm:this.rmLi
            }
            // 结构obj
            // const b = {...a} ，相当于 const b = Object.assign({}, a)
            return (<List {...obj}/>) 
        });

        return (
            <section className="todoapp">
                <div>
                    <header className="header" >
                        <h1>todos</h1>
                        <input 
                            onKeyUp = {this.keyup}
                            onChange = {this.change}
                            value = {val}
                            className="new-todo" 
                            placeholder="请输入内容" />
                    </header>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            // checked={checked?true:false} 
                            checked={all} 
                            onClick = {this.chekAll}
                        />
                        <ul className="todo-list">
                           {list}
                        </ul>
                    </section>
                    <footer class="footer">
                        <span class="todo-count">
                            <strong>{numArr.length}</strong>
                            <span>条未选中</span>
                        </span>
                    </footer>
                </div>
            </section>
        )
    }

    keyup = (ev)=>{
        if(ev.keyCode === 13){
            let {arr,val} = this.state;
            if(val){
                let arr2 = arr.concat();
                arr2.push(
                    {
                        id:arr.length,
                        txt:val,
                        checked : false
                    }
                );
                this.setState({
                    arr:arr2,
                    val:""
                });
            }
        }
    }

    change = (ev)=>{
        this.setState({
            val:ev.target.value
        });
    }
    changeChked = (id)=>{
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id === id){
                e.checked = !e.checked;
            }
        })
        this.setState({
            arr
        })
    }
    chekAll = ()=>{
        let {arr} = this.state;
        if(arr.every(e => e.checked)){
            arr.forEach(e=>e.checked = false)
        }
        else{
            arr.forEach(e=>e.checked = true)
        }
        this.setState({
            arr
        })
    }
    rmLi = (id)=>{
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2 = arr2.filter(e=>{
            return e.id != id;
        })
        this.setState({
            arr:arr2
        })
    }

}

export {Index};

