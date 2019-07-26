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
      <div className="deleteModal">
<h1>are you sure you want to delete this post?</h1>
<div className="deleteButtons">

<button onClick={this.props.delete} onClick={this.props.close}>Yes</button>
<button onClick={this.props.close}>No</button>
</div>

      </div>
    );
  }
}

DeleteModal.contextType = LanguageContext;
