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
		content:'',
		butt:''
	};


	toggle = (e) => {
		if(e ==="success")
		{
		this.setState({
			modal: !this.state.modal,
			tit:'Your graph was uploaded succesfully',
			content:"Eureka! continue making new visualizations",
			butt:"Okay, thank you good sir"
		});
	} else {
		this.setState({
			modal: !this.state.modal,
			tit:'Incorrect file format: something went wrong',
			content:"There was an error uploading your visualizations, make sure you have a valid schema and data",
			butt:"OK! ill try to fix it"
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
			onClick={this.simpleToggle}>{this.state.butt}</Button>
			
			</ModalBody>
			</Modal>
			</div>
			);
	}
}


export default WarningModal;