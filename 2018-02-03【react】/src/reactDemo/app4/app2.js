import React,{Component} from 'react';

/*
    表单控件 checked
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            arr:[
                {
                    id:0,
                    checked:false
                },
                {
                    id:1,
                    checked:false
                },
                {
                    id:2,
                    checked:false
                },
                {
                    id:3,
                    checked:true
                }
            ]
        }
    }
  
    change = (id) => {
        let {arr} = this.state;
        let arr2 = arr.concat();

        arr2.forEach(e=>{
            if(e.id == id){
                e.checked = ! e.checked
            }
        });

        // console.log(arr2);
        
        this.setState({
            arr:arr2
        })
    }

    all = () => {
        let {arr} = this.state;
        let arr2 = arr.concat();

        arr2.forEach(e=>{
            e.checked = true
        });

        this.setState({
            arr:arr2
        })

    }

    allNo = () => {
        let {arr} = this.state;
        let arr2 = arr.concat();

        arr2.forEach(e=>{
            e.checked = false
        });

        this.setState({
            arr:arr2
        })
    }

    allYe = () => {
        let {arr} = this.state;
        let arr2 = arr.concat();

        arr2.forEach(e=>{
            e.checked = !e.checked
        });

        this.setState({
            arr:arr2
        })
    }
  
    
    render(){
        let {arr} = this.state;
        let inputs = arr.map((e,i)=>{
            return <input 
                type="checkbox" 
                key={i}
                checked = {e.checked}
                onChange = {this.change.bind(this,e.id)}
            />
        });

        return (
            <div>
                <button
                    onClick={this.all}
                >全选</button>
                <button
                    onClick={this.allNo}
                >全不选</button>
                <button
                    onClick={this.allYe}
                >反选</button>
                {
                    inputs
                }
            </div>
        )
    }

    

}

export default App;

