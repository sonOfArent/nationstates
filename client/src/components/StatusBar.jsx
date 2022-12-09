import React from 'react'

const StatusBar = ({ stat }) => {

  console.log(stat)

  return (
    <div className='StatusBar'>
        {stat[0]}: {stat[1]}
    </div>
  )
}

export default StatusBar