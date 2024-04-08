import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "patna",
        avatar_url: "img",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhash01");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count inc
        </button>
        <h1>Name : {name}</h1>
        <h3>Location:{location}</h3>
        <h4>
          <img src={avatar_url} alt="img" />
        </h4>
      </div>
    );
  }
}
export default UserClass;
