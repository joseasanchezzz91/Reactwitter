import React,{Component} from 'react';
import Message from '../Message';
import './messagelist.css';

class MessageList extends Component
{
	constructor(props){
		super(props)

		}
	render() {
		return (
			<div className="rt"> 
			{this.props.messages.map( msg=> {
				return(
					<Message 
					key={msg.id}
					text={msg.text} 
					picture={msg.picture}
					displayname={msg.displayname}
					username={msg.username}
					date={msg.date}	
					numretwee={msg.retwee}
					numfavo={msg.favo}
					onRetwee={ ()=> this.props.onRetwee(msg.id)}
					onFavo={()=>this.props.onFavo(msg)}
					/>
					)
			}).reverse()}
			</div>
		);
	}

}

export default MessageList;