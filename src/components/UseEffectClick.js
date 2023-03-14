import React, {useState, useEffect} from "react"

export default function UseEffectClick() {
  const [resourceType, setResourceType] = useState('Change Me')

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('clean up code')
    }

}, [resourceType])

return (
  <>
    <div>
      <button onClick={() => setResourceType('Post')}>Posts</button>
      <button onClick={() => setResourceType('Users')}>Users</button>
      <button onClick={() => setResourceType('Comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
  </>
)}