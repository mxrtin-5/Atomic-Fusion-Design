import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css'


const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ex2ae8k', 'template_ttraqjc', form.current, 'PmPjiEC_-vIfmmwyS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section class="login-card-container">
            <div class="login-card">
                <div class="login-card-header">
                    <h1>Contact us</h1>
                    <div>Send us an Email</div>
                </div>
                <form ref={form} onSubmit={sendEmail} class="login-card-form">
                    <div class="form-item">
                        <input type="text" name='user_name' placeholder='Name' id="emailForm"/>
                    </div>
                    <div class="form-item">
                        <input type="email" placeholder='Email' name='user_email' id="passwordForm"/>
                    </div>
                    <div className='form-item'>
                        <textarea placeholder='MESSAGE' className='textarea' name='message' cols="30" rows="10" />
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacto;