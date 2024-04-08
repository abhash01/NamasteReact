import React from "react";

const User = ({ name }) => {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(1);
  return (
    <div>
      {/* <h3>Count : {count}</h3>
      <h3>Count1 : {count1}</h3> */}
      <h1>Name : {name}</h1>
      <h3>Location: Bengaluru</h3>
      <h4>Infosys</h4>
    </div>
  );
};
export default User;
