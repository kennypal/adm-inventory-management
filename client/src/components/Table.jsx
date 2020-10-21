import React, { useState, useEffect }  from 'react'
import { getAllDevices } from '../services/devices'
import { getAllMedsFromDevice } from './../services/medications'

export default function Table() {
  const [devices, setDevices] = useState([])
  const [id, setId] = useState(null)
  const [meds, setMeds] = useState([])

  useEffect(() => {
    const fetchDevices = async () => {
      const getDevices = await getAllDevices()
      setDevices(getDevices)
    }
    fetchDevices()
  }, [])

  useEffect(() => {
  const fetchMeds = async () => {
      const getMeds = await getAllMedsFromDevice(id)
      setMeds(getMeds)
    }
    if (id) {
      fetchMeds()
    }
  }, [id])

  const deviceJSX = devices.map(device => {
    return (
      <option value={device.id} key={device.id}>{device.name}</option>
    )
    
  })

  const handleChange = (e) => {
    const { value } = e.target
    setId(value)
  }

  return (
    <div>
      <label htmlFor="devices">Device: &nbsp;</label>

      <select name="devices" id="devices" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">--Select a device--</option>
        {deviceJSX}
      </select>
      {meds.map(med => (
        <div key={med.id}>
          <p>{med.description}</p>
          <p>{med.par_level}</p>
          <p>{med.quantity_on_hand}</p>
        </div>
      ))}
    </div>
  )
}
