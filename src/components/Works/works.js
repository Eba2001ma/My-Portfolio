import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.jpg';
import portfolio6 from '../../assets/portfolio6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='workImgs'>
            <img src={portfolio1} alt='portfolio' className='workImg'/>
            <img src={portfolio2} alt='portfolio' className='workImg'/>
            <img src={portfolio3} alt='portfolio' className='workImg'/>
            <img src={portfolio4} alt='portfolio' className='workImg'/>
            <img src={portfolio5} alt='portfolio' className='workImg'/>
            <img src={portfolio6} alt='portfolio' className='workImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works