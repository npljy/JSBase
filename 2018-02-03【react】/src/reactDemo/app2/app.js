import React,{Component} from 'react';
import ReactDOM from 'react-dom';

/*
    受控组件与非受控组件
    
    在表单元素中，如果设置了value，那么会认定为受控组件
    输入内容的时候表单元素是不会改变的。

    解决方案:
        1.给表单元素加上onChange,通过onChange去修改this.state的数据
          表单的value等于this.state的val值
          通过事件对象ev的target查看元素的value值

        2.使用defaultValue

    表单元素就加onChange
        

*/

class App extends Component {
    constructor(){
        super();
        this.state = {
            val:'在里面写东西'
        }
    }
    change = (ev) => {
        this.setState({
            val:ev.target.value
        });
        // console.log(ev.target.value);
    }

    render(){
        let {arr,num,val} = this.state;
       
        return (
            <div>
                <input type="text"
                    value={val}
                    // defaultValue={val}
                    onChange={this.change}
                />
                <hr />
                <div>{val}</div>
            </div>
        )
    }

   
}

 

export default App;

