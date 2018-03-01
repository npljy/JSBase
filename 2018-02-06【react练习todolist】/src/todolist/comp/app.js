import React,{Component} from 'react';
import List from "./list"
import HeadM from "./head"
import FootM from "./foot"
import '../css/index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            arr:[],
            rt:'all'
        }
    }
    
    render(){
        let {arr,rt} = this.state;
        let numArr = arr.filter(e=>!e.checked);
        let num = numArr.length;
        let all = !arr.every(e=>e.checked);
        let list = arr.filter((e,i)=>{
            switch(rt){
                case '/all' : 
                    return e;
                    break;
                case '/active' : 
                    return !e.checked;
                    break;
                case '/completed' : 
                    return e.checked;
                    break;
                default :
                    return e;
                    break;
            }
        });
        list = list.map((e,i)=>{
            let obj = {
                key:i,
                id:e.id,
                txt:e.txt,
                checked:e.checked,
                fn:this.changeChked,
                rm:this.rmLi,
                cv:this.changeVal
            }
            return <List {...obj}/>
        })
        return (
            <section className="todoapp">
                <div>
                    <HeadM addData={this.addData}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}  
                            onClick = {this.chekAll}
                        />
                        <ul className="todo-list">
                            {list}
                        </ul>
                    </section>
                    <FootM num={num}  changeRt={this.changeRt} rmCom={this.rmCompleted}/>
                </div>
            </section>
        )
    }

    addData = (obj)=>{
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.unshift(obj);
        this.setState({
            arr:arr2
        });
    }
    rmCompleted = ()=>{
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2 = arr2.filter(e=>{
            return !e.checked;
        });
        this.setState({
            arr:arr2
        });
    }
    changeRt = (route)=>{
        this.setState({
            rt:route
        });
    }

    changeChked = (id)=>{
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e=>{
            if(e.id === id){
                e.checked = !e.checked;
            }
        })
        this.setState({
            arr:arr2
        })
    }
    changeVal = (id,val)=>{
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e=>{
            if(e.id === id){
                e.txt = val;
            }
        })
        this.setState({
            arr:arr2
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
            return e.id !== id;
        })
        this.setState({
            arr:arr2
        })
    }

}

export default App;

