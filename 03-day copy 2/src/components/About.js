import User from "./User";
import UserClass from "./UserClass";
import React from "react";


///class baseed components:
 class About extends React.Component{
  constructor(props){
    super(props);
    //console.log("parant constructer");
    
  }
   componentDidMount(){
    //console.log("parent components did mount");
    
  }
  render(){
     //console.log("parent render");
     
    return (
    <div>

      <h1>About</h1>
      <h2>this is About Page</h2>
    
      <UserClass name={"first"} location={"Gonda Clsss"}/>
      
    </div>
  );
   }
 }


 /// this functional components:
// const About = () => {
//   return (
//     <div>

//       <h1>About</h1>
//       <h2>this is About Page</h2>
    
//       <UserClass name={"Harsh Maurya (classs)"}location={"Gonda Clsss"}/>
      
//     </div>
//   );
// };

export default About;