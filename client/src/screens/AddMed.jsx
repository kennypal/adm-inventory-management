import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "./../layouts/Layout";
import { postMedToDevice } from "./../services/medications";

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
      <Layout>
        <h1>Add Med</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleMedCreate(id, medData);
          }}
        >
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={medData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Par Level:
            <input
              type="text"
              name="par_level"
              value={medData.par_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Quantity On Hand:
            <input
              type="text"
              name="quantity_on_hand"
              value={medData.quantity_on_hand}
              onChange={handleChange}
            />
          </label>
          <button>Add</button>
        </form>
      </Layout>
    </div>
  );
}
