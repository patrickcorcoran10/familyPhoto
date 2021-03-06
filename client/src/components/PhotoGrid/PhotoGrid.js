import React, { Component } from "react";
import "./PhotoGrid.css";

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const res = await fetch("/api/retrieve");
    const data = await res.json();
    this.setState({
      data,
    });
    console.log(data);
  }
  render() {
    return (
      <div className="container">
        <div className="row" id="upload">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="title">
              <p>Corcoran-stagram</p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md=4">
            <p>1</p>
          </div>
          <div className="col-md=4">
            <p>2</p>
          </div>
          <div className="col-md=4">3</div>
        </div>
      </div>
    );
  }
}
