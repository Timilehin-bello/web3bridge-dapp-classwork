/* eslint-disable react/prop-types */
import { useState } from "react";
// import { ethers } from "ethers";

const MyMessage = ({ contract }) => {
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const result = await contract.getMessage();
    setMessage(result);
  };

  const setMessageOnChain = async () => {
    if (newMessage !== "") {
      const transaction = await contract.setMessage(newMessage);
      console.log("newMessage", newMessage);
      await transaction.wait();
      setNewMessage("");
      getMessage();
    } else {
      alert("Please enter a message");
    }
  };

  return (
    <div className="">
      <div className="text-center">
        <h1>My Message DApp</h1>
        <p>Current Message: {message}</p>
      </div>
      <div className="align-center">
        <input
          type="text"
          placeholder="Enter new message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={setMessageOnChain}>Set Message</button>
        <button onClick={getMessage}>Get Message</button>
      </div>
    </div>
  );
};

export default MyMessage;
