import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const myApp = [
  {
    Num: 29,
    element: "Cu",
    subElement: "copper",
    doubleNum: 63.54,
  },
  {
    Num: 30,
    element: "FU",
    subElement: "copper",
    doubleNum: 123,
  },
  {
    Num: 31,
    element: "Cu",
    subElement: "copper",
    doubleNum: 63.54,
  },
  {
    Num: 231,
    element: "ru",
    subElement: "gold",
    doubleNum: 63.1,
  },
];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row mt-5 d-flex align-items-center">
          {myApp.map((v, i) => {
            return (
              <div className="col col-md-3 col-lg-3">
                <div className="card ">
                  <span className="span ">{v.Num}</span>
                  <h2 className="h2">{v.element}</h2>
                  <p className="p">{v.subElement}</p>
                  <p className="pl">{v.doubleNum}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
