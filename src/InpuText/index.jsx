import React,{Component} from 'react';
import './InpuText.css';
class InputText extends Component{

	render() {
		return (
			<form  className="form" onSubmit={this.props.onSendText}>
			<textarea name='text' className="textarea form-control"  ></textarea>
			<div className="button">
				<button className="close" onClick={this.props.onCloseText}> Cerrar </button>
				<button className="send" type='submit'>Enviar </button>
			</div>
			</form>
		);
	}	
}

export default InputText;