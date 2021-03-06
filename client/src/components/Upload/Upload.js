import React, { Component } from "react";
import "./Upload.css";
import superagent from "superagent";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      caption: "",
    };
  }
  handleCaption = (e) => {
    console.log(e.target.value);
    this.setState({
      caption: e.target.value,
    });
  };
  upload = (e) => {
    e.preventDefault();
    console.log("we are attempting an upload.");
  };
  submitPhoto = (e) => {
    e.preventDefault();
    console.log("we are submitting on this click.", this.state.caption);
    superagent
      .post("/api/upload")
      .send({
        image: "here's an image",
        caption: "test caption",
      })
      .end((err, res) => {
        console.log(res);
        // window.location.reload();
      });
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
            onChange={(this.handleCaption = this.handleCaption.bind(this))}
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
