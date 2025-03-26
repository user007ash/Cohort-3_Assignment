import React from 'react'

const Header = ({message}) => {
  return (
    <div style={{
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      color: 'black',
      fontWeight:'bolder',
      fontSize: '2rem',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      height:'12vh'     
    }}>{message}</div>
  )
}

export default Header