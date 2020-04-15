import React, { Component } from "react";
import "./Upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  upload = (e) => {
    e.preventDefault();
    console.log("we are attempting an upload.");
  };
  submitPhoto = (e) => {
    e.preventDefault();
    console.log("we are submitting on this click.");
  };
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              id="inputGroupFileAddon01"
              onClick={(this.upload = this.upload.bind(this))}
            >
              Upload
            </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationTextarea">Add a Caption</label>
          <textarea
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Type your caption here..."
            required
          ></textarea>
        </div>
        <button onClick={(this.submitPhoto = this.submitPhoto.bind(this))}>
          Submit Photo
        </button>
      </div>
    );
  }
}
