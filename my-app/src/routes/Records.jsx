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
      totalSittings: "10"
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


  votingHistory = [{motion:"Reserved Election",vote:"Noe",status:"Passed"},
            {motion:"Funding for SG Enable",vote:"Aye",status:"Passed"},
            {motion:"Public Service Governance Bill",vote:"Abstain",status:"Passed"}]
  topicsSpoken = [{name: 'Education', value: 5, topics: ['1', '1', '1']}, {name: 'Transport', value: 2, topics: ['2', '2', '2']},
                  {name: 'Womens Rights', value: 3, topics: ['3', '3', '3']}, {name: 'Race Relations', value: 8, topics: ['4', '4', '4']}]
  
  render() {
    return (
      <body>
        <nav class="navbar navbar-default fixed-top navbar-light bg-light">
          <ul class="nav">
            <li class="nav-item">
               <a class="navbar-brand" href="#"><h2>FindMyMP</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#profile"><h2>Profile</h2></a>
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
          </ul>
        </nav>
        <div class="container">
          <div class="col-md-6 col-md-offset-3">
            <div class="col-md-12" id="profile">
              <nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="title">
                <h1>Profile</h1>
                </div>
              </nav>
              <img class="mp-pic" src="http://www.jeraldinephneah.com/wp-content/uploads/2015/12/tin_pei_ling_pap.jpg"/>
              <div class="col-md-9">
                <h1>{this.state.name}</h1>
                <h3>MP for {this.state.constituency}</h3>
                <h5>{this.state.inOffice}</h5>
              </div>
              <img class="col-md-3 pull-right party-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1024px-People%27s_Action_Party_of_Singapore_logo.svg.png"/>
              
            </div>
            <div class="col-md-12" id="attendence">
              <nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="title">
                <h1>Parliament Attendence</h1>
                </div>
              </nav>
              <h4>The 13th Parliament of Singapore is the current Parliament of Singapore that began on 15 January 2016.
              Parliament Attendence for MPs during this period is calculated as a percentage out of the {this.state.totalSittings} days the 13th Parliament has 
              convened thus far.</h4>
              <br/>
              <h4><span style={{color:'#61bf93'}}>{this.state.name}</span> vs <span style={{color:'#D3D3D3'}}>The Average MP</span></h4>
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
                <Bar dataKey="Average" barSize={40} fill="#D3D3D3" background={{ fill: '#eee' }} label={<CustomizedLabel fill="#D3D3D3"/>}/>
              </BarChart>
            </div>
            <div class="col-md-12" id="voting">
              <nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="title">
                  <h1>Voting History</h1>
                </div>
              </nav>     
              <h4>Voting in parliament on motions is generally done verbally with MPs having the option to vote Aye, Noe or Abstain. 
              Whether the motion is carried depends on the Speaker&#39;s personal assessment of whether more MPs have voted for 
              or against the motion. MPs votes are only formally counted if an MP claims a division. Only votes for {this.state.name}&nbsp;
              under such instances are recorded below.</h4>
              <br/>
              <ul class="list-group">
              {this.votingHistory.map((item, i) =>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <h4>{this.votingHistory[i].motion}</h4>
                  {this.votingHistory[i].vote == "Aye" &&
                    <h4><span class="badge badge-pill badge-success">Aye</span></h4>
                  }
                  {this.votingHistory[i].vote == "Noe" &&
                    <h4><span class="badge badge-pill badge-danger">Noe</span></h4>
                  }
                  {this.votingHistory[i].vote == "Abstain" &&
                    <h4><span class="badge badge-pill badge-secondary">Abstain</span></h4>
                  }
                </li>
              )}
              </ul>
            </div>
            <div class="col-md-12" id="topics">
              <nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="title">
                  <h1>Topics Spoken On</h1>
                </div>
              </nav>
              <h4>The Official Report for a parlimentary sitting consists of all speeches and debates made in the Chamber.
              The following is a list of all the topics that {this.state.name} spoke on during the 13th Parliament based on these 
              Official Reports. 
              </h4>
              <br/>
              <PieChart width={400} height={400}>
                <Pie 
                  activeIndex={this.state.activeIndex}
                  activeShape={renderActiveShape} 
                  data={this.topicsSpoken} 
                  innerRadius={80}
                  outerRadius={110} 
                  fill="#61bf93"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>
              <h4><span style={{color:'#61bf93'}}>{this.topicsSpoken[this.state.activeIndex].name} Related Topics</span></h4>
              <br/>
              <ul class="list-group list-group-flush">
                {this.topicsSpoken[this.state.activeIndex].topics.map((item, i) =>
                  <li class="list-group-item">
                    <h4>{this.topicsSpoken[this.state.activeIndex].topics[i]}</h4>
                  </li>
                )}
              </ul>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </body>
    );
  }
}


              // <button onClick={event => this.search()}>click me</button>

// search bar for topics
// bar chart, select filters
// improve ui for performance

// - include search for Votes
// - include non fixed header

