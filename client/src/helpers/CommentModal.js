import React, {Component} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	Form,
	FormGroup,
	Input
	} from 'reactstrap';
import axios from 'axios';


class CommentModal extends Component {
	constructor(props) {
      super(props);

      this.state = {
      comment: '',
      modal:false,
      name: ''
    };
      
  }



	simpleToggle = () => {
		const data = {
			name: this.state.name,
			comment: this.state.comment,
			timestamp: Math.floor(Date.now() / 1000)
		}
		if(data.name!=="")
		{
			axios.post('/comments',data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
		this.setState({
			modal: !this.state.modal,
			name: "",
			comment: ""
		});
	}


	render() {
		return (
			<div>
			<Modal isOpen={this.state.modal}
			toggle={this.simpleToggle}>
			<ModalHeader toggle={this.simpleToggle}>Here you can input your comment</ModalHeader>
			<ModalBody>
			 <Form>
        <FormGroup>
          <Label for="name">Your name:</Label>
          <Input type="name" name="name" id="name" placeholder="HippityHoppity!" 
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}/>
        </FormGroup>
        <FormGroup>
          <Label for="name">Your comment:</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Dolla dolla billz yo!"
          value={this.state.comment}
          onChange={e => this.setState({ comment: e.target.value })}/>
        </FormGroup>
        <Label for="plan">Don't be naughty and mind the language..(okay grandpa)</Label>
        <Button color= "dark"
			style={{marginTop:'1rem'}}
			onClick={this.simpleToggle}>Submit comment!</Button>
        </Form>
			
			
			</ModalBody>
			</Modal>
			</div>
			);
	}
}

export default CommentModal;