import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (input, val) => {
    this.setState({
      [input]: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) =>
        console.log("The id to your post is " + response.status)
      )
      .catch((error) => console.log(error.message));
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userID"
              placeholder="ID"
              value={userId}
              onChange={(e) => this.handleChange("userId", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={(e) => this.handleChange("title", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={(e) => this.handleChange("body", e.target.value)}
            />
          </div>
          <button type="submit">Submit data</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
