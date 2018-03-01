import React,{Component} from 'react';
class HeadM extends Component {
    constructor(){
        super();
        this.state = {
            val : ''
        }
    }

    render(){
        let {val} = this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    value={val} 
                    onChange = {this.change} 
                    onKeyUp = {this.keyup}
                    className="new-todo" 
                    placeholder="请输入内容" 
                />
            </header>
        )
    }

    change = (ev)=>{
        this.setState({
            val:ev.target.value
        });
    }

    keyup = (ev)=>{
        if(ev.keyCode === 13){
            let {val} = this.state;
            let {addData} = this.props;
            let newobj = {
                id : +new Date(),
                txt : val ,
                checked : false
            }
            val && addData(newobj);
            this.setState({
                val:''
            });
        }
    }

}

export default HeadM;