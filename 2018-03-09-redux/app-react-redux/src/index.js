import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// 1、state
let defaultState = {count:0}

// 2、reducer 
function counter(state=defaultState , action){
    const count = state.count;
    switch(action.type){
        case 'add':
            return { count : count+1 }
        default : 
            return state;
    }
}

// 3、store
const store = createStore(counter);

// 4、mapStateToProps
function mapStateToProps(state) {
    return {
      value: state.count
    }
}

// 5、action
const increaseAction = { type: 'add' }

// 6、mapDispatchToProps
function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
}

// 7、Counter Component
class Counter extends Component{
    render(){
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick = {onIncreaseClick} >增加</button>
            </div>
        )
    }
}

// 8、Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)