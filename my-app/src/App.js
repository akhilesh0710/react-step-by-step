import React from 'react'
import HelloWorld from './HelloWorld'
import Greeting from './Greeting'
import ParentComponent from './BasicPropPassing/ParentComponent'
import ParentValue from './DynamicPropHandling/Project0/ParentValue'

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Greeting name="Akhilesh"/>
      <ParentComponent/>
      <ParentValue/>
    </div>
  )
}

export default App
