import React from 'react'

const Footer = props => {
    const {
        src1,
        src2
    } = props


    return(
        <div className='footer'>
            <div className="line">
                <hr style={{width:'82%', color: '#667085', margin: '30px auto 20px'}}/>
            </div>
            <div className="footer-end">
                <img src={src1} alt="zuri logo" id='zuri-logo'/>
                <p>HNG Internship 9 Frontend Task</p>
                <img src={src2} alt="HNG logo" id='hng-logo'/>
            </div>
        </div>
    )
}

export default Footer