import React from 'react'

const DepotviewButtons = ({ locations }: any) => {
  console.log('props', locations)
  return (
    // <div>Sridhar</div>
    <li>
      {locations.locationName}
      {'(' + locations.locationId + ')'}
    </li>
  )
}

export default DepotviewButtons
