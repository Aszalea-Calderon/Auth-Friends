import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("Dat Data", res);
        this.setState({
          friends: res.data.data, //!
        });
        console.log("friends", this.state.friends);
      })
      .catch((err) => {
        console.error("Man Down! Error", err.message);
      });
  };

  friend = () => {
    const friendData = [];
    this.state.friends.forEach((friend) => {
      friendData.push();
    });
  };
  render() {
    const friends = this.friend();
    return (
      <>
        <h1>ya{friends.name}</h1>
      </>
    );
  }
}

export default Friends;
