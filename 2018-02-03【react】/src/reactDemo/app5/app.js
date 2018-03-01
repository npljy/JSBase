import React,{Component} from 'react';
import List from './list';
/*
    组件之间的通信

        父组件的数据，通过给子组件添加属性来传递数据

        子组件通过this.props去接收父组件的数据
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            arr:[
                {
                    id:0,
                    txt:'我是第一个数据',
                    checked:false
                },
                {
                    id:1,
                    checked:false,
                    txt:'我是第二个数据',
                },
                {
                    id:2,
                    checked:false,
                    txt:'我是第三个数据',
                },
                {
                    id:3,
                    checked:true,
                    txt:'我是第四个数据',
                }
            ],
            num:10
        }
    }

    changeChecked = (id) => {
        let {arr} = this.state;

        arr.forEach(e=>{
            if(e.id == id){
                e.checked = !e.checked
            }
        });

        this.setState({
            arr
        })

    }
  
    render(){
        let {arr,num} = this.state;

        let list = arr.map((e,i)=>{
            let obj = {
                key:i,
                txt:e.txt,
                checked:e.checked,
                id:e.id,
                cc:this.changeChecked
            }
            return <List {...obj}/> 
            //txt={e.txt} checked={e.checked} key={i}
        })

        return (
            <div>
                <ul>
                    {/* <List b={num} /> */}
                    {list}
                </ul>
            </div>
        )
    }

    

}

export default App;

