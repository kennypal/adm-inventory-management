import React, { useState, useEffect }  from 'react'
import { getAllDevices } from './../services/devices'

export default function Dropdown() {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    const fetchDevices = async () => {
      const getDevices = await getAllDevices()
      setDevices(getDevices)
    }
    fetchDevices()
  }, [])

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
