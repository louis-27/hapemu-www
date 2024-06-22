// ========================================================================
// ========================================================================
// ========================================================================
// =============================== Not Used =============================== 
// ========================================================================
// ========================================================================
// ========================================================================

import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log('Here');
    try {
        // const age = req.body.age;
        const name = req.body.name;
        // const name = 'yosuajayapura@gmail.com';
        const age = ['Sohee', 'Eunbi', 'Jihyo', 'Jeewon', 'Chaeyun'];

        console.log('Name: ', name);
        const response = await fetch('http://localhost:8080/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: name, recommendations: age }),
        });
        /////////// 
        // const responseBody = await response.json();

        // console.log('Response status:', response.status);
        // console.log('Response body:', responseBody);
        /////////// 
        if (response.ok) {
            res.status(200).json({ message: 'Data sent successfully' });
        } else {
            res.status(500).json({ message: 'Error sending data' });
        }
    } catch (error) {
        console.error('Error sending data:', error);
        res.status(500).json({ message: 'Error sending data' });
    }
}