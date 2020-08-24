import React from 'react';
import SideBar from "./SideBar";
import Main from "./Main";

function App() {
  return (
      <div className="d-flex" id="wrapper">

      <SideBar/>
      <Main/>
    </div>
  );
}

export default App;
