import React,{Component} from 'react';
import './message.css'
import moment from 'moment'
class Message extends Component{
	constructor(props){
		super(props);
		this.state={
			pressFavo:false,
			pressRetwee: false
		}
		this.onPressRetwee=this.onPressRetwee.bind(this);
		this.onPressFavo=this.onPressFavo.bind(this);
	}
	onPressFavo(){
		this.props.onFavo()
		this.setState({
			pressFavo:true
		})
	}
	onPressRetwee(){
		this.props.onRetwee()
		this.setState({
			pressRetwee:true
		})
	}

	render() {
	let dteformat= moment(this.props.date).fromNow()
		return (
			
			<div className="root1">
				<div className="user">
					<figure>
					<img className="avatar" src={this.props.picture} />
					</figure>
					<span className="displayname">{this.props.displayname}</span>
					<span className="username">{this.props.username}</span>
					<span className="date">{dteformat}</span>
				</div>
				<h3>{this.props.text}</h3>
				<div className="boton">
					<div className="icon">
					<span className="fa fa-reply">
					</span></div>
					<div className={(this.state.pressRetwee) ? "verde" : "icon"} onClick={this.onPressRetwee}>
					<span className="fa fa-retweet"></span>
					<span className="num">{this.props.retwee}</span>
					</div>
					<div className="icon" onClick={this.onPressFavo}>
					<span className="fa fa-star"></span>
					<span className="num">{this.props.favo}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Message;