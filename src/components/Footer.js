import React from 'react'

const Footer = props => {
    const {
        src1,
        src2
    } = props


    return(
        <div className='footer'>
            <img src={src1} alt="zuri logo" id='zuri-logo'/>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={src2} alt="HNG logo" id='hng-logo'/>
        </div>
    )
}

export default Footer