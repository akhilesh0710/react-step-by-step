import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

  const message ="Hello, Ravi! How are you." 
  return (
    <div>
         
        <ChildComponent  message = {message} />
    </div>
  )
}

export default ParentComponent