import React from 'react'
import HelloWorld from './HelloWorld'
import Greeting from './Greeting'
import ParentComponent from './BasicPropPassing/ParentComponent'

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Greeting name="Akhilesh"/>
      <ParentComponent/>
    </div>
  )
}

export default App
