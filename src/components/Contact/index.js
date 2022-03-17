import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input name='name'type='text'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='email'></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5'></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}