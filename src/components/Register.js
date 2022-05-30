import React, { useState } from "react";

export const Register = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    terms: false, // Since, terms is a boolean (0 -> false -> unChecked) (1 -> true -> checked) values
  });

  //   Update state
  let updateState = (event) => {
    if (event.target.type === "checkbox") {
      setUser({
        ...user,
        [event.target.name]: event.target.checked,
      });
    } else {
      setUser({
        ...user,
        [event.target.name]: event.target.value, // this statement dynamically update our input fieldds
      });
    }
  };

  // //   Seperate function "updateCheck" checkbox is created, b'z it send "checked" value seperately
  // let updateCheck = (event) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  return (
    <>
      {/* {JSON.stringify(user)} */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-warning text-white text-center">
                <p className="h2">Register Here</p>
              </div>
              <div className="card-body">
                <form
                  autoComplete="off"
                  onSubmit={(event) => {
                    event.preventDefault();
                    console.log(user);
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="usernamr"
                      className="form-control"
                      value={user.name}
                      onChange={updateState}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                      value={user.email}
                      onChange={updateState}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                      value={user.password}
                      onChange={updateState}
                    />
                  </div>
                  <div className="form-group">
                    {/* V.V. Imp.  name="designation" is common for all option means, this set only-one value */}
                    <select
                      className="form-control"
                      name="designation"
                      value={user.designation}
                    >
                      <option value="Select Appropriate Designation">
                        Select Appropriate Designation
                      </option>
                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Sr. Software Engineer">
                        Sr. Software Engineer
                      </option>
                      <option value="Team Leader">Team Leader</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Company Director">Company Director</option>
                    </select>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="terms"
                      className="form-check-input"
                      id="defaultchech1"
                      // value={user.terms}
                      onChange={updateState}
                    />
                    <label className="form-check-label" htmlFor="defaultchech1">
                      Accept Terms & Conditions
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-warning btn-large"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
