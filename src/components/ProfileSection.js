import React from 'react'
import './stylesheet.css'

const ProfileSection = props => {
    const {
        picture,
        twitterUsername,
        slackUsername
    } = props

    return(
        <div className='profileContainer'>
            <div className="profileImage">
                <img src={picture} id='profile_img' alt='profile'/>
                <div className="share">
                    <div className="tooltip-text">
                        <span>Share Link</span>
                    </div>
                </div>
            </div>
            <div className="name">
                <h3 id="twitter">{ twitterUsername }</h3>
                <h3 id="slack"
                style={{display: 'none'}}>
                    { slackUsername }
                </h3>
            </div>
            
        </div>

    )
}

export default ProfileSection