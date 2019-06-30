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
    return (
      <div className="personForm">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading-1">JobDirecto</h1>
          <h2 className="heading-1">
            Solo para quienes buscan trabajo con urgencia
          </h2>
          <br />
          <p className="formQuestions">Cual es su nombre?</p>
          <input
            className="formInputs"
            type="text"
            name="personName"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personName
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">Busca trabajo o ofrece servicios?</p>
          {(this.state.personData && this.state.personData.data) ||
            (!this.state.personData && (
              <label htmlFor="seeksJob">
                Busco trabajo
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="personStatus"
                    value="seeksJob"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            ))}
          {(this.state.personData && this.state.personData.data) ||
            (!this.state.personData && (
              <label htmlFor="offersService">
                Ofrezco Servicios
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="personStatus"
                    value="offersService"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            ))}
          <br />
          <br />
          <p className="formQuestions"> De que?</p>
          <input
            maxlength="30"
            className="formInputs"
            type="text"
            name="personSkill"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personSkill
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions"> Que experiencia tiene?</p>
          <textarea
            className="formInputs"
            type="text"
            name="personExperience"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personExperience
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Tiene alguna zona de preferencia?</p>
          <input
            className="formInputs"
            type="text"
            name="personArea"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personArea
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Tiene algun horario de preferencia?</p>
          <input
            className="formInputs"
            type="text"
            name="personSchedule"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personSchedule
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Cual es su numero de telefono?</p>
          <input
            className="formInputs"
            type="text"
            name="personNumber"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personNumber
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Algo que desee agregar?</p>
          <textarea
            className="formInputs"
            type="text"
            name="personExtraInfo"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personExtraInfo
                : ""
            }
            onChange={this.handleChange}
          />
          <br />
          {/**/}
          <br />
          <br />

          <br />
          <br />
          <br />
          <input
            className="btn-primary"
            onClick={this.submission}
            type="submit"
            value="Listo"
          />
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
