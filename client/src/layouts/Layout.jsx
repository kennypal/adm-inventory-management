import React from 'react'

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
