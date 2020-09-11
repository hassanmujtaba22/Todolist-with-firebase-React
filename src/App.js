import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from "firebase"
import db from "./firebase"


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function addTodos(e) {
    // this will fire off when we click the button 
    e.preventDefault() // will stop the refresh
    // setTodos([...todos, input])
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }
  useEffect(() => {
    // this code here.. if fire off when page loaded
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapShot => {
      setTodos(snapShot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Todo App</h1>
      </header>
      <form>
        <input value={input} placeholder="Enter your Todos" onChange={e => setInput(e.target.value)} />
        <button disabled={!input} type="submit" onClick={addTodos}>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            <span className="text">{todo.todo}</span>
            <span className="controller">
            <button className="edit-btn" onClick={e => {
              var editvalue = prompt("Edit the Value")
              db.collection("todos").doc(todo.id).set({ todo: editvalue }, { merge: true })
            }}>Edit</button>
            <button className="delete-btn" onClick={e => { db.collection("todos").doc(todo.id).delete() }}>Delete</button>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
