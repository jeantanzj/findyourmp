import React from 'react';
import './Records.css';
import CustomizedLabel from './CustomizedLabel';
import renderActiveShape from './renderActiveShape';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Text} from 'recharts';
import {PieChart, Pie} from 'recharts';   

// Object
// Attendance
// :
// 93.25153374233128
// Topics
// :
// (62) ["Measures to Ensure Childcare Operators are Financially Sound", "Number of Arrests for Physical Assaults in Public Areas", "Development of New Digital Identity System", "Election of Speaker", "Curb Illegal Gambling in HDB Estates", "Number of Singaporeans without Bank Account", "Implementation of Smart Nation and Cashless Payment for Public Services", "Implementation Plans for Cashless Public Transport System", "Frequency of Sweeping and Cleaning of Public Areas under NEA", "Guidelines to Minimise Misdiagnosis by Doctors", "Fair Pricing for Milk Powder", "Strengthening Singapore's Fight Against Drugs", "Aspirations of Singapore Women", "Aspirations of Singapore Women", "Strengthening Legislation for Crime against Children", "Committee of Supply – Head O (Ministry of Health)", "Committee of Supply − Head I (Ministry of Social and Family Development)", "Committee of Supply – Head K (Ministry of Education)", "Committee of Supply – Head N (Ministry of Foreign Affairs)", "Committee of Supply – Head U (Prime Minister's Office)", "Debate on Annual Budget Statement", "Repair of Lifts that Break Down Repeatedly", "Community Dispute Applications Received by Community Disputes Resolution Tribunals", "Total Subsidised and Private Nursing Home Capacity", "Application Fee for Enforcement of Money Order Issued by Small Claims Tribunal", "Additional Nursing Home Beds from 2021 to 2030", "Reason for Singapore's Drop in World Talent Report 2016 Ranking", "Profile and Allocation of Additional 30,000 Healthcare Workers Required by 2020", "Contingency when Lift Companies Exit Singapore's Market", "Quality Control for Lift Installation and Maintenance", "Measures to Limit Noise Caused by MRT Trains to Central Grove Condominium Residents", "Constitution of the Republic of Singapore (Amendment) Bill", "Inspections of HDB Buildings for Structural Integrity and Design", "Benefits of Noise Barriers along MRT Tracks", "Value of Rewards for Paralympic Medallists", "Working Together to Address the Zika Outbreak in Singapore", "Appeals to CPF Board for Inclusion in Silver Support Scheme", "Public Education and National Registry for Zika", "Qualifying for Maternity Protection under Child Development Co-Savings Act and Employment Act", "Using Forensics Data Analysis to Curb Recalcitrant High-rise Littering Culprits", "Automatic PR Status for Foreign Spouses of Singapore Citizens with One Singapore Citizen Child", "Measures to Deter Pet Abandonment", "Complaints about Pigeons", "Measures to Address Recent Spate of Lift Breakdowns at HDB Flats", "Committee of Supply – Head O (Ministry of Health)", "Committee of Supply – Head O (Ministry of Health)", "Committee of Supply – Head U (Prime Minister's Office)", "Committee of Supply – Head L (Ministry of the Environment and Water Resources)", "Committee of Supply – Head I (Ministry of Social and Family Development)", "Debate on Annual Budget Statement", "Number of Long-Term Visit Pass Plus Granted after Introduction of Scheme", "Lift Replacement by Town Councils", "Long-term Viability of Shops in HDB Heartlands", "Impact of Pre-school Teachers on Recruitment and Centre Operations", "Effectiveness of High-rise Littering Prevention Measures", "Supply and Demand for Pilots", "Support for Retrenched Workers and Their Families", "Women's Charter (Amendment) Bill", "Debate on President's Address", "Appointment of Deputies for Individuals No Longer Capable of Decisions", "Ensuring Security in Light of Recent Terrorist Attacks", "Election of Speaker"]
// 
// :
// Object           

export default class Records extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      name: "",
      voteYes: [],
      voteNo: [],
      voteAbstain: [],
      attendanceData: [{MP: 0, Average: 0}],
      constituency: "",
      topicsSpoken: [{"Category":'', "Topics":[], "value": 0}]
    };

    this.onPieEnter = this.onPieEnter.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({
      inOffice: "11 September 2015 to Present",
      totalSittings: "54"
    });
    this.search(params.mpName);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index
    });
  }

  search(mpName) {
    console.log('in search')
    var url,
        mpConstituency,
        mpImage;
    if (mpName == "tinpeiling") {
      url = 'https://findyourmp.herokuapp.com/tinpeiling';
      mpName = 'Tin Pei Ling';
      mpConstituency = 'MacPherson SMC';
      mpImage = 'http://www.jeraldinephneah.com/wp-content/uploads/2015/12/tin_pei_ling_pap.jpg';
    }
    if (mpName == "limbiowchuan") {
      url = 'https://findyourmp.herokuapp.com/limbiowchuan';
      mpName = 'Lim Biow Chuan';
      mpConstituency = 'Mountbatten SMC'
      mpImage = 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2016/05/Lim-Biow-Chuan-e1463454315361.jpg';
    }
    fetch(url, {
      method: 'GET'
    })  
    .then(response => response.json())
    .then(json => {
      var temp = json['Topics'];
      for (var i = 0; i < temp.length; i++) {
         temp[i].value = temp[i].Topics.length
      }
      console.log(temp)
      this.setState({
                      topicsSpoken: json['Topics'],
                      image: mpImage,
                      constituency: mpConstituency,
                      name: mpName,
                      voteYes: json['VoteYes'],
                      voteNo: json['VoteNo'],
                      voteAbstain: json['VoteAbstain'],
                      attendanceData: [{MP: json['Attendance'], Average: 90.6}]
                    })
    })     
  }

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
              <a class="nav-link" href="#attendance"><h2>Attendance</h2></a>
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
              <img class="mp-pic" src={this.state.image}/>
              <div class="col-md-9">
                <h1>{this.state.name}</h1>
                <h3>MP for {this.state.constituency}</h3>
                <h5>{this.state.inOffice}</h5>
              </div>
              <img class="col-md-3 pull-right party-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1024px-People%27s_Action_Party_of_Singapore_logo.svg.png"/>
              
            </div>
            <div class="col-md-12" id="attendance">
              <nav class="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="title">
                <h1>Parliament Attendance</h1>
                </div>
              </nav>
              <h4>The 13th Parliament of Singapore is the current Parliament of Singapore that began on 15 January 2016.
              Parliament Attendance for MPs during this period is calculated as a percentage out of the {this.state.totalSittings} days the 13th Parliament has 
              convened thus far.</h4>
              <br/>
              <h4><span style={{color:'#61bf93'}}>{this.state.name}</span> vs <span style={{color:'#D3D3D3'}}>The Average MP</span></h4>
              <BarChart
                id="attendanceChart"
                width={400} 
                height={100} 
                data={this.state.attendanceData} 
                layout="vertical"
                margin={{top: 0, right: 50, left: 0, bottom: 0}}>
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
                {this.state.voteYes.map((item, i) =>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <h4>{item}</h4>
                    <h4><span class="badge badge-pill badge-success">Aye</span></h4>
                  </li>
                )}
                {this.state.voteNo.map((item, i) =>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <h4>{item}</h4>
                    <h4><span class="badge badge-pill badge-danger">Noe</span></h4>
                  </li>
                )}
                {this.state.voteAbstain.map((item, i) =>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <h4>{item}</h4>
                    <h4><span class="badge badge-pill badge-secondary">Abstain</span></h4>
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
                  data={this.state.topicsSpoken} 
                  innerRadius={80}
                  outerRadius={110} 
                  fill="#61bf93"
                  onMouseEnter={this.onPieEnter}
                />
              </PieChart>
              <h4><span style={{color:'#61bf93'}}>{this.state.topicsSpoken[this.state.activeIndex].Category} Related Topics</span></h4>
              <br/>
              <ul class="list-group list-group-flush">
                {this.state.topicsSpoken[this.state.activeIndex].Topics.map((item, i) =>
                  <li class="list-group-item">
                    <h4>{this.state.topicsSpoken[this.state.activeIndex].Topics[i]}</h4>
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


  // topicsSpoken = [{name: 'Education', value: 5, topics: ['1', '1', '1']}, {name: 'Transport', value: 2, topics: ['2', '2', '2']},
  //                 {name: 'Womens Rights', value: 3, topics: ['3', '3', '3']}, {name: 'Race Relations', value: 8, topics: ['4', '4', '4']}]

              // 

// search bar for topics
// bar chart, select filters
// improve ui for performance

// - include search for Votes
// - include non fixed header

