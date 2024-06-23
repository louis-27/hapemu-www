'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { Button, TextInput } from "flowbite-react";
import { useSearchParams } from 'next/navigation';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const searchParams = useSearchParams();
    const recommendationsParam = searchParams.get('recommendations');
    const recommendations = recommendationsParam
                            ? JSON.parse(decodeURIComponent(recommendationsParam))
                            : [];
    // const [recommendations] = useState(['Apple iPhone 15 Pro Max', 'Apple iPhone 15 Pro', 'Vivo X100 Pro', 'Apple iPhone 14 Pro Max', 'Apple iPhone 14 Pro']);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, recommendations }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                router.push('/home');
            } else {
                const errorData = await response.text();
                setError(`Failed to send email: ${response.status} ${response.statusText}. ${errorData}`);
            }
        } catch (error) {
            setError(`An error occurred: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <div>
                <TextInput
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    required
                />
            </div>
            <Button id='button' type="submit" className='bg-blue-500 lg:p-2 rounded-full' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Email Hasilku'}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default EmailForm;

/*
'use client'

import { redirect } from 'next/navigation'
import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from 'next/link';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [recommendations, setRecommendations] = useState(['Apple iPhone 15 Pro Max', 'Apple iPhone 15 Pro', 'Vivo X100 Pro', 'Apple iPhone 14 Pro Max', 'Apple iPhone 14 Pro']);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, recommendations }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                console.log(response);
            } else {
                console.error('Failed to send email');
                console.log(response);
            }
            // redirect('/home')

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
            <Link href="/home" className='lg:text-xl'>
                <Button id='button' type="submit" className='bg-blue-500 lg:p-2 rounded-full'>
                    Email Hasilku
                </Button>
            </Link>
        </form>
    );
};

export default EmailForm;
*/