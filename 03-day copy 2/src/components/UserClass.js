import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"dummy",
        location:"Default",
        
         avatar_url:"http://dummy-photo.com"
 

      }
    };

    //console.log("child Constructor");
  }

  async componentDidMount() {
    //console.log("child componentDidMount");
    //api call
    const data= await fetch("https://api.github.com/users/mauryaharsh784");
    const json=await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    });
    console.log(json);
  }
   componentDidUpdate() {
    //console.log("components big update");
  }
   componentWillUnmount() {
    //console.log("components will Umount");
   }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
   

    //console.log("child render");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: Gonda</h4>
      </div>
    );
  }
}

export default UserClass;