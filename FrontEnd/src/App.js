import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table className="titleBar">
        <tbody>
          <td>
            <img
              alt="app icon"
              width="80"
              src="57301f8bf69d246fceaff705bd511fa4.jpg"
            />
          </td>
          <td width="350" />
          <td>
            <h1>CatMash</h1>
          </td>
        </tbody>
      </table>

      <div>
        <h2>Choose this one</h2>
      </div>
      <div>
        <h2>Maybe this one is the cuttiest one</h2>
      </div>
    </div>
  );
}

export default App;
