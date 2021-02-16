import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/index";

class AddFriend extends React.Component {
  //To house the changes before they are dispatched
  state = {
    newFriend: {
      name: "",
      age: null,
      email: "",
    },
  };
  //Handle any new changes coming in
  handleChange = (e) => {
    this.setState({
      ...this.state,
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Handle Submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriend);
  };

  render() {
    console.log(this.state.newFriend);
    return (
      <section>
        <h2>Add Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.newFriend.name}
            />
            <label htmlFor="age">Age:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="age"
              id="age"
              value={this.state.newFriend.age}
            />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="email"
              id="email"
              value={this.state.newFriend.email}
            />
          </div>

          {this.props.error && (
            <div className="alert alert-danger" role="alert">
              Error: {this.props.error}
            </div>
          )}
          <button>Submit New Friend</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.addError,
  };
};

export default connect(mapStateToProps, { addFriend })(AddFriend);
