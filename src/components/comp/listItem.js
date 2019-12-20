import React from 'react';
import {
  Button,
  CardText,
} from 'reactstrap';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="list_item_register">
        <Button close className="list_item_cancel"/>
        {(this.props.type === "education") &&
        <CardText
          className="list_item_content"> {this.props.content.degreeContent} {this.props.content.graduate} {this.props.content.institutionContent}</CardText>}
        {(this.props.type === "work") &&
        <CardText
          className="list_item_content"> {this.props.content.companyContent} {this.props.content.startDate} {this.props.content.role}</CardText>}
        {(this.props.type === "skill") &&
        <CardText
          className="list_item_content"> {this.props.content.skillContent}</CardText>}
        {(this.props.type === "language") &&
        <CardText
          className="list_item_content"> {this.props.content.languageContent}</CardText>}
      </div>
    );
  }
}

export default ListItem;
