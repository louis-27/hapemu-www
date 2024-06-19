import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("ada disini");
    if (req.method === 'POST') {
        const { harga, prosessor, kamera, ram, penyimpanan, baterai } = req.body;

        try {
            const response = await fetch('http://localhost:8080/send-smartphone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ harga, prosessor, kamera, ram, penyimpanan, baterai }),
            });

            if (response.ok) {
                res.status(200).json({ message: 'Email sent successfully' });
            } else {
                res.status(response.status).json({ message: 'Failed to send email' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
