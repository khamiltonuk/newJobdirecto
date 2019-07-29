import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherArea: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.submission = this.submission.bind(this);
  }

  componentDidMount() {
    axios.get("/jobform");

    // axios.get("/getJobforCorrect").then(result => {
    //   this.setState({
    //     jobData: result.data,
    //     restname: result.data.data.restname,
    //     jobtype: result.data.data.jobtype,
    //     typepay: result.data.data.typepay,
    //     area: result.data.data.area,
    //     otherArea: result.data.data.otherArea,
    //     hourpay: result.data.data.hourpay,
    //     schedule: result.data.data.schedule,
    //     address: result.data.data.address,
    //     phone: result.data.data.phone,
    //     contact: result.data.data.contact,
    //     extrainfo: result.data.data.extrainfo,
    //     urgent: result.data.data.urgent,
    //
    //   });
    // });
  }

  submission() {
    if (this.state.area === this.context.jobForm.filterOtherArea) {
      this.setState({
        area: this.state.otherArea,
        otherArea: this.state.area
      });
    }
  }

  handleChange(event) {

    this.setState(
      {
        [event.target.name]: event.target.value
    }, () => {
        console.log(this.state);
    }
    );
  }

  handleCheckboxChange() {
      this.setState({
          urgent: event.target.checked
      },
      () => {
        console.log(this.state);
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/finalizeJob", this.state).then(resp => {
      if (this.state.urgent === true) {
        this.props.history.push("/prePayJob");
      } else {
        this.props.history.push("/JobConfirm");
      }
    });
  }

  render() {
    return (
      <div className="jobForm">
        <form onSubmit={this.handleSubmit}>
          <h1 id="formTitle" className="heading-1">
            JobDirecto
          </h1>
{/*         <h2 className="heading-1">
      {this.context.jobForm.title}
          </h2>
*/}
          <p className="formQuestions">{this.context.jobForm.question1}</p>
          <input
            className="formInputs"
            type="text"
            name="restname"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.restname
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question2}</p>
          <input
            className="formInputs"
            type="text"
            name="jobtype"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.jobtype
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question3}</p>
          <input
            className="formInputs"
            type="text"
            name="hourpay"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.hourpay
                : ""
            }
            onChange={this.handleChange}
          />
          <br />
          <br />
          <p className="formQuestions">{this.context.jobForm.question4}</p>
              <label className="text" htmlFor="Cash">
                {this.context.jobForm.payType1}
                <input
                  className="radio"
                  id="Cash"
                  type="radio"
                  name="typepay"
                  value={this.context.jobForm.payType1}
                  onChange={this.handleChange}
                />
              </label>

                <label className="text" htmlFor="Check">
                  {this.context.jobForm.payType2}
                  <input
                  id="Check"
                    className="radio "
                    type="radio"
                    name="typepay"
                    value={this.context.jobForm.payType2}
                    onChange={this.handleChange}
                  />
                </label>


              <label className="text" htmlFor="CashAndCheck">
                {this.context.jobForm.payType3}
                <span>
                  <input
id="offersService"
                    className="radio"
                    type="radio"
                    name="typepay"
                    value={this.context.jobForm.payType3}
                    onChange={this.handleChange}
                  />
                </span>
              </label>
          <br />
          <br />
          <p className="formQuestions"> {this.context.jobForm.question5}</p>
          <input
            className="formInputs"
            type="text"
            name="schedule"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.schedule
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question6}</p>
          <input
            className="formInputs"
            type="text"
            name="address"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.address
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question7}</p>
          <select
            id="areaInput"
            className="formInputs"
            type="text"
            name="area"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.area
                : ""
            }
            required="required"
            onChange={this.handleChange}
          >
            <option value="" />
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Manhattan"
              }
              value="Manhattan"
            >
              Manhattan
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Brooklyn"
              }
              value="Brooklyn"
            >
              Brooklyn
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Bronx"
              }
              value="Bronx"
            >
              Bronx
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Queens"
              }
              value="Queens"
            >
              Queens
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Staten Island"
              }
              value="Staten Island"
            >
              Staten Island
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Otra area en NY"
              }
              value={this.context.jobForm.filterOtherArea}
            >
              {this.context.jobForm.filterOtherArea}
            </option>
          </select>
          {this.state.area === this.context.jobForm.filterOtherArea && (
            <div>
              <p className="formQuestions" style={{ color: "blue" }}>
                <b>{this.context.jobForm.extraArea}</b>
              </p>
              <input
                autoFocus
                className="formInputs"
                type="text"
                name="otherArea"
                required="required"
                onChange={this.handleChange}
              />
            </div>
          )}
          <p className="formQuestions">{this.context.jobForm.question8}</p>
          <input
            className="formInputs"
            type="text"
            name="phone"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.phone
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question9}</p>
          <input
            className="formInputs"
            type="text"
            name="contact"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.contact
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.jobForm.question10}</p>
          <textarea
            className="formInputs extraInfo bigInput"
            type="text"
            name="extrainfo"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.extrainfo
                : ""
            }
            onChange={this.handleChange}
          />
          <br />
          {/**/}
          <br />
          <br />
          <div id="yesAndCheckbox">
            <label id="si" htmlFor="urgentCheckBox">
              {this.context.jobForm.question11}
            </label>
            <br />
            <br />
            <label className="switch">
              <input
                id="urgentCheckBox"
                type="checkbox"
                name="urgent"
                onChange={this.handleCheckboxChange}


              />
              <span className="slider round"  />
            </label>
          </div>{" "}
          <br />
          <br />
          <br />
          <input
            className="buttonBasic"
            onClick={this.submission}
            type="submit"
            value={this.context.jobForm.jobFormButton}
          />
          <br />
          <br />
          <div className="contactInfo"><p>{this.context.contactInfo.contactInfo}</p></div>

          <br />
        </form>
      </div>
    );
  }
}

JobForm.contextType = LanguageContext;
