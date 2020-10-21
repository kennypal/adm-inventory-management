import React, { useState, useEffect }  from 'react'
import { getAllDevices } from '../services/devices'
// import { getAllMedsFromDevice } from './../services/medications'

export default function Table() {
  const [devices, setDevices] = useState([])
  // const [meds, setMeds] = useState([])

  useEffect(() => {
    const fetchDevices = async () => {
      const getDevices = await getAllDevices()
      setDevices(getDevices)
    }
    fetchDevices()
  }, [])

  // useEffect(() => {
  // const fetchMeds = async (id) => {
  //     const getMeds = await getAllMedsFromDevice(id)
  //     setMeds(getMeds)
  //   }
  //   fetchMeds()
  // }, [])

  const deviceJSX = devices.map(device => {
    return (
      <option value={device.name} key={device.id}>{device.name}</option>
    )
  })

  return (
    <div>
      <label htmlFor="devices">Device: &nbsp;</label>

      <select name="devices" id="devices">
        {deviceJSX}
      </select>
    </div>
  )
}
