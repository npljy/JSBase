import React,{Component} from 'react';

/*
    表单控件 checked
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            checked:false
        }
    }
    //才打开页面的时候会进入一次，当数据更改的时候也会进render
    checkedFn = () => {
        let {checked} = this.state;
        this.setState({
            checked:!checked
        })
    }
    
    render(){
        let {checked} = this.state;

        return (
            <div>
                <div> {`${checked}`} </div>
                <input 
                    type="checkbox"
                    // checked={checked}
                    defaultChecked={checked}
                    onChange = {this.checkedFn}
                />
            </div>
        )
    }

    

}

export default App;

