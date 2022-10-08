import React from "react";

function Form() {
  return (
    <form
      action="http://localhost:3001/auth/register"
      method="POST"
      className="card"
    >
      <div className="card-body">
        <div className="form-group mb-2">
          <label>Matricula*</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group mb-2">
          <label>Nome*</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group mb-2">
          <label>Email*</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>

        <button type="submit" className="btn btn-primary">
          ENVIAR
        </button>
      </div>
    </form>
  );
}

export default Form;
