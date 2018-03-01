import React,{Component} from 'react';
class FootM extends Component {
    constructor(){
        super();
        this.state={
            lis:[
                {
                    rt:"/all",
                    rn:'全部'
                },
                {
                    rt:"/active",
                    rn:'未完成'
                },
                {
                    rt:"/completed",
                    rn:'已完成'
                }
            ],
            act:'/all'
        } 
    }
    click = (rt)=>{
        let {changeRt} = this.props;
        changeRt(rt);
        this.setState({
            act:rt
        });
    }
    rm =()=>{
        let {rmCom} = this.props;
        rmCom();
    }
    render(){
        let {num} = this.props;
        let {lis,act} = this.state;
        let list = lis.map((e,i)=>{
            return (
                <li
                    key={i}><a href={`#${e.rt}`} 
                    className={e.rt ===  act?"selected":""}
                    onClick = {this.click.bind(this,e.rt)}
                >{e.rn}</a></li>
            )
        })
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{num}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {list}
                </ul>
                <span 
                    className="clear-completed"
                    onClick = {this.rm}
                >清除完成项</span>
            </footer>
        )
    }
    
}

export default FootM;