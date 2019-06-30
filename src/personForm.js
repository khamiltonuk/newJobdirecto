import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
    console.log("state in personForm", this.state);
    event.preventDefault();
    console.log("state in job form: ", this.state);
    axios.post("/finalizePerson", this.state).then(resp => {
      this.props.history.push("/personPay");
    });
  }

  render() {
    let jobFormClass = ["jobForm"];
    if (this.state.addClass) {
      jobFormClass.push("yellow");
    }
    return <div className="jobFormClass" />;
  }
}
