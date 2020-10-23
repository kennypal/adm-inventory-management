import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { putMedToDevice, getMedFromDevice } from '../services/medications'
import Layout from './../layouts/Layout'

export default function EditMed() {
  const history = useHistory()
  const { device_id, medication_id } = useParams()
  const [meds, setMeds] = useState([])
  const [medData, setMedData] = useState({
    description: '',
    par_level: '',
    quantity_on_hand: ''
  })

  useEffect(() => {
    const handleGetOne = async (deviceId, medicationId) => {
      const oneMed = await getMedFromDevice(deviceId, medicationId)
      console.log(oneMed)
      setMedData({
        description: oneMed.description,
        par_level: oneMed.par_level,
        quantity_on_hand: oneMed.quantity_on_hand
      })
    }
    handleGetOne(device_id, medication_id)
  }, [device_id, medication_id])

  const handleMedUpdate = async (deviceId, medicationId, medData) => {
    const updateMed = await putMedToDevice(deviceId, medicationId, medData);
    setMeds((prevState) => [...prevState, updateMed])
    history.push("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setMedData({
      ...medData,
      [name]: value
    })
  }

  return (
    <div>
      {console.log('i made it')}
      <Layout>
        <h1>Edit Med</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleMedUpdate(device_id, medication_id, medData)
        }}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder=""
              value={medData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Par Level:
            <input
              type="text"
              name="par_level"
              placeholder=""
              value={medData.par_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Quantity On Hand:
            <input
              type="text"
              name="quantity_on_hand"
              placeholder=""
              value={medData.quantity_on_hand}
              onChange={handleChange}
            />
          </label>
          <button>Edit</button>
        </form>
      </Layout>
    </div>
  )
}
