import React from 'react';
import './Records.css';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class Records extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.mpName)
  }

  name = "Tin Pei Ling";
  constituency = "MacPherson SMC";
  inOffice = "11 September 2015 to Present";
  data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];

  render() {
    return (
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="navbar-brand" href="#"><h2>Track My MP</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#attendence"><h2>Attendence</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h2>Votes</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h2>Topics</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h2>Words</h2></a>
            </li>
          </ul>
        </nav>
        <div class="container">
          <div class="col-md-6 col-md-offset-3" id="profile">
            <h1 class="col-md-12"> 
              {this.name} 
            </h1>
            <img class="col-md-12 mp-pic" src="http://www.jeraldinephneah.com/wp-content/uploads/2015/12/tin_pei_ling_pap.jpg"/>
            <div class="col-md-12">
              <img class="col-md-3 party-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1024px-People%27s_Action_Party_of_Singapore_logo.svg.png"/>
              <div class="col-md-9">
                <h3>MP for &nbsp;<b>{this.constituency}</b></h3>
                <h5>{this.inOffice}</h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-md-offset-3" id="attendence">
            <h1 class="col-md-12"> 
              Parliament Attendence
            </h1>

            <BarChart 
              width={600} 
              height={300} 
              data={this.data} 
              layout="vertical"
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis type="number"/>
              <YAxis type="category" dataKey="name" />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>




        </div>

      </body>
    );
  }
}

// <LineChart class="col-md-12" width={600} height={300} data={this.data}
//             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//              <XAxis dataKey="name"/>
//              <YAxis/>
//              <CartesianGrid strokeDasharray="3 3"/>
//              <Tooltip/>
//              <Legend />
//              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
//              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//             </LineChart>

// navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top
            // <div class="row col-md-12">
            //   
            // </div>

// <img class="mp-pic col-md-12" src="http://www.jeraldinephneah.com/wp-content/uploads/2015/12/tin_pei_ling_pap.jpg"/>
              

//               <h3 class="col-md-12">Member of Parliament for {this.constituency}</h3>
//               // <h3 class="col-md-12">Current Constituency:</h3>
//               // <h3 class="col-md-12">Assumed Office:</h3>

// <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul class="nav navbar-nav">
//         <li class="pull-left"><a href="#">Dashboard</a></li>
//         <li class="active"><a href="#">Stories</a></li>
//         <li><a href="#">Videos</a></li>
//         <li><a href="#">Photos</a></li>
//         <li class="social pull-right"><a href="#">Social Links</a></li>
//       </ul>

// import React, { Component } from 'react';
// import { Navbar, Progress, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
// // import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
// import './Records.css';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// class Records extends Component {

//   // constructor(props) {
//   //   super(props);
//   // }
	
//   // state = {users: ['arshad']}
  

//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   // componentDidMount() {
//   //   const { match: { params } } = this.props;

//   //   console.log(params.mpName)

//   // }

//   render() {
//     return (
//       <div>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#"><h2>Navbar</h2></a>
//       <a class="nav-item nav-link" href="#"><h2>Home</h2></a>
//                 <a class="nav-item nav-link" href="#"><h2>Home2</h2></a>
//                 <a class="nav-item nav-link" href="#"><h2>Home3</h2></a>
//                 <a class="nav-item nav-link" href="#"><h2>Home4</h2></a>
// </nav>
//       </div>
//     );
//   }
// }
// export default Records;


//           // <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           //   <a class="navbar-brand" href="#"><h1>Navbar</h1></a>
//           //     <div class="navbar-nav">
//           //       
//           //     </div>
//           // </nav>

//           // <NavbarToggler onClick={this.toggle} />
//           // <Collapse isOpen={this.state.isOpen} navbar>
//           //   <Nav className="ml-auto" navbar>
//           //     
//           //     <NavItem>
//           //       <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
//           //     </NavItem>
//           //   </Nav>
//           // </Collapse>

//         // <Navbar color="info" fixed="top">
//         //   <h4> Find My MP </h4>
//         // </Navbar>
//         // <h1>Users</h1>
//         // {this.state.users}
        
//         //       <Card>
//       //   <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

//       //     <CardTitle>Card title</CardTitle>
//       //     <CardSubtitle>Card subtitle</CardSubtitle>
//       //     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//       //     <Button>Button</Button>
//       // </Card>

//       //   <Row>
//       //     <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
//       //   </Row>

