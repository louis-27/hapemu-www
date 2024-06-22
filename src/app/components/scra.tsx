// ========================================================================
// ========================================================================
// ========================================================================
// =============================== Not Used =============================== 
// ========================================================================
// ========================================================================
// ========================================================================

/*
'use client'

import { FormEvent } from 'react'

export default function Page() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/scratchEmail', {
            method: 'POST',
            body: formData,

            
        })
        
        // Handle response if necessary
        // const data = await response.json()
        // ...
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    )
}
*/

'use client'
import { useState } from 'react';

export default function PostData() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(['Sohee', 'Chaeryeong', 'Giselle', 'Saerom', 'Mina']);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/scratchEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age }),
            });

            // const data = await response.json();
            // console.log('Response data:', data);
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Error submitting the form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}


// <input
//     type="text"
//     placeholder="Age"
//     value={age}
// value={age.join(', ')} // Convert the array to a string
// onChange={(e) => setAge(e.target.value)}
// />