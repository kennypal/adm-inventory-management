import React from 'react'

export default function DeleteMed(props) {
  const { deviceId, medicationId } = props

  console.log(deviceId)
  console.log(medicationId)

  return (
    <div>
      <button>Delete</button>
    </div>
  )
}
