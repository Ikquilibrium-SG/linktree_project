import React from 'react'
import ProfileSection from './components/ProfileSection';
import picture from './components/images/img4.jpg'
import LinkSection from './components/LinkSection';
import SocialSection from './components/SocialSection';
import slackLogo from './components/images/slack.png'
import githubLogo from './components/images/github.png'
import Footer from './components/Footer';
import zuriLogo from './components/images/Vector.png'
import hngLogo from './components/images/I4G.png'
import './components/stylesheet.css'


function App() {
  return (
    <div>
      <div className="container">
        <ProfileSection
        picture={picture}
        twitterUsername = 'Ikquilibrium'
        slackUsername = 'Ikquilibrium'
        />
        
        <LinkSection id='twitter'
        name='Twitter link'
        link='https://www.twitter.com/ikquilibrium'
        />
        <LinkSection id='btn__zuri'
        name='Zuri Team'
        link= 'https://training.zuri.team/'
        />
        <LinkSection id='books'
        name='Zuri Books'
        link='http://books.zuri.team'
        title='Handpicked books and customized guides to help you grow and advance your tech careers.'
        />
        <LinkSection id='book__python'
        name='Python Books'
        link='https://books.zuri.team/python-for-beginners?ref_id=<ikquilibrium>'
        title='Get more knowledge about advance topics in this books'
        /> 
        <LinkSection id='pitch'
        name='Background Checks for Coders'
        link='https://background.zuri.team'
        title=''
        />
        <LinkSection id='book__design'
        name='Design Books'
        link='https://books.zuri.team/design-rules'
        title='This design book which is FREE was written with the intention to help designers create professionals designs'
        />

        <SocialSection
        src1={slackLogo}
        link='https://github.com/Ikquilibrium-SG'
        src2={githubLogo}
        />
      </div>

      <Footer 
      src1={zuriLogo}
      src2={hngLogo}
      />
    </div>
  );
}

export default App;