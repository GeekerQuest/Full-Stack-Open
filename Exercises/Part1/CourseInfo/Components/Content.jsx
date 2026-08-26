import React from 'react'
import { Part } from './Part'
const Content = (props) => {
    return (
        <>
            <Part Sl="1" content={props.contents[0].name} total={props.contents[0].exercises}/>
            <Part Sl="2" content={props.contents[1].name} total={props.contents[1].exercises}/>
            <Part Sl="3" content={props.contents[2].name} total={props.contents[2].exercises}/>
        </>
    )
}

export default Content