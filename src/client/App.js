import React from 'react'
import Image from './images/link.jpg'
import Counter from './components/Counter'
import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <div className="profile">
      <img src={Image} alt="" />
      <h1>Hello Ahmed</h1>
      <Counter />
    </div>
  )
}

export default hot(module)(App)
