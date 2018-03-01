import React , {Component} from 'react';
import '../css/index.css'
import Data from './data';
import List from './list';
import Nav from './nav';

class Suiji extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			data:Data,
			arr:JSON.parse(JSON.stringify(Data)),
			nav:["从小到大","打乱顺序","打乱内容"],
			actNav:0,
			big:0
		}
	}
		
	actFn = (id,num)=>{
		this.setState({
			actNav:id,
			big:num
		});
	}
	render() {
		let {arr,nav,actNav,big} = this.state;
		switch(actNav){
			case 0 :
				arr = this.state.data;
				if(big === 0){
					arr.sort(function(a,b){
						return a.text.charAt()-b.text.charAt();
					});
				}
				else{
					arr.sort(function(a,b){
						return b.text.charAt()-a.text.charAt();
					});
				}
				break;
			case 1 :
				arr.sort(function(){
					return Math.random()-.5;
				});
				break;
			case 2 :
				arr.sort(function(){
					return Math.random()-.5;
				});
				if(big===0){
					arr.forEach((e,i) => {
						e.text = (i+1)+e.text.substr(1)
					});
				}
				else{
					let len = arr.length;
					arr.forEach((e,i) => {
						e.text = (len--)+e.text.substr(1)
					});
				}
				break;
		}
		let list = arr.map((e,i)=>{
			return (
				<List {...{
					key:i,
					id:i,
					url:e.url,
					txt:e.text
				}} />
			)
		});
		let navs = JSON.parse(JSON.stringify(nav));
		let navList = navs.map((e,i)=>{
			return (
				<Nav {...{
					key:i,
					id:i,
					txt:e,
					actNav:actNav,
					actFn : this.actFn,
					big:big
				}}/>
			)
		});
		
		return ( 
			<section id="wrap">
				<header id="head">
					<img src={require("../img/logo.png")} alt=""/>
					<div id="btn" className="clearfix">
						{navList}
					</div>
				</header>
				<article id="cons">
					<ul className="list clearfix">
						{list}
					</ul>
				</article>
			</section>
		)
	}
}

export default Suiji;


		



