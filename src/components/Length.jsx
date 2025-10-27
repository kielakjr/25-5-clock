import React from 'react'

const Length = ({children, value}) => {
  return (
    <div>
        <h2>{children}</h2>
        <p><span><button>-</button>{value}<button>+</button></span></p>
    </div>
  )
}

export default Length
