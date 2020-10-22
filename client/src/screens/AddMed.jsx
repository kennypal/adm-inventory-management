import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Layout from "./../layouts/Layout";
import { postMedToDevice } from './../services/medications'
// import { getAllDevices } from './../services/devices'

export default function AddMed() {
  const history = useHistory();
  const { id } = useParams();
  // const [devices, setDevices] = useState([])
  const [meds, setMeds] = useState([])
  const [medData, setMedData] = useState({
    description: '',
    parLevel: '',
    quantityOnHand: ''
  })

  // useEffect(() => {
  //   const fetchDevices = async () => {
  //     const getDevices = await getAllDevices();
  //     setDevices(getDevices);
  //   };
  //   fetchDevices();
  // }, []);

  const handleMedCreate = async (id, medData) => {
    const newMed = await postMedToDevice(id, medData)
    setMeds(prevState => ([...prevState, newMed]))
    history.push('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedData({
      ...medData,
      [name]: value
    })
  }

  return (
    <div>
      <Layout>
          <h1>Add Med</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleMedCreate(id, medData)
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
                name="parLevel"
                value={medData.parLevel}
                onChange={handleChange}
              />
            </label>
            <label>
              Quantity On Hand:
            <input
                type="text"
                name="quantityOnHand"
                value={medData.quantityOnHand}
                onChange={handleChange}
              />
            </label>
            <button>Add</button>
            </form>
          </Layout>
    </div>
  );
}
