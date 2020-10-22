import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Layout from "./../layouts/Layout";
import { postMedToDevice } from './../services/medications'
import { getAllDevices } from './../services/devices'

export default function AddMed() {
  const history = useHistory;
  const [devices, setDevices] = useState([])
  const [meds, setMeds] = useState([])
  const [medData, setMedData] = useState({
    description: '',
    par_level: '',
    quantity_on_hand: ''
  })

  useEffect(() => {
    const fetchDevices = async () => {
      const getDevices = await getAllDevices();
      setDevices(getDevices);
    };
    fetchDevices();
  }, []);

  const handleMedCreate = async (medData) => {
    const newMed = await postMedToDevice(medData)
    setMeds(prevState => ([...prevState, newMed]))
    history.push('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedData({ [name]: value })
  }

  return (
    <div>
      <Layout>
        <h1>Add Med</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleMedCreate(medData)
        }}>
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
              name="par level"
              value={medData.par_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Quantity On Hand:
            <input
              type="text"
              name="quantity on hand"
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
