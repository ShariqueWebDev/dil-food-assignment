import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full px-3 max-w-[1200px] mx-auto my-0 ${className || ""} `}>
      {children}
    </div>
  )
}

export default Wrapper
