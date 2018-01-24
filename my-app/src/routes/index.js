import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import Search from './Search';
import Records from './Records';

export default () => 
	(<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/mp/:mpName" exact component={Records} />
			<Route path="/search" exact component={Search} />
		</Switch>
	</BrowserRouter>);