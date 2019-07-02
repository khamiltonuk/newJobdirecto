import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./modal";
import ModalPeople from "./modalPeople";
import { LanguageContext } from "./languageContext";
import Moment from "react-moment";
import "moment/locale/es";

var ReactGA = require("react-ga");

export class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showModalPeople: false
    };
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickModalPeople = this.handleClickModalPeople.bind(this);

    this.hideModal = this.hideModal.bind(this);
    this.hideModalPeople = this.hideModalPeople.bind(this);

    this.urgentJobInterval = this.urgentJobInterval.bind(this);
    this.trackCreateJob = this.trackCreateJob.bind(this);
  }

  componentDidMount() {
    axios.get("/getPeople").then(result => {
      this.setState({ peopleData: result.data }, () => {
        console.log("look at this people state: ", this.state.peopleData.data);
      });
    });

    axios.get("/getJobs").then(result => {
      this.setState({ jobData: result.data }, () => {
        console.log("look at this beautiful state: ", this.state.jobData.data);
      });
    });
  }

  handleChangeArea(event) {
    this.setState({
      [event.target.name]: event.target.value,
      userSelectionArea: event.target.value
    });
  }

  handleSubmit(event) {
    location.replace("/loginorregister");
  }

  handleClick(event) {
    this.setState({
      show: true,
      selectedJobId: event
    });
  }

  handleClickModalPeople(event) {
    this.setState({
      showModalPeople: true,
      selectedPersonId: event
    });
  }

  hideModal() {
    this.setState({ show: false });
  }

  hideModalPeople() {
    this.setState({ showModalPeople: false });
  }

  trackCreateJob(event) {
    ga("send", "event", {
      eventCategory: "button",
      eventAction: "createJob",
      eventLabel: event.target.href
    });
  }

  urgentJobInterval(created_at) {
    // job timestamp in miliseconds
    let timeStampMili = new Date(created_at);
    // now in miliseconds
    let nowMili = Date.now();
    // urgent job interval in hours
    let jobIntervalHours = 48;
    // job interval in miliseconds
    let jobIntervalMili = jobIntervalHours * 60 * 60 * 1000;
    //condition
    let intervalOp = nowMili - timeStampMili < jobIntervalMili;
    return intervalOp;
  }

  render() {
    let date = new Date();
    if (!this.state.jobData || !this.state.peopleData) {
      return null;
    }
    return (
      <div className="bg">
        <h1 id="title" className="heading-1">
          JobDirecto
          <br />
          <span id="subTitle">{this.context.title}</span>
        </h1>
        <div>
          <h1 />
        </div>
        {this.state.show && (
          <Modal id={this.state.selectedJobId} close={this.hideModal} />
        )}
        {this.state.showModalPeople && (
          <ModalPeople
            id={this.state.selectedPersonId}
            close={this.hideModalPeople}
          />
        )}
        <div className="buttonsAndFilters">
          <Link to="/jobForm">
            <input
              id="iamlookingforstaff"
              type="submit"
              value="Busco personal"
            />
          </Link>
          <Link to="/personForm">
            <input id="iamlookingforjob" type="submit" value="Busco trabajo" />
          </Link>

          <div className="filtersbutton">
            <div className="filters">
              <form onSubmit={this.handleSubmit} onSubmit={this.trackCreateJob}>
                <select
                  className="filter"
                  type="text"
                  name="area"
                  onChange={this.handleChangeArea}
                >
                  <option value="">&#160;&#160;Todo NY</option>
                  <option value="Manhattan">&#160;&#160;Manhattan</option>
                  <option value="Brooklyn">&#160;&#160;Brooklyn</option>
                  <option value="Queens">&#160;&#160;Queens</option>
                  <option value="El Bronx">&#160;&#160;El Bronx</option>
                  <option value="Staten Island">
                    &#160;&#160;Staten Island
                  </option>
                  <option value="Otra area en NY">
                    &#160;&#160;Otra area en NY
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="allJobs">
          {!this.state.userSelectionArea &&
            this.state.jobData.data.map(data => {
              if (
                data.urgent === "true" &&
                this.urgentJobInterval(data.created_at) === true
              ) {
                return (
                  <div
                    onClick={e => this.handleClick(data.id)}
                    className="urgentJobData"
                    key={data.id}
                  >
                    <p>
                      <span className="restName">{data.restname} </span>
                      <span className="busca">busca </span>
                      <span className="jobTypeUrgent">{data.jobtype}</span>
                    </p>
                    <p className="areainjobdata">{data.area}</p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}
          {!this.state.userSelectionArea &&
            this.state.peopleData.data.map(data => {
              if (
                data.personstatus === "seeksJob" &&
                this.urgentJobInterval(data.created_at) === true
              ) {
                return (
                  <div
                    onClick={e => this.handleClickModalPeople(data.id)}
                    className="peopleData"
                    key={data.id}
                  >
                    <p>
                      <span className="personName">{data.personname}</span>
                      <span className="buscaTrabajo"> busca trabajo de </span>
                      <span className="jobType"> {data.personskill} </span>
                    </p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}
          {!this.state.userSelectionArea &&
            this.state.peopleData.data.map(data => {
              if (
                data.personstatus === "offersService" &&
                this.urgentJobInterval(data.created_at) === true
              ) {
                return (
                  <div
                    onClick={e => this.handleClickModalPeople(data.id)}
                    className="peopleData"
                    key={data.id}
                  >
                    <p>
                      <span className="personName">{data.personname}</span>
                      <span className="buscaTrabajo">
                        {" "}
                        ofrece servicios de{" "}
                      </span>
                      <span className="jobType"> {data.personskill} </span>
                    </p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}{" "}
          {this.state.userSelectionArea &&
            this.state.jobData.data.map(data => {
              if (
                this.state.userSelectionArea === data.area &&
                data.urgent === "true" &&
                this.urgentJobInterval(data.created_at) === true
              ) {
                return (
                  <div
                    onClick={e => this.handleClick(data.id)}
                    className="urgentJobData"
                    key={data.id}
                  >
                    <p>
                      <span className="busca">Se busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p className="areainjobdata">{data.area}</p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}
          {this.state.userSelectionArea &&
            this.state.jobData.data.map(data => {
              if (
                this.state.userSelectionArea === data.area &&
                data.urgent !== "true"
              ) {
                return (
                  <div
                    onClick={e => this.handleClick(data.id)}
                    className="jobData"
                    key={data.id}
                  >
                    <p>
                      <span className="busca">Se busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p className="areainjobdata">{data.area}</p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}
          {!this.state.userSelectionArea &&
            this.state.jobData.data.map(data => {
              if (data.urgent !== "true") {
                return (
                  <div
                    onClick={e => this.handleClick(data.id)}
                    className="jobData"
                    key={data.id}
                  >
                    <p>
                      <span className="busca"> Se busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p className="areainjobdata">{data.area}</p>
                    <div className="jobMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

Jobs.contextType = LanguageContext;
