import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class ModalJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/getJobDetails/" + this.props.id).then(result => {
      console.log("working details: ", result.data.data.urgent);
      console.log("props: ", this.props);

      this.setState({
        jobData: result.data
      });
  }, () => {
      console.log(this.jobData);
  });
  }

  render() {

    if (!this.state.jobData) {
      return null;
    }
    return (

      <div>
      <main
       className={this.state.jobData.data.urgent === "true" ? "urgentModal" : "modal"}>
          <table id="jobDetails">
            <tr>
              <td className="jobDetailsText">{this.context.jobConfirm.name}</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.restname}
              </td>
              <button onClick={this.props.close} className="btn">
                <i className="fa fa-close" />
              </button>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.position}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.jobtype}
              </td>
            </tr>
            \
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.payment}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.hourpay}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.typePay}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.typepay}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.schedule}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.schedule}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.address}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.address}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">{this.context.jobConfirm.area}</td>
              <td className="jobDetailsText">{this.state.jobData.data.area}</td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.phone}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.phone}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.Contact}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.contact}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">
                {this.context.jobConfirm.extraInfo}
              </td>
              <td className="jobDetailsText">
                {this.state.jobData.data.extrainfo}
              </td>
            </tr>
          </table>
        </main>
      </div>
    );
  }
}

ModalJob.contextType = LanguageContext;
