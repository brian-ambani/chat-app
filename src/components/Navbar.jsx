import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Brain Chat</div>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Micah</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
