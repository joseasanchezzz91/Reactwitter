import React,{Component} from 'react';
import './Profilebar.css';

class Profilebar extends Component{
	constructor(){
		super();

	}
	render() {
		return (
			<div className="root2">
				
					<figure>
					<img className="avatar1" src={this.props.picture} />
					</figure>
					<span className="username1">Hola @{this.props.username}</span>
					<button onClick={this.props.onOpenText} className="btn">
					<span className="fa fa-lg fa-edit"> </span> Twee!
					</button>
			</div>
		);
	}
}

export default Profilebar;