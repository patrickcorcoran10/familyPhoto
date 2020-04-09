import React, { Component } from "react";
import "./Upload.css";

export default class Upload extends Component {
  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span>
          </div>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label class="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
      </div>
    );
  }
}
