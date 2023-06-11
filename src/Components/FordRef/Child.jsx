import React, { forwardRef } from 'react'

const Child = forwardRef((prop,parentRef) => {
    return (
      <div>
      <br />
      <input ref={parentRef} type="text" />
      Child</div>
    )
  })

export default Child