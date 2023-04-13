import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const WomenScreen = () => {

  const women = Characters.filter((character) => character.type === 'm')

  return (
    <div className='container mt-3'>
      <h1>Women Screen</h1>
      <hr />

      <div className="row">
        {
          women.map((woman) => {
            return (
              <Card key={woman.id} {...woman} />
            )})
        }
      </div>
    </div>
  )
}

export default WomenScreen