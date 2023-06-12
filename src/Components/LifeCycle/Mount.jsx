import React from 'react'

const Mount = () => {
    useEffect(()=>{
        console.log("Component is Mount")
    },[])

    
  return (
    <div>Mount</div>
  )
}

export default Mount