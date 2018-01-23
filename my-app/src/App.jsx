import React, { Component } from 'react';
import './App.css';
import  { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

import Routes from './routes';

export default () => <Routes />;




// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			postalcode: '8888',
// 			newPostalCode: ''
// 		}
// 	}


// 	changePostalCode() {
// 		this.setState({postalcode: this.state.newPostalCode});
// 	}



// 	render() {
// 		return(
// 		<div className="App">
// 			<div> Postal Code: {this.state.postalcode} </div>
// 			<div>Find Your MP Around Your Area</div>
// 			<FormGroup>
// 				<InputGroup>
// 					<FormControl
// 						type = 'text'
// 						placeholder= "Postal Code"
// 						onChange={event => this.setState({newPostalCode: event.target.value})}
// 					/>
// 					<InputGroup.Addon onClick={() => this.changePostalCode()}>
// 						<Glyphicon glyph='search'></Glyphicon>
// 					</InputGroup.Addon>	
// 				</InputGroup>
// 			</FormGroup>
// 		</div>
// 		)
// 	}
// }