import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireMe.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ebba</span> <br/> Website Developer</span>
            <span className='introPara'>I am a skilled web developer with experience in creating visually<br/> appealing and user friendly websites.</span>
            <Link><button className='btn'><img src= {btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>

        </div>

        <img src={bg} alt='profile' className='bg'/>

    </section>
  )
}

export default Intro