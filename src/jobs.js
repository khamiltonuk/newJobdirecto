import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./modal";
import Moment from "react-moment";
import "moment/locale/es";

export class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.urgentJobInterval = this.urgentJobInterval.bind(this);
  }

  componentDidMount() {
    axios.get("/getJobs").then(result => {
      this.setState({ jobData: result.data }, () => {
        console.log("look at this beautiful state: ", this.state.jobData.data);
        // console.log(this.state.jobData.data[0].moment());
        // console.log(getHours());
        // console.log(moment().format());
      });
    });

    axios.get("/getUrgentJobs").then(result => {
      this.setState({ urgentJobData: result.data }, () => {});
    });

    axios.get("/getDate").then(result => {
      this.setState({ dateData: result.data });
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

  hideModal() {
    this.setState({ show: false });
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
    if (!this.state.jobData || !this.state.urgentJobData) {
      return null;
    }
    return (
      <div className="bg">
        <h1 id="title">JobDirecto - Trabajos en Nueva York</h1>
        {this.state.show && (
          <Modal id={this.state.selectedJobId} close={this.hideModal} />
        )}
        <div className="filtersbutton">
          <div className="filters">
            <form onSubmit={this.handleSubmit}>
              <select
                className="filter"
                type="text"
                name="area"
                onChange={this.handleChangeArea}
              >
                <option value="">Todo NY</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="El Bronx">El Bronx</option>
                <option value="Staten Island">Staten Island</option>
                <option value="Otra area en NY">Otra area en NY</option>
              </select>
            </form>
          </div>
          <Link to="/jobForm">
            <input id="createJob" type="submit" value="Busco gente" />
          </Link>
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
                      <span className="restName">{data.restname}</span>
                      <span className="busca"> busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p>{data.area}</p>
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
                data.urgent === "true"
              ) {
                return (
                  <div
                    onClick={e => this.handleClick(data.id)}
                    className="urgentJobData"
                    key={data.id}
                  >
                    <p>
                      <span className="restName">{data.restname}</span>
                      <span className="busca"> busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p>{data.area}</p>
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
                      <span className="restName">{data.restname}</span>
                      <span className="busca"> busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p>{data.area}</p>
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
                      <span className="restName">{data.restname}</span>
                      <span className="busca"> busca </span>
                      <span className="jobType">{data.jobtype}</span>
                    </p>
                    <p>{data.area}</p>
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
