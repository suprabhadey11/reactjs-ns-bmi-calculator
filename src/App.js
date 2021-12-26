import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.bmiCalc = this.bmiCalc.bind(this);
    this.state = {
      weight: "initial weight",
      height: "initial height"
    };
  }

  bmiCalc() {
    const bmi =
      Math.round(
        (this.state.weight / (this.state.height * this.state.height)) *
          10000 *
          10
      ) / 10;

    if (bmi < 18.5) {
      this.setState({ judge: "Underweight" });
    } else if (bmi < 24.9) {
      this.setState({ judge: "Normal weight" });
    } else if (bmi < 30) {
      this.setState({ judge: "Overweight" });
    } else {
      this.setState({ judge: "Obesity" });
    }

    this.setState({ bmi: bmi });

    if (!bmi) {
      alert("ERROR!!"),
        this.setState({
          bmi: "",
          judge: ""
        });
    }
  }

  reset() {
    this.setState({
      weight: "initial weight",
      height: "initial height",
      bmi: "",
      judge: ""
    });
  }

  setWeight(e) {
    this.setState({ weight: e.target.value });
  }
  setHeight(e) {
    this.setState({ height: e.target.value });
  }

  render() {
    return (
      <div className="wrapper">
        <h1> Body mass index (BMI)</h1>
        <p>
          To determine if you're at a healthy weight, enter the following
          information and calculate your body mass index (BMI).
        </p>
        <table>
          <tr>
            <td>
              <img
                src="https://3.imimg.com/data3/SG/EO/GLADMIN-153042/body-mass-index-machines-250x250.jpg"
                width="100"
                height="200"
              />
            </td>
            <td>
              <ul>
                <input
                  type="number"
                  placeholder="Weight in [kg]"
                  value={this.state.weight}
                  onChange={this.setWeight.bind(this)}
                />
              </ul>
              <ul>
                <input
                  type="number"
                  placeholder="Height in [cm]"
                  value={this.state.height}
                  onChange={this.setHeight.bind(this)}
                />
              </ul>
              <ul>
                <button onClick={this.bmiCalc.bind(this)} className="btn-calc">
                  calculate
                </button>{" "}
                <button onClick={this.reset.bind(this)} className="btn-reset">
                  Reset
                </button>
              </ul>

              <span className="response">BMI: {this.state.bmi}</span>
              <span className="response">Judge: {this.state.judge}</span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}


export default App;
