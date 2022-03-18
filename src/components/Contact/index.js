import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers'

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('Your email is valid')
            }
        }
        // else {
        //     if (!e.target.name.length) {
        //         setErrorMessage(`${e.target.name} is required`);
        //     } else {
        //         setErrorMessage('');
        //     }
        // }
        console.log(console.log('error message: ',errorMessage));
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        };
    };

    console.log(formState)
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' type='text' defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {
                    errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )
                }
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}