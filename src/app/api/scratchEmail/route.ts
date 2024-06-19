import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        // res.status(200).json({ message: 'Data sent successfully' });
        try {
            // const name = 'yosuajayapura@gmail.com';
            const name = 'ard00243@gmail.com';
            const age = ['Sohee', 'Chaeryeong', 'Yujin', 'Saerom', 'Mina'];
            
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