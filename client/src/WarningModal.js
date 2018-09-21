import React, {Component} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label
	} from 'reactstrap';


class WarningModal extends Component {
	constructor(props) {
      super(props);
      
  }
	state = {
		modal:false,
		tit:'default',
		content:''
	};


	toggle = (e) => {
		console.log(e);
		if(e ==="jsonformat")
		{
		this.setState({
			modal: !this.state.modal,
			tit:'JSON malformed',
			content:"Your JSON is in an invalid format and we couldn't read it!"
		});
	} else {
		this.setState({
			modal: !this.state.modal,
			tit:'Incorrect file format: something went wrong',
			content:"Check if your CSV file is correct or if you uploaded the correct file"
		});
		}
	}

	simpleToggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	}




	render() {
		return (
			<div>
			<Modal isOpen={this.state.modal}
			toggle={this.simpleToggle}>
			<ModalHeader toggle={this.simpleToggle}>{this.state.tit}</ModalHeader>
			<ModalBody>
		
			<Label for="plan"> {this.state.content}</Label>
			<Button color= "dark"
			style={{marginTop:'2rem'}}
			onClick={this.simpleToggle}>OK! ill try to fix it</Button>
			
			</ModalBody>
			</Modal>
			</div>
			);
	}
}


export default WarningModal;