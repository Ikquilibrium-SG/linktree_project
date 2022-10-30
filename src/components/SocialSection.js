import React from 'react'

const SocialSection = props => {
    const {
        src1,
        src2,
        link
    } = props

    return(
        <div className="logos">
            <img src={src1} alt="slack logo" />
            <a href={link}>
                <img src={src2} alt="github logo" />
            </a>
        </div>

    )
}

export default SocialSection