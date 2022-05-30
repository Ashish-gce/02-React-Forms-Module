import React, { useState } from "react";

export const ChangeUsername = () => {
  let [username, setUsername] = useState("");

  // on type change happens
  let changeUsername = (e) => {
    setUsername(e.target.value);
  };

  // // prevent from form submit
  // let formSubmit = (event) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-success text-white">
                <p className="h4">React Two Way Binding</p>
              </div>
              <div className="card-body">
                <form
                  autoComplete="off"
                  /* onSubmit={formSubmit} */ onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="username"
                      name="name"
                      value={username}
                      onChange={changeUsername}
                    />
                  </div>
                </form>
                <h3>{username}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
