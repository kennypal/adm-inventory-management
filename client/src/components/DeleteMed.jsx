import React from 'react'
import { destroyMedFromDevice } from '../services/medications'

export default function DeleteMed(props) {
  const { deviceId, medicationId, setMeds } = props

  const deleteMed = async (deviceId, medicationId) => {
    await destroyMedFromDevice(deviceId, medicationId)
    setMeds(prevState => prevState.filter(med => {
      return med.id !== medicationId
    }))
  }

  return (
    <div>
      <button onClick={() => {
        deleteMed(deviceId, medicationId)
      }}>Delete</button>
    </div>
  )
}
