import React,{Component} from 'react';
class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            stxt:["从小到大","从大到小"],
        }
    };
    click =()=>{
        let {id,actFn,big} = this.props;
        if(id===0){
            big = big ? 0 : 1;
        }
        actFn(id,big);
    }
    render(){
        let {stxt} =this.state;
        let {id,actNav,txt,big} = this.props;
        if(id===0){
            txt = stxt[big];
        }
        return (
            <span 
                className= {actNav===id?"active":" "}
                onClick = {this.click.bind(this,id)}
            >{txt}</span>
        )
    }
}

export default Nav;
