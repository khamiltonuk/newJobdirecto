import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class ServiceForm extends React.Component {
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
            Si ofrece servicios ahora puede crear un anuncio de JobDirecto
          </h2>
          <br />
          <p className="formQuestions">Cual es su nombre o el de su compania?</p>
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
          <br />
          <br />
          <p className="formQuestions"> Que servicios ofrece?</p>
          <input
            maxLength="30"
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
          <p className="formQuestions">Como ponerse en contacto con usted?</p>
          <input
            className="formInputs"
            type="text"
            name="personNumber"
            defaultValue={
              this.state.personData && this.state.personData.data
                ? this.state.personData.data.personNumber
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">Algo que desee agregar?</p>
          <textarea
          placeholder="Aqui puede poner cualquier informacion que le ayude a vender mejor sus servicios"
            className="formInputs bigInput"
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
            className="personButton"
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
