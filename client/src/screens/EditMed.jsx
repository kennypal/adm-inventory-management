import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { putMedToDevice, getMedFromDevice } from "../services/medications";
import './EditMed.css'

export default function EditMed() {
  const history = useHistory();
  const { device_id, medication_id } = useParams();
  const [meds, setMeds] = useState([]);
  const [medData, setMedData] = useState({
    description: "",
    par_level: "",
    quantity_on_hand: "",
  });

  useEffect(() => {
    const handleGetOne = async (deviceId, medicationId) => {
      const oneMed = await getMedFromDevice(deviceId, medicationId);
      console.log(oneMed);
      setMedData({
        description: oneMed.description,
        par_level: oneMed.par_level,
        quantity_on_hand: oneMed.quantity_on_hand,
      });
    };
    handleGetOne(device_id, medication_id);
  }, [device_id, medication_id]);

  const handleMedUpdate = async (deviceId, medicationId, medData) => {
    const updateMed = await putMedToDevice(deviceId, medicationId, medData);
    setMeds((prevState) => [...prevState, updateMed]);
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
      <h1>Edit Med</h1>
      <div className="edit-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleMedUpdate(device_id, medication_id, medData);
          }}
        >
          <div className="edit-input-container">
            <div>
              <label className="edit-description">
                Description: &nbsp;
                <input
                  type="text"
                  name="description"
                  placeholder=""
                  value={medData.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label className="edit-par">
                Par Level: &nbsp;
                <input
                  type="text"
                  name="par_level"
                  placeholder=""
                  value={medData.par_level}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label className="edit-qoh">
                Quantity On Hand: &nbsp;
                <input
                  type="text"
                  name="quantity_on_hand"
                  placeholder=""
                  value={medData.quantity_on_hand}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button>Edit</button>
        </form>
      </div>
    </div>
  );
}
