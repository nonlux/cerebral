import React from 'react'
import './styles.css'

export default function Recorder ({ label, onClick }) {
  return (
    <button className='Recorder' onClick={() => onClick()}>
      {label}
    </button>
  )
}
