import React from "react";
import { Link } from "react-router-dom";

export class PostType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      console.log("where this", this.state);
      if (this.state.posterStatus == "seeksJob") {
          this.props.history.push("/personForm");
      } else if (this.state.posterStatus == "offersService") {
      this.props.history.push("/serviceForm");
  } else {
      this.props.history.push("/jobForm");

  }
}

  render() {
    return (
      <div className="personForm">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading-1">Que busca?</h1>
              <label className="personFormLabels" htmlFor="seeksJob">
                Busco personal
                <input
                  id="seeksPeople"
                  className="radio"
                  type="radio"
                  name="posterStatus"
                  value="seeksPeople"
                  onChange={this.handleChange}
                  required="required"
                />
              </label>
                <label className="personFormLabels" htmlFor="seeksJob">
                  Busco trabajo
                  <input
                    id="seeksJob"
                    className="radio"
                    type="radio"
                    name="posterStatus"
                    value="seeksJob"
                    onChange={this.handleChange}
                    required="required"
                  />
                </label>
              <label className="personFormLabels" htmlFor="offersService">
                Ofrezco Servicios
                <span>
                  <input
                    id="offersService"
                    className="radio"
                    type="radio"
                    name="posterStatus"
                    value="offersService"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
              <input
              
              type="submit"
              value="Siguiente"
              />
              </form>
              </div>
    );
  }
}
