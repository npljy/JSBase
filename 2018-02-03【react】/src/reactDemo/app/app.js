import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './app.css';

/*
    事件、语法相关
    
    添加事件函数的时候，事件函数默认的this为undefined

    如果要让事件函数中的this指向类，方法有以下几种:
        1.在绑定事件函数的时候使用bind(this)
            onClick = {this.click.bind(this)}
        2.在constructor初始化this

        3.如果使用create-react-app自带一种方式(默认开启初始化语法器)
            click = () => {
                this指向类
            }

*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            arr:[1,2,3,4],
            num:0
        }

        // this.click = this.click.bind(this);
    }

    // click(){
    //     console.log(this);
    // }
    click = () => {
        // console.log(this);

        let arr = this.state.arr.concat();

        arr.push(Math.random());

        this.setState({
            arr
        });

    }

    render(){
        let {arr,num} = this.state;
        let list = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        });
        console.log('进来了');
        return (
            <div>
                <div className="app">你好，世界</div>
                {/* <button onClick={this.click.bind(this)}>点击添加</button> */}
                <button onClick={this.click}>点击添加</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default App;

