import React,{Component} from 'react';
class List extends Component {
    change = () => {
        let {cc,id} = this.props;
        cc(id);
    }
    render(){
        let {txt,checked} = this.props;
        return (
            <li>
                <span>{txt}</span>
                <span>{`${checked}`}</span>
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange = {this.change}
                />
            </li>
        )
    }
}

export default List;

