import React,{Component} from 'react';
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            ondb:false,
            stxt:""
        }
    }
    checked = () => {
        let {fn,id} = this.props;
        fn(id);
    }
    rmLi = ()=>{
        let {rm,id} = this.props;
        rm(id);
    }
    dbclick = ()=>{
        let {txt} = this.props;
        this.setState({
            ondb:true,
            stxt:txt
        },()=>{
            this.refs.ipt.focus();
            this.refs.ipt.selectionStart = this.refs.ipt.value.length;
        });
    }
    blur = ()=>{
        let {stxt} = this.state;
        let {id,txt,cv} = this.props;
        if(stxt){
            cv(id,stxt);
            this.setState({
                ondb:false
            });
        }else{
            this.setState({
                ondb:false,
                stxt:txt
            });
        }
    }
    keyup = (ev)=>{
        if(ev.keyCode === 13)this.blur();
    }
    change = (ev)=>{
        this.setState({
            stxt:ev.target.value
        });
    }
    render(){
        let {txt,checked} = this.props;
        let {ondb,stxt} = this.state;
        let cName = checked?"completed":"";
        if(ondb)cName +=" editing";
        return (
            <li 
                className={cName} 
            >
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked} 
                        onChange = {this.checked} 
                    />
                    <label
                        onDoubleClick = {this.dbclick}
                    >
                        {txt}
                    </label>
                    <button className="destroy"
                        onClick = {this.rmLi}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    ref="ipt"
                    value = {stxt} 
                    onBlur = {this.blur}
                    onKeyUp = {this.keyup} 
                    onChange = {this.change}
                />
            </li>  
        )
    }
}

export default List;