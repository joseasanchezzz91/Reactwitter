import React,{ Component } from 'react';
import MessageList from '../MessageList';
import InpuText from '../InpuText';
import Profilebar from '../Profilebar';
import uuid from 'uuid';



class Main extends Component {
	
  constructor(props){
  	super(props);
  	const objectAssign = require('object-assign');
  	this.state={
  			 
  		user: objectAssign({},this.props.user,{ retwee:[] },{ favo:[] }),
  		openText: false,
  		messages: [{
  			id: uuid.v4(),
  			text: "Mensaje de twee",
  			picture: "https://pbs.twimg.com/profile_images/525778302540070913/_3-_wx3E_400x400.png",
  			displayname: "JOSE SANCHEZ",
  			username: "josesanchez",
  			date: new Date() -180000,
  			retwee:0,
  			favo:0
  		},{
  			id: uuid.v4(),
  			text: "Mensaje de twee",
  			picture: "https://pbs.twimg.com/profile_images/525778302540070913/_3-_wx3E_400x400.png",
  			displayname: "JOSE SANCHEZ",
  			username: "josesanchez",
  			date: new Date() -180000,
  			retwee:0,
  			favo:0
  		}]
  	
  	}

  	this.handleOnSendText = this.handleOnSendText.bind(this);
  	this.handleOpenText =this.handleOpenText.bind(this);
  	this.handleClose=this.handleClose.bind(this);
  	this.handleFavo=this.handleFavo.bind(this);
  	this.handleRetwee= this.handleRetwee.bind(this);
  }

  handleOpenText(event){
  	event.preventDefault()
  	this.setState({ openText: true});
     
  }
handleOnSendText(event){
event.preventDefault()
let newmessage={
	id:uuid.v4(),
	picture: this.props.user.foto,
	username: this.props.user.email.split('@')[0],
	displayname: this.props.user.displayName,
	date: new Date(),
	text: event.target.text.value
};

this.setState({
	openText:false,
	messages: this.state.messages.concat([newmessage])
})

}

handleRetwee(msgId){
 let alReadyRetwee= this.state.user.retwee.filter(rt => rt ===msgId)
	if (alReadyRetwee.length ===0) {
		let messages = this.state.messages(msg => {
			if (msg.id=== msgId) {
				msg.retwee++;
			}
			return msg;
		})

		let user= Object.assing({},this.state.user)
		user.favo.push(msgId);

		this.setState({
			messages: messages,
			user:user
		});
	}

}

handleFavo(msgId){
	let alReadyFavorite= this.state.user.favor.filter(fav => fav ===msgId)
	if (alReadyFavorite.length ===0) {
		let messages = this.state.messages(msg => {
			if (msg.id=== msgId) {
				msg.favo++;
			}
			return msg;
		})

		let user= Object.assing({},this.state.user)
		user.favo.push(msgId);

		this.setState({
			messages: messages,
			user:user
		})

	}


}


  handleClose(event){
event.preventDefault()
this.setState({ openText:false});

  }
  renderOpenText(){
  	if(this.state.openText) {
  		return 	<InpuText 
  			onSendText={this.handleOnSendText}
  			onCloseText={this.handleClose} />
  	
  	}
  }




  render() {
    return (
    	<div>

    	<Profilebar 
    	picture={this.props.user.foto}
    	username={this.props.user.email.split('@')[0]}
    	onOpenText={this.handleOpenText} />
    		{this.renderOpenText()}

    	<MessageList messages={this.state.messages} 
    	onRetwee={this.handleRetwee}
    	onFavo={this.handleFavo}/>
      </div>
    );
  }
}

export default Main;
