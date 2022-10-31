import React from 'react'

const SocialSection = props => {
    const {
        src1,
        src2,
        link
    } = props

    return(
        <div className="logos">
            <a href="https://app.slack.com">
                <img src={src1} alt="slack logo" />
            </a>
            <a href={link}>
                <img src={src2} alt="github logo" />
            </a>
        </div>

    )
}

export default SocialSection