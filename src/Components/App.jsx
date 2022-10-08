import React from "react";
import Form from "./Form";

async function App() {

  React.useEffect(() => {
    fetch("http://localhost:3001/auth")
      .then((res) => res.json())
      .then((date) => {
        console.log({date});
      });
  }, []);

  return (
    <div className="container">
      <Form />
    </div>
  );
}

export default App;
