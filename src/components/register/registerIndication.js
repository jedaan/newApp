import React from 'react';
import {Button, Col, Card, CardBody, Collapse} from 'reactstrap';
import {MAIN_BACKGROUND_COLOR} from "../../helpers/constant";
import ListItem from "../comp/listItem";
import {isEmptyObject, isEmptyArray} from "../../helpers/validate";

class RegisterIndication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  render() {
    let {educationData, workData, personalData, skillsData, languagesData} = this.props;
    return (
      <Col md={6}>
        <div className="data_saved">
          {!isEmptyObject(personalData) &&
          <div className="personal_data_indication">
            <Button color={MAIN_BACKGROUND_COLOR} className="button_style">Personal Data</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {personalData.firstName + " " + personalData.lastName} from {personalData.countryContent} <br/>
                  {personalData.email} {personalData.phone}
                </CardBody>
              </Card>
            </Collapse>
          </div>}

          {!isEmptyArray(educationData) &&
          <div className="education_work_data_indication">
            <Button color={MAIN_BACKGROUND_COLOR} className="button_style">Education Data</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {educationData.map((item, index) =>
                    <ListItem key={index} content={item} type="education"/>)
                  }
                  <h1></h1>
                </CardBody>
              </Card>
            </Collapse>
          </div>}

          {!isEmptyArray(workData) &&
          <div className="education_work_data_indication">
            <Button color={MAIN_BACKGROUND_COLOR} className="button_style">Experience Data</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {
                    workData.map((item, index) =>
                      <ListItem key={index} content={item} type="work"/>)
                  }
                  <h1></h1>
                </CardBody>
              </Card>
            </Collapse>
          </div>}

          {!isEmptyArray(skillsData) &&
          <div className="personal_data_indication">
            <Button color={MAIN_BACKGROUND_COLOR} className="button_style">Skills Data</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {
                    skillsData.map((item, index) =>
                      <ListItem key={index} content={item} type="skill"/>)
                  }
                </CardBody>
              </Card>
            </Collapse>
          </div>}

          {!isEmptyArray(languagesData) &&
          <div className="personal_data_indication">
            <Button color={MAIN_BACKGROUND_COLOR} className="button_style">Languages Data</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {
                    languagesData.map((item, index) =>
                      <ListItem key={index} content={item} type="language"/>)
                  }
                </CardBody>
              </Card>
            </Collapse>
          </div>}
        </div>
      </Col>);
  }
}


export default RegisterIndication;
