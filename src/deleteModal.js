import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
console.log("am i here too?", this.props.id);
axios.get("/deletePost/" + this.props.id).then(result => {

});
}

  render() {
      return (
<div>
          <div className="backgroundBlock">
          </div>

      <div className="deleteModal">

<h1>Are you sure you want to delete this post?</h1><br />
<div className="deleteButtons">

<button className="deleteButton buttonOpaque" onClick={this.props.delete} onClick={this.props.close}>Yes</button>
<button className="deleteButton buttonOpaque" onClick={this.props.close}>No</button>
</div>

      </div>
      </div>

    );
  }
}

DeleteModal.contextType = LanguageContext;
