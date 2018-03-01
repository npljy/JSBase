import React,{Component} from 'react';
class List extends Component {
    change = () => {
        let {fn,id} = this.props;
        fn(id);
    }
    rmLi = ()=>{
        let {rm,id} = this.props;
        rm(id);
    }
    render(){
        let {txt,checked} = this.props;
        return (
            <li className={checked?"completed":"" } >
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked} 
                        onChange = {this.change}
                        />
                    <label>{txt}</label>
                    <button className="destroy"
                        onClick = {this.rmLi}
                    ></button>
                </div>
            </li>  
        )
    }
}

export default List;