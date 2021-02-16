import React from "react";

class Friend extends React.Component {
  render() {
    const { friend } = this.props;
    console.log(friend, "friend");
    return (
      <>
        <div className="card">
          <h3>friend's Name: {friend.name}</h3>
          <br />
          <h4>
            {friend.name}'s Age: {friend.age}
          </h4>
          <br />
          <h4>
            {friend.nickname}'s Email: {friend.email}
          </h4>
          <br />
        </div>
      </>
    );
  }
}

export default Friend;
