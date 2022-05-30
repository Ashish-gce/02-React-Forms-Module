import React, { useState } from "react";

const CarSelector = () => {
  let [selectedCar, setSelectedCar] = useState("");
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-info text-white">
                <p className="h3">Select a Car</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <form>
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={selectedCar}
                          onChange={(event) => {
                            setSelectedCar(event.target.value);
                          }}
                        >
                          <option value="Select a car">Select a car</option>
                          <option value="BMW">BMW</option>
                          <option value="Audi">Audi</option>
                          <option value="Porsche">Porsche</option>
                          <option value="farari">farari</option>
                          <option value="Mustang">Mustang</option>
                          <option value="Toyota">Toyota</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col">
                    <p className="h2 font-weight-bold text-danger">
                      {selectedCar}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarSelector;
