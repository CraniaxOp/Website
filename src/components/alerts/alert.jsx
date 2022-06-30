import React from 'react'
import './alert.css'
const alert = (props) => {
  return (
    props.alert &&<div class="alert danger-alert">
    <h3>{props.alert.type}</h3>
    </div>

  )
}
export default alert