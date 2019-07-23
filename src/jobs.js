import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalJob from "./modalJob";
import ModalPeople from "./modalPeople";
import ModalService from "./modalService";

import { LanguageContext } from "./languageContext";
import Moment from "react-moment";
import "moment/locale/es";

var ReactGA = require("react-ga");

export class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalJob: false,
      showModalPeople: false,
      showModalService: false,

      user: "true"
    };
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModalPeople = this.showModalPeople.bind(this);
    this.showModalService = this.showModalService.bind(this);
    this.hideModalJob = this.hideModalJob.bind(this);
    this.hideModalPeople = this.hideModalPeople.bind(this);
    this.hideModalService = this.hideModalService.bind(this);
    this.urgentJobInterval = this.urgentJobInterval.bind(this);
    this.trackCreateJob = this.trackCreateJob.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {

    axios.get("/getPeople").then(result => {
      this.setState({ peopleData: result.data }, () => {
          console.log("people?: ", this.state);
      });
    });
    axios.get("/getJobs").then(result => {
      this.setState({ jobData: result.data }, () => {
          console.log("jobs?: ", this.state);
      });
    });

    axios.get("/getServices").then(result => {
      this.setState({ serviceData: result.data }, () => {
          console.log("service?: ", this.state);
      });
  });

    return axios ({
        method: 'get',
        url: '/user',
        params: {},
        withCredentials: true
    }).then(result => {
      this.setState({ user: result.data }, () => {
          console.log("does this work?", result.data.name);
          console.log("whats here", this.state);
      });
    });
  }

  handleChangeArea(event) {
    this.setState({
      [event.target.name]: event.target.value,
      userSelectionArea: event.target.value
    });
  }

  logOut() {
      return axios ({
          method: 'get',
          url: '/logout',
          params: {},
          withCredentials: true
      }).then(result => {
          window.location.reload();
    });

  }

  handleSubmit(event) {
    if (this.state.user === "") {
        this.props.history.push("/login")
    } else {
        this.props.history.push("/postType")
    }
  }

  showModalJob(event) {
      console.log("yay");
    this.setState({
      showModalJob: true,
      selectedJobId: event
    });
  }

  showModalPeople(event) {
    this.setState({
      showModalPeople: true,
      selectedPersonId: event
    });
  }

  showModalService(event) {
      console.log("yayos");
    this.setState({
      showModalService: true,
      selectedServiceId: event
    });
  }

  hideModalJob() {
    this.setState({ showModalJob: false });
  }

  hideModalPeople() {
    this.setState({ showModalPeople: false });
  }

  hideModalService() {
    this.setState({ showModalService: false });
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
    // si no pongo esto y estoy logeado, nada funciona, porque?
    if (!this.state.jobData || !this.state.peopleData || !this.state.serviceData) {
      return null;
    }
    return (
      <div className="bg">
        <h1 id="title" className="heading-1">
          JobDirecto
          <br />
          <span className="heading-1">{this.context.main.title}</span>
        </h1>

         {!this.state.user &&<Link to="/login"><p className="buttonsAuth">{this.context.main.login}</p></Link>}
         {this.state.user && <p className="buttonsAuth" onClick={this.logOut}>{this.context.main.logout}</p>}

        <div>
          <h1 />
        </div>
        {this.state.showModalJob && (
          <ModalJob id={this.state.selectedJobId} close={this.hideModalJob} />
        )}
        {this.state.showModalPeople && (
          <ModalPeople
            id={this.state.selectedPersonId}
            close={this.hideModalPeople}
          />
        )}
        {this.state.showModalService && (
          <ModalService
            id={this.state.selectedServiceId}
            close={this.hideModalService}
          />
        )}
        <div className="buttonsAndFilters">
        <div className="buttonAndWelcome">
            <input
            id="buttonCreatePost"
            class="buttonBasic"
              type="submit"
              value={this.context.main.createPost}
              onClick={this.handleSubmit}
            />
   {this.state.user && <h3 id="welcomeText" className="text">{this.context.main.welcome}<br /> {this.state.user.name} </h3>}

</div>
          <form onSubmit={this.handleSubmit} onSubmit={this.trackCreateJob}>
            <select
              className="filter"
              type="text"
              name="area"
              onChange={this.handleChangeArea}
            >
              <option value="">
                &#160;&#160;{this.context.main.filterDefault}
              </option>
              <option value="Manhattan">&#160;&#160;Manhattan</option>
              <option value="Brooklyn">&#160;&#160;Brooklyn</option>
              <option value="Queens">&#160;&#160;Queens</option>
              <option value="Bronx">&#160;&#160;Bronx</option>
              <option value="Staten Island">&#160;&#160;Staten Island</option>
              <option value="Otra area en NY">
                &#160;&#160;{this.context.main.filterOtherArea}
              </option>
            </select>
          </form>
        </div>


        <div className="allPosts">

            {/*urgent job posts here*/}
            {!this.state.userSelectionArea &&
              this.state.jobData.data.map(data => {
                if (
                  data.urgent === "true" &&
                  this.urgentJobInterval(data.created_at) === true
                ) {
                  return (
                    <div
                      onClick={e => this.showModalJob(data.id)}
                      className="postData paidPostData"
                      key={data.id}
                    >
                      <p>
                        <span className="posterName">{data.restname} </span>
                        <span className="postConnector paidPostConnector">
                          {this.context.main.seeking}{" "}
                        </span>
                        <span className="posterGoal">{data.jobtype}</span>
                      </p>
                      <p className="postArea">{data.area}</p>
                      <div className="postMoment">
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
                  data.urgent === "true" &&
                  this.urgentJobInterval(data.created_at) === true
                ) {
                  return (
                    <div
                      onClick={e => this.showModalJob(data.id)}
                      className="postData paidPostData"
                      key={data.id}
                    >
                      <p>
                        <span className="posterName">{data.restname} </span>
                        <span className="postConnector paidPostConnector">
                          {this.context.main.seeking}{" "}
                        </span>
                        <span className="posterGoal">{data.jobtype}</span>
                      </p>
                      <p className="postArea">{data.area}</p>
                      <div className="postMoment">
                        <Moment fromNow>{data.created_at}</Moment>
                      </div>
                    </div>
                  );
                }
              })}
              {this.state.userSelectionArea &&
                this.state.jobData.data.map(data => {
                  if (
                    this.state.userSelectionArea !== this.context.main.filterOtherArea &&
                    data.urgent === "true" && data.area !== "Queens" && data.area !== "Bronx" && data.area !== "Brooklyn" && data.area !== "Manhattan" && data.area !== "Staten Island"
                ) {
                    return (
                      <div
                        onClick={e => this.showModalJob(data.id)}
                        className="postData"
                        key={data.id}
                      >
                        <p>
                          <span className="postConnector paidPostConnector">
                            {this.context.main.seeking3}{" "}
                          </span>
                          <span className="posterGoal">{data.jobtype}</span>
                        </p>
                        <p className="postArea">{data.area}</p>
                        <div className="postMoment">
                          <Moment fromNow>{data.created_at}</Moment>
                        </div>
                      </div>
                    );
                  }
                })}


              {/*someone promoting services*/}
            {!this.state.userSelectionArea &&
              this.state.serviceData.data.map(data => {
               {
                  return (
                    <div
                      onClick={e => this.showModalService(data.id)}
                      className="postData paidPostData"
                      key={data.id}
                    >
                      <p>
                        <span className="posterData">{data.serviceowner}</span>
                        <span className="postConnector paidPostConnector">
                          {" "}
                          {this.context.main.seeking4}{" "}
                        </span>
                        <span className="posterGoal"> {data.serviceoffered} </span>
                      </p>
                      <div className="postMoment">
                        <Moment fromNow>{data.created_at}</Moment>
                      </div>
                    </div>
                  );
                }
              })}{" "}
              {/*people seeking jobs*/}

          {!this.state.userSelectionArea &&
            this.state.peopleData.data.map(data => {
              if (

                this.urgentJobInterval(data.created_at) === true
              ) {
                return (
                  <div
                    onClick={e => this.showModalPeople(data.id)}
                    className="postData paidPostData"
                    key={data.id}
                  >
                    <p>
                      <span className="posterName">{data.personname}</span>
                      <span className="postConnector paidPostConnector">
                        {" "}
                        {this.context.main.seeking2}{" "}
                      </span>
                      <span className="posterGoal"> {data.personskill} </span>
                    </p>
                    <div className="postMoment">
                      <Moment fromNow>{data.created_at}</Moment>
                    </div>
                  </div>
                );
              }
            })}



{/*normal posts here*/}
{this.state.userSelectionArea &&
  this.state.jobData.data.map(data => {
    if (
      this.state.userSelectionArea === data.area &&
      data.urgent !== "true"
    ) {
      return (
        <div
          onClick={e => this.showModalJob(data.id)}
          className="postData"
          key={data.id}
        >
          <p>
            <span className="postConnector">
              {this.context.main.seeking3}{" "}
            </span>
            <span className="posterGoal">{data.jobtype}</span>
          </p>
          <p className="postArea">{data.area}</p>
          <div className="postMoment">
            <Moment fromNow>{data.created_at}</Moment>
          </div>
        </div>
      );
    }
  })}
  {this.state.userSelectionArea &&
    this.state.jobData.data.map(data => {
      if (
        this.state.userSelectionArea !== this.context.main.filterOtherArea &&
        data.urgent !== "true" && data.area !== "Queens" && data.area !== "Bronx" && data.area !== "Brooklyn" && data.area !== "Manhattan" && data.area !== "Staten Island"
    ) {
        return (
          <div
            onClick={e => this.showModalJob(data.id)}
            className="postData"
            key={data.id}
          >
            <p>
              <span className="postConnector">
                {this.context.main.seeking3}{" "}
              </span>
              <span className="posterGoal">{data.jobtype}</span>
            </p>
            <p className="postArea">{data.area}</p>
            <div className="postMoment">
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
                    onClick={e => this.showModalJob(data.id)}
                    className="postData"
                    key={data.id}
                  >
                    <p>
                      <span className="postConnector">
                        {" "}
                        {this.context.main.seeking3}{" "}
                      </span>
                      <span className="posterGoal">{data.jobtype}</span>
                    </p>
                    <p className="postArea">{data.area}</p>
                    <div className="postMoment">
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
