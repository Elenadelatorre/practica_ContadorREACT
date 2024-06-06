import { useState } from "react"


function ShowCount() {

const [showCount, setShowCount] = useState(0)

  return (
    <div>
      <h1>You clicked here {showCount} time</h1>
      <button onClick={()=> setShowCount(showCount + 1)}>Sumar</button>
      <button onClick={()=> setShowCount(showCount - 1)}>Restar</button>
    </div>
  )
}

export default ShowCount
