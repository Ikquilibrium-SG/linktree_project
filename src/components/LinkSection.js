import React from 'react'

const LinkSection = props => {
    const {
        name,
        link,
        title
    } = props

    return(
        <div className='links' >
            <a href={link} title={title}>{ name }</a>
        </div>

    )
}

export default LinkSection