import React from 'react'
// import { Button } from 'reactstrap'

const LinkSection = props => {
    const {
        name,
        link
    } = props

    return(
        <div className='links'>
            <a href={link}>{ name }</a>
        </div>

    )
}

export default LinkSection