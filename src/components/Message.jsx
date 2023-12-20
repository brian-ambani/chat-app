import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/3828245/pexels-photo-3828245.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/3828245/pexels-photo-3828245.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
