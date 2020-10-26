import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { postMedToDevice } from "./../services/medications";
import "./AddMed.css";

export default function AddMed() {
  const history = useHistory();
  const { id } = useParams();
  const [meds, setMeds] = useState([]);
  const [medData, setMedData] = useState({
    description: "",
    par_level: "",
    quantity_on_hand: "",
  });

  const handleMedCreate = async (id, medData) => {
    const newMed = await postMedToDevice(id, medData);
    setMeds((prevState) => [...prevState, newMed]);
    history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedData({
      ...medData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Add Med</h1>
      <div className="add-form-background">
        <div className="add-form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleMedCreate(id, medData);
            }}
          >
            <div className="add-input-container">
            <div>
            <label className="add-description">
              Description: &nbsp;
              <input
                type="text"
                name="description"
                value={medData.description}
                onChange={handleChange}
              />
              </label>
            </div>
            <div>
            <label className="add-par">
              Par Level: &nbsp;
              <input
                type="text"
                name="par_level"
                value={medData.par_level}
                onChange={handleChange}
              />
              </label>
            </div>
            <div>
            <label className="add-qoh">
              Quantity On Hand: &nbsp;
              <input
                type="text"
                name="quantity_on_hand"
                value={medData.quantity_on_hand}
                onChange={handleChange}
              />
              </label>
              </div>
              </div>
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
