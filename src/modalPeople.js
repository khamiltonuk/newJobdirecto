import React from "react";
import axios from "axios";

export default class ModalPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/getPeopleDetails/" + this.props.id).then(result => {
      console.log("result of details pip: ", result);
      this.setState({
        peopleData: result.data
      });
    });
  }

  render() {
    if (!this.state.peopleData) {
      return null;
    }
    return (
      <div>
        <main className="modalPeople">
          <table id="jobDetails">
            <tr>
              <td className="jobDetailsText">Nombre:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personname}
              </td>
              <button onClick={this.props.close} class="btn">
                <i class="fa fa-close" />
              </button>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">Busca:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personskill}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">Experiencia:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personexperience}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">Horario:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personarea}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">Area:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personschedule}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">Numero:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personnumber}
              </td>
            </tr>

            <tr>
              {" "}
              <td className="jobDetailsText">Extra:</td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personextrainfo}
              </td>
            </tr>
          </table>
        </main>
      </div>
    );
  }
}
