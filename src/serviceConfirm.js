import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";


export class ServiceConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("/getServiceInfo").then(result => {
      console.log("result data here: ", result.data);
      if (result.data.success == false) {
        return null;
      } else {
        this.setState({
          serviceData: result.data
        });
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/publishService", this.state).then(resp => {
      if (resp.data.success) {
        this.setState({
          serviceData: ""
        });
        this.props.history.push("/");
      }
    });
  }

  render() {
    if (!this.state.serviceData) {
      return null;
    }

    return (
      <div className="jobConfirmPage">
        <form onSubmit={this.handleSubmit}>
          <h1 className="confirmTitle" className="heading-1">
            {this.context.serviceConfirm.title}
          </h1>
          <table>
            <tr>
              <td className="jobDetailsText">{this.context.serviceConfirm.serviceOwner}</td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceOwner}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">{this.context.serviceConfirm.serviceOffered}</td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceOffered}
              </td>
            </tr>


            <tr>
              <td className="jobDetailsText">{this.context.serviceConfirm.serviceNumber}</td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceNumber}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">{this.context.serviceConfirm.serviceExtraInfo}</td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceExtraInfo}
              </td>
            </tr>
          </table>
          <div className="confirmButtons">
            {/*  <Link to="/jobForm">
              <input className="btn-secondary" type="submit" value="Corregir" />
            </Link>*/}
            <Link to="/">
              <input
                onClick={this.handleSubmit}
                className="buttonBasic"
                type="submit"
                value="Publicar"
              />
            </Link>
          </div>
          <div className="contactInfo"><p>{this.context.contactInfo.contactInfo}</p></div>
          
        </form>
      </div>
    );
  }
}
ServiceConfirm.contextType = LanguageContext;
