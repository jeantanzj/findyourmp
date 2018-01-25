import React from 'react';
import './Records.css';
import CustomizedLabel from './CustomizedLabel';
import renderActiveShape from './renderActiveShape';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Text} from 'recharts';
import {PieChart, Pie} from 'recharts';              

export default class Records extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.onPieEnter = this.onPieEnter.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.mpName);
    this.setState({
      name: "Tin Pei Ling",
      constituency: "MacPherson SMC",
      inOffice: "11 September 2015 to Present",
      attendanceData: [{name: "Tin Pei Ling", MP: 50, Average: 60}],
      totalSittings: "10",
      data: [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}],
      
    });
  }

  onPieEnter(data, index) {
    console.log('on pie enter')
    this.setState({
      activeIndex: index
    });
  }

  search() {
    console.log('in search')
    const url = 'https://findyourmp.herokuapp.com/tinpeiling/';
    fetch(url, {
      method: 'GET'
    })  
    .then(response => response.json())
    .then(json => console.log('json', json))
  }


  votingHistory = [{"motion":"Reserved Election","vote":"Noe","status":"Passed"},
            {"motion":"Funding for SG Enable","vote":"Aye","status":"Passed"},
            {"motion":"Public Service Governance Bill","vote":"Abstain","status":"Passed"}]


  
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
              <a class="nav-link" href="#voting"><h2>Votes</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#topics"><h2>Topics</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><h2>Words</h2></a>
            </li>
          </ul>
        </nav>
        <div class="container">
          <div class="col-md-6 col-md-offset-3">
            <div class="col-md-12" id="profile">
              <nav class="navbar navbar-light bg-light">
                <div class="title">
                <h1>Profile</h1>
                </div>
              </nav>
                <img class="mp-pic" src="http://www.jeraldinephneah.com/wp-content/uploads/2015/12/tin_pei_ling_pap.jpg"/>
                <h1 class="col-md-9"><b>{this.state.name}</b></h1>
                <img class="col-md-3 pull-right party-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1024px-People%27s_Action_Party_of_Singapore_logo.svg.png"/>
              <div class="col-md-12">
                <h3>MP for <b>{this.state.constituency}</b></h3>
                <h5>{this.state.inOffice}</h5>
              </div>
            </div>
            <div class="col-md-12" id="attendence">
              <nav class="navbar navbar-light bg-light">
                <div class="title">
                <h1>Parliament Attendence</h1>
                </div>
              </nav>
              <h3><span style={{color:'#61bf93'}}>{this.state.name}</span> vs <span style={{color:'#8884d8'}}>The Average MP</span></h3>
              <h5>Out of {this.state.totalSittings} possible sittings</h5>
              <BarChart
                id="attendenceChart"
                width={400} 
                height={100} 
                data={this.state.attendanceData} 
                layout="vertical"
                margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis type="number" hide="true" domain={[0, 100]}/>
                <YAxis type="category" dataKey="name" hide="true"/>
                <Bar dataKey="MP" barSize={40} fill="#61bf93" background={{ fill: '#eee' }} label={<CustomizedLabel fill="#61bf93"/>}/>
                <Bar dataKey="Average" barSize={40} fill="#8884d8" background={{ fill: '#eee' }} label={<CustomizedLabel fill="#8884d8"/>}/>
              </BarChart>
              
            </div>
            <div class="col-md-12" id="voting">
              <nav class="navbar navbar-light bg-light">
                <div class="title">
                  <h1>Voting History</h1>
                </div>
              </nav>     
              <ul class="list-group">
                {Object.keys(this.votingHistory).map((i) =>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <h5>{this.votingHistory[i].motion}</h5>
                    {this.votingHistory[i].vote == "Aye" &&
                      <h5><span class="badge badge-pill badge-success">Aye</span></h5>
                    }
                    {this.votingHistory[i].vote == "Noe" &&
                      <h5><span class="badge badge-pill badge-danger">Noe</span></h5>
                    }
                    {this.votingHistory[i].vote == "Abstain" &&
                      <h5><span class="badge badge-pill badge-secondary">Abstain</span></h5>
                    }
                  </li>
                )}
              </ul>
              <button onClick={event => this.search()}>click me</button>
            </div>
            <div class="col-md-12" id="topics">
              <nav class="navbar navbar-light bg-light">
                <div class="title">
                  <h1>Topics Spoken On</h1>
                </div>
              </nav>
              <PieChart width={800} height={400}>
                <Pie 
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape} 
                  data={this.state.data} 
                  cx={300} 
                  cy={200} 
                  innerRadius={60}
                  outerRadius={80} 
                  fill="#8884d8"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>


            </div>
          </div>
        </div>
      </body>
    );
  }
}



// search bar for topics
// bar chart, select filters
// improve ui for performance

// - include search for Votes
// - include non fixed header

// 

 //         <BarChart 
      //       width={900} 
      //       height={260} 
      //       data={data}
      //       margin={{top: 5, right: 0, left: 0, bottom: 25}}>
      //  <XAxis 
      //      dataKey="Text"
      //      fontFamily="sans-serif"
      //      tickSize
      //      dy='25'
      //  />
      //  <YAxis hide/>
      //  <CartesianGrid 
      //      vertical={false}
      //      stroke="#ebf3f0"
      //  />
      //  <Bar 
      //      dataKey="RespondentPercentage" 
      //      barSize ={170}
      //      fontFamily="sans-serif"
      //      label={<CustomizedLabel />}
      //      fill="#61bf93"
      //      >
            
      //   </Bar>
      // </BarChart>

 // label={<CustomizedLabel />}
// const CustomizedLabel = React.createClass({
//     render () {
//       const {x, y, fill, value} = this.props;
//       return <text 
//                  x={x} 
//                  y={y} 
//                  dy={-4} 
//                  fontSize='16' 
//                  fontFamily='sans-serif'
//                  fill={fill}
//                  textAnchor="middle">{value}%</text>
//     }
//   });

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

