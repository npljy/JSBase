import React , {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {url,txt} = this.props;
        return ( 
<<<<<<< HEAD
            //url中的点 会报错，应该将 点 拼接进来
            <li><img src={require("../"+url)} alt=""/><p>{txt}</p></li>
=======
            <li><img src={require("../"+url)} alt=""/><p>{txt}</p></li> //url中的点 会报错，应该将 点 拼接进来
>>>>>>> a1bbb1bc3a992dd77140c6804ba3b6658330f89f
        )
    }
}
 
export default List;
