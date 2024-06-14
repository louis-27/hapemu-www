'use client'

import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const EmailForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <div>
                <TextInput id="email" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com" required />
            </div>
            <Button id='button' type="submit" className='bg-blue-500 lg:p-2 rounded-full'>
                <a href="/home" className='lg:text-xl'>
                    Email Hasilku
                </a>
            </Button>
        </form>
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="Enter your email"
        //     />
        //     <button type="submit">Submit</button>
        // </form>
    );
};

export default EmailForm;