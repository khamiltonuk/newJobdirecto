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
        console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
      console.log("are u a ghost");
    event.preventDefault();
    axios.post("/finalizeService", this.state).then(resp => {
      this.props.history.push("/personPay");
    });
  }

  render() {
    return (
      <div className="serviceForm">
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
            name="serviceOwner"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceOwner
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
            name="serviceOffered"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceOffered
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">Cual es su direccion y en que areas opera?</p>
          <input
            className="formInputs"
            type="text"
            name="serviceArea"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceArea
                : ""
            }
            onChange={this.handleChange}
          />

          <p className="formQuestions">A que numero pueden llamarlo?</p>
          <input
            className="formInputs"
            type="text"
            name="serviceNumber"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceNumber
                : ""
            }

            onChange={this.handleChange}
          />
          <p className="formQuestions">Algo que desee agregar?</p>
          <textarea
          placeholder="Aqui puede poner cualquier informacion que le ayude a vender mejor sus servicios"
            className="formInputs bigInput"
            type="text"
            name="serviceExtraInfo"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceExtraInfo
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
            className="buttonBasic"
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
