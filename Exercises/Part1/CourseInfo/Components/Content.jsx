import React from 'react'
import { Part } from './Part'
const Content = (props) => {
    return (
        <>
            <Part Sl="1" content={props.contents[0]} total={props.counter[0]}/>
            <Part Sl="2" content={props.contents[1]} total={props.counter[1]}/>
            <Part Sl="3" content={props.contents[2]} total={props.counter[2]}/>
        </>
    )
}

export default Content