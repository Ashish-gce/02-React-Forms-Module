import React, { useState } from "react";

export const SmsApp = () => {
  let [maxCount, setMaxCount] = useState(100);
  let [charCount, setCharCount] = useState(100);

  //  Remaining character's are
  let characterRemains = (event) => {
    setCharCount(maxCount - event.target.value.length);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <p className="h2 text-center text-info">SMS App</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea
                      rows={3}
                      placeholder="Address plz"
                      maxLength={maxCount}
                      onChange={characterRemains}
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <p className="h4">
                  Remaining character's are:{" "}
                  <span className="font-weight-bold">{charCount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

