import React from "react";
import { fetchFriend } from "../actions/index";
import { connect } from "react-redux";
import Friend from "./Friend";
//import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
  //When the component loads, fetchFriend()
  componentDidMount() {
    this.props.fetchFriend();
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <h2>Loading Friends Village...</h2>
        ) : (
          this.props.friends.map((friend) => {
            return <Friend friend={friend} key={friend.id} />;
          })
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = {
  fetchFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
