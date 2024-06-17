import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Get the data from the request body
            const name = 'yosuajayapura@gmail.com';
            const age = ['Sohee', 'Chaeryeong', 'Vivi', 'Saerom', 'Mina'];

            // Send the data to http://localhost:8080/send-email
            const response = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: name, recommendations: age }),
            });

            if (response.ok) {
                res.status(200).json({ message: 'Data sent successfully' });
            } else {
                res.status(500).json({ message: 'Error sending data' });
            }
        } catch (error) {
            console.error('Error sending data:', error);
            res.status(500).json({ message: 'Error sending data' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}