import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<div className="App">
			<Link to='/mp/tinpeiling'>Tin Pei Ling</Link><br/>
			<Link to='/mp/limbiowchuan'>Lim Biow Chuan</Link>
		</div>
		)
	}
}

export default App;