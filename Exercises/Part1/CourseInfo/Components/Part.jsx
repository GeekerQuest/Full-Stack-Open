import React from 'react'

export const Part = (props) => {
  return (
    <div>
        <p>
            Part - {props.Sl} : {props.content}  - {props.total}
        </p>  
    </div>
  )
}
