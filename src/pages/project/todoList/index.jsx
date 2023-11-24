// import React from 'react';
import './style.css';
const TodoList = () => {
  return (
    <>
      <div id="todo-container">
        {/* Header */}
        <h2>Todo List</h2>
        {/* ---- */}
        {/* 1.1 List todo */}
        <ul id="todo-list">
          {/* <li class="todo-item">
    <span>Hello</span>
    <div>
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </li> */}
        </ul>
        {/* ---- */}
        {/* Button Add todo popup */}
        <button className="btn btn-primary-1">Add Todo</button>
        {/* 1.2 Popup */}
        <div id="popup" className="popup">
          <div className="popup-content">
            <h1 className="close">x</h1>
            <h3 id="popup-title">Add Todo</h3>
            <div className="popup-form">
              <input type="text" id="todo-text" placeholder="Todo text" />
              <div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        {/* ---- */}
        {/* 1.3 Audio success */}
        <audio id="toastSoundSuccess">
          <source src="./assets/success.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        {/*1.4 Audio error */}
        <audio id="toastSoundError">
          <source src="./assets/error.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        {/* ---- */}
        {/* 1.5 Toast */}
        <div id="toast" className="toast" />
        {/* ---- */}
      </div>
      {/* ---- */}
    </>
  );
};

export default TodoList;
