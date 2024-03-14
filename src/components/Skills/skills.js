import React from 'react';
import './skills.css';
import web from '../../assets/react.png';
import android from '../../assets/android.png';
import flutter from '../../assets/flutter.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well as android and ios application.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={web} alt='website' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Website Developer</h2>
                    <p>I am proficient in HTML, CSS,JavaScript and React  </p>
                </div>

            </div>

            <div className='skillBar'>
                <img src={android} alt='android' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Android Developer</h2>
                    <p>I am proficient in Java for Android App Development </p>
                </div>

            </div>

            <div className='skillBar'>
                <img src={flutter} alt='flutter' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Flutter Developer</h2>
                    <p>I am proficient in Flutter for Android and IOS App Development</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Skills