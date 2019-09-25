import React from "react";
import axios from "axios";
import { LanguageContext } from "../../components/Language/LanguageContext";
import { Link } from "../../utils/router";

<<<<<<< HEAD:src/pages/PersonConfirm/PersonConfirmController.jsx
export default class PersonConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
=======
export class PersonConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
>>>>>>> 5500f4e56e59eee94c21030a626ee433c115154a:src/personConfirm.js

    componentDidMount() {
        axios.get("/getPersonInfo").then(result => {
            if (result.data.success == false) {
                return null;
            } else {
                this.setState({
                    personData: result.data
                });
            }
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
<<<<<<< HEAD:src/pages/PersonConfirm/PersonConfirmController.jsx
        this.props.navigation.navigate("/");
      }
    });
  }
=======
    }
>>>>>>> 5500f4e56e59eee94c21030a626ee433c115154a:src/personConfirm.js

    handleSubmit(event) {
        event.preventDefault();
        axios.post("/publishPerson", this.state).then(resp => {
            if (resp.data.success) {
                this.setState({
                    personData: ""
                });
                this.props.history.push("/");
            }
        });
    }

    render() {
        if (!this.state.personData) {
            return null;
        }

        return (
            <div className="jobConfirmPage">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="confirmTitle heading-1">
                        Su anuncio esta listo para ser publicado:
                    </h1>
                    <table>
                        <tr>
                            <td className="jobDetailsText">Nombre:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personName}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Busca de:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personSkill}
                            </td>
                        </tr>

                        <tr>
                            <td className="jobDetailsText">
                                Area de preferencia:
                            </td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personArea}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                Horario de preferencia:
                            </td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personSchedule}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Numero:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personNumber}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Mas informacion:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personExtraInfo}
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
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </form>
            </div>
        );
    }
}

PersonConfirm.contextType = LanguageContext;
