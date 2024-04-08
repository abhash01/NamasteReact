import React from "react";
const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <form className="formDiv">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Contact;
