import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteJob = this.deleteJob.bind(this);

  }

  componentDidMount() {
console.log("what props is here?", this.props);

}

deleteJob() {
    console.log("toystory");
    axios.get("/deleteJob/" + this.props.id).then(result => {

    });
    this.props.close()
}

  render() {
      return (
<div>
          <div className="backgroundBlock">
          </div>

      <div className="deleteModal">

<h1 className="heading-1 deleteModalTitle">{this.context.deleteModal.title}</h1><br />
<div className="deleteButtons">

<button className="deleteButton buttonOpaque" onClick={this.deleteJob}>Yes</button>
<button className="deleteButton buttonOpaque" onClick={this.props.close}>No</button>
</div>

      </div>
      </div>

    );
  }
}

DeleteModal.contextType = LanguageContext;
