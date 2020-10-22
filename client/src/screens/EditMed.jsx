import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { putMedToDevice } from '../services/medications'
import Layout from './../layouts/Layout'

export default function EditMed() {
  const history = useHistory()
  const { id, medication_id } = useParams()
  const [meds, setMeds] = useState([])
  const [medData, setMedData] = useState({
    description: '',
    par_level: '',
    quantity_on_hand: ''
  })

  const handleMedUpdate = async (id, medication_id, medData) => {
    const updateMed = await putMedToDevice(id, medication_id, medData);
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
      <Layout>
        <h1>Edit Med</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleMedUpdate(id, medication_id, medData)
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
        </form>
      </Layout>
    </div>
  )
}
