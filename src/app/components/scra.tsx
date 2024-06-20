// pages/post-data.js
'use client'
import { useState } from 'react';

export default function PostData() {
    const [name, setName] = useState('yosuajayapura@gmail.com');
    const [age, setAge] = useState(['Sohee', 'Chaeryeong', 'Vivi', 'Saerom', 'Mina']);

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

            const data = await response.json();
            console.log('Response data:', data);
            // You can do something with the response data here
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
                // onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Age"
                value={age}
                // onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}