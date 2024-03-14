import React, { useRef } from 'react';
import './contacts.css';
import facebook from '../../assets/facebook.png';
import freelancer from '../../assets/freelancer.png';
import microsoft from '../../assets/microsoft.png';
import upwork from '../../assets/upwork.png';
import facebookIcon from '../../assets/facebookIcon.png';
import youtubeIcon from '../../assets/youtubeIcon.png';
import twitterIcon from '../../assets/twitter.png';
import whatsappIcon from '../../assets/whatsapp.png';
import emailjs from '@emailjs/browser';



const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_c4zzkym', 'template_fox0i4i', form.current, {
            publicKey: 'VXL3qv7K0tUelRHJI',
          })
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log(error.text);
            });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h2 className='clientTitle'>My Clients</h2>
            <span className='clientDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</span>
            <div className='clientImgs'>
                <img className='clientImg' src={facebook} alt='client'/>
                <img className='clientImg' src={freelancer} alt='client'/>
                <img className='clientImg' src={microsoft} alt='client'/>
                <img className='clientImg' src={upwork} alt='client'/>
            </div>
        </div>
        <div id='contact'>
            <h2 className='contactTitle'>Contact</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={facebookIcon} alt='facebook' className='link'/>
                    <img src={youtubeIcon} alt='youtube' className='link'/>
                    <img src={twitterIcon} alt='twitter' className='link'/>
                    <img src={whatsappIcon} alt='whatsapp' className='link'/>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contacts