import React from "react";
import AddName from "./Components/AddName";
import Tetris from "./Components/Multiplayer";
import Rooms from "./Components/Rooms";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {socket} from "./hooks/"
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  window.onbeforeunload = (e) => {
    socket.emit("Leave", {user: State.player.username, room: State.room.name}) 
    return ''  
  };
  window.onunload =  function(e) {
    
    
    
    console.log("KHROOJ T(AWED");
    

  };
  let State = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h1>Red T e t r i s</h1>
      <ToastContainer />
      
      {State.player.username === "" ? (
        <AddName />
      ) : State.room.name === "" ? (
        <Rooms />
      ) : (
        <Tetris />
      )}
    </div>
  );
}

export default App;
