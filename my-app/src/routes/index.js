import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home';
import Search from './Search';

export default () => 
	(<BrowserRouter>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/search' exact component={Search} />
		</Switch>
	</BrowserRouter>);