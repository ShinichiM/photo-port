import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e){
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

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
                    <input name='name' type='text' defaultValue={name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='email' defaultValue={email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange}></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}