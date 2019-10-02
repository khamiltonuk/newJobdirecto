import React from "react";
import axios from "axios";
import { LanguageContext } from "../../components/Language/LanguageContext";
import { Link } from "../../utils/router";
import { BodyComponent } from "../../components/Body/BodyComponent";

export default class PersonConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if(this.props.navigation.params.id){
            return this.props.navigation.navigate("/personConfirm",{
                replace:true,
                state:{
                    transactionId:this.props.navigation.params.id
                }
            })
        }
        if (!this.props.navigation.state) {
            this.props.navigation.navigate("/personForm");
            return null;
        } else if(!this.props.navigation.state.transactionId) {
            this.setState({
                personData: {
                    data: {
                        ...this.props.navigation.state,
                        active: true
                    }
                }
            });
        }else{
            let resp = await axios.get(`/getPersonTrans/${this.props.navigation.state.transactionId}`);
            if(resp.data){
                this.setState({
                    personData: {
                        data: {
                            ...resp.data.jobdata,
                            active: true
                        }
                    }
                }); 
            }
        }
        /* axios.get("/getPersonInfo").then(result => {
            if (result.data.success == false) {
                return null;
            } else {
                this.setState({
                    personData: result.data
                });
            }
        }); */
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.navigation.navigate("/");
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("/publishPerson", this.state).then(resp => {
            if (resp.data.success) {
                this.setState({
                    personData: ""
                });
                this.props.navigation.navigate("/");
            }
        });
    }

    render() {
        if (!this.state.personData) {
            return null;
        }
        console.log(this.state.personData);

        return (
            <BodyComponent toggleLanguage={this.props.navigation.toggleLanguage}>
            <div className="jobConfirmPage">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="confirmTitle heading-1">
                        Su anuncio esta listo para ser publicado:
                    </h1>
                    <table>
                        <tr>
                            <td className="jobDetailsText">Nombre:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personname}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Busca de:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personskill}
                            </td>
                        </tr>

                        <tr>
                            <td className="jobDetailsText">
                                Area de preferencia:
                            </td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personarea}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                Horario de preferencia:
                            </td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personschedule}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Numero:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personnumber}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">Mas informacion:</td>
                            <td className="jobDetailsText">
                                {this.state.personData.data.personextrainfo}
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
            </BodyComponent>
        );
    }
}

PersonConfirm.contextType = LanguageContext;
