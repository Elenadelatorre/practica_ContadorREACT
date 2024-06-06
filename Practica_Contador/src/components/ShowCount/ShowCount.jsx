import { useState } from "react"
import './ShowCount.css'

function ShowCount() {

const [showCount, setShowCount] = useState(0)

  return (
    <div>
      <h1>You clicked here {showCount} time</h1>
      <button className="btn-sumar" onClick={()=> setShowCount(showCount + 1)}>Sumar</button>
      <button className="btn-restar" onClick={()=> setShowCount(showCount - 1)}>Restar</button>
    </div>
  )
}

export default ShowCount
