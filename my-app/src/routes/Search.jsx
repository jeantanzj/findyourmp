import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import classnames from 'classnames';
import tin_pei_ling from './tin_pei_ling.jpg'
import './Search.css';


class Search extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
    	this.state = {
      		activeTab: '1'
    	};
	}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

	render() {
		return(
		<Container>
			<Row>


          <Col xs="6"><img className='image' src = {tin_pei_ling} /></Col>
          <Col xs="6">
          <Col sm={{ size: 'auto', offset: 1 }}>Name: Tin Pei Ling</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>GRC: MacPherson SMC</Col>
          </Col>
          </Row>




        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Attendance Rate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Vote
            </NavLink>
          </NavItem>

                    <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Topics
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Last Updated: 23rd October 2018</h4>
                <div>
      <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} />
      <div className="text-center">100%</div>
      <Progress value="100" />
    </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>

            <Col sm="12" md={{ size: 8, offset: 2 }}>         <ListGroup>
        <ListGroupItem className="justify-content-between">Increase Salary For Tan Kai Wei<Badge color='success' pill>Support</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Kick Arshad Ali Abdul Samad Out of GovTech <Badge color='danger' pill>Against</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Downgrade Kai Wei <Badge color='danger' pill>Against</Badge></ListGroupItem>
      </ListGroup></Col>
            </Row>
          </TabPane>


                   <TabPane tabId="3">
            <Row>

            <Col sm="12" md={{ size: 8, offset: 2 }}>              <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup></Col>
            </Row>
          </TabPane>
        </TabContent>
     
        </Container>





		)
	}
}
export default Search;


