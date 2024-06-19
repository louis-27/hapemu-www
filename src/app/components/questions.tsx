'use client'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from 'react';

export default function Questions() {
    const [harga, setHarga] = useState('');
    const [prosessor, setProsessor] = useState('');
    const [kamera, setKamera] = useState('');
    const [ram, setRam] = useState('');
    const [penyimpanan, setPenyimpanan] = useState('');
    const [baterai, setBaterai] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendSmartphone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ harga, prosessor, kamera, ram, penyimpanan, baterai }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                console.log(response);
            } else {
                console.error('Failed to send email');
                console.log(response);
            }
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Berapa anggaranmu untuk smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="harga-essensial"
                            name="harga"
                            value="harga-essensial"
                            className="hidden peer"
                            required
                            checked={harga === 'harga-essensial'}
                            onChange={() => setHarga('harga-essensial')}
                        />
                        <label htmlFor="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Rp1.000.000 - Rp3.000.000</div>
                                <div className="w-full">Hape Essensial</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="harga-midrange"
                            name="harga"
                            value="harga-midrange"
                            className="hidden peer"
                            checked={harga === 'harga-midrange'}
                            onChange={() => setHarga('harga-midrange')}
                        />
                        <label htmlFor="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Rp3.000.000 - Rp7.000.000</div>
                                <div className="w-full">Hape Midrange</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="harga-premium"
                            name="harga"
                            value="harga-premium"
                            className="hidden peer"
                            required
                            checked={harga === 'harga-premium'}
                            onChange={() => setHarga('harga-premium')}
                        />
                        <label htmlFor="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Rp7.000.000 - Rp12.000.000</div>
                                <div className="w-full">Hape Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="harga-ultra"
                            name="harga"
                            value="harga-ultra"
                            className="hidden peer"
                            checked={harga === 'harga-ultra'}
                            onChange={() => setHarga('harga-ultra')}
                        />
                        <label htmlFor="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Lebih dari Rp12.000.000</div>
                                <div className="w-full">Hape Ultra Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>



            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Seberapa penting Prosessor Smartphone untuk kamu?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="prosessor-tidak"
                            name="prosessor"
                            value="prosessor-tidak"
                            className="hidden peer"
                            required
                            checked={prosessor === 'prosessor-tidak'}
                            onChange={() => setProsessor('prosessor-tidak')}
                        />
                        <label htmlFor="prosessor-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Tidak Terlalu</div>
                                <div className="w-full">Saya hanya menggunakan smartphone untuk internetan dan sosial media</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="prosessor-cukup"
                            name="prosessor"
                            value="prosessor-cukup"
                            className="hidden peer"
                            checked={prosessor === 'prosessor-cukup'}
                            onChange={() => setProsessor('prosessor-cukup')}
                        />
                        <label htmlFor="prosessor-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Cukup Penting</div>
                                <div className="w-full">Saya menggunakan smartphone lebih dari sekedar internetan dan sosial media</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="prosessor-penting"
                            name="prosessor"
                            value="prosessor-penting"
                            className="hidden peer"
                            required
                            checked={prosessor === 'prosessor-penting'}
                            onChange={() => setProsessor('prosessor-penting')}
                        />
                        <label htmlFor="prosessor-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Penting</div>
                                <div className="w-full">Saya sering main game dan edit video</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="prosessor-sangat"
                            name="prosessor"
                            value="prosessor-sangat"
                            className="hidden peer"
                            checked={prosessor === 'prosessor-sangat'}
                            onChange={() => setProsessor('prosessor-sangat')}
                        />
                        <label htmlFor="prosessor-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Sangat Penting</div>
                                <div className="w-full">Saya Streamer/Pemain E-Sport/Editor Video</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>



            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Seberapa penting Kamera Smartphone untuk kamu?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="kamera-tidak"
                            name="kamera"
                            value="kamera-tidak"
                            className="hidden peer"
                            required
                            checked={kamera === 'kamera-tidak'}
                            onChange={() => setKamera('kamera-tidak')}
                        />
                        <label htmlFor="kamera-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Tidak terlalu</div>
                                <div className="w-full">Hape Essensial</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="kamera-cukup"
                            name="kamera"
                            value="kamera-cukup"
                            className="hidden peer"
                            checked={kamera === 'kamera-cukup'}
                            onChange={() => setKamera('kamera-cukup')}
                        />
                        <label htmlFor="kamera-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Cukup Penting</div>
                                <div className="w-full">Hape Midrange</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="kamera-penting"
                            name="kamera"
                            value="kamera-penting"
                            className="hidden peer"
                            required
                            checked={kamera === 'kamera-penting'}
                            onChange={() => setKamera('kamera-penting')}
                        />
                        <label htmlFor="kamera-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Penting</div>
                                <div className="w-full">Hape Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="kamera-sangat"
                            name="kamera"
                            value="kamera-sangat"
                            className="hidden peer"
                            checked={kamera === 'kamera-sangat'}
                            onChange={() => setKamera('kamera-sangat')}
                        />
                        <label htmlFor="kamera-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Sangat Penting</div>
                                <div className="w-full">Saya Influencer</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>



            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Banyak RAM yang diinginkan pada Smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="ram-tidak"
                            name="ram"
                            value="ram-tidak"
                            className="hidden peer"
                            required
                            checked={ram === 'ram-tidak'}
                            onChange={() => setRam('ram-tidak')}
                        />
                        <label htmlFor="ram-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">4GB - 6GB</div>
                                <div className="w-full">Hape Essensial</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="ram-cukup"
                            name="ram"
                            value="ram-cukup"
                            className="hidden peer"
                            checked={ram === 'ram-cukup'}
                            onChange={() => setRam('ram-cukup')}
                        />
                        <label htmlFor="ram-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">6GB - 8GB</div>
                                <div className="w-full">Hape Midrange</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="ram-penting"
                            name="ram"
                            value="ram-penting"
                            className="hidden peer"
                            required
                            checked={ram === 'ram-penting'}
                            onChange={() => setRam('ram-penting')}
                        />
                        <label htmlFor="ram-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">8GB - 12GB</div>
                                <div className="w-full">Hape Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="ram-sangat"
                            name="ram"
                            value="ram-sangat"
                            className="hidden peer"
                            checked={ram === 'ram-sangat'}
                            onChange={() => setRam('ram-sangat')}
                        />
                        <label htmlFor="ram-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">12GB - 16GB</div>
                                <div className="w-full">Hape Ultra Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>



            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Penyimpanan yang dibutuhkan untuk smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="penyimpanan-tidak"
                            name="penyimpanan"
                            value="penyimpanan-tidak"
                            className="hidden peer"
                            required
                            checked={penyimpanan === 'penyimpanan-tidak'}
                            onChange={() => setPenyimpanan('penyimpanan-tidak')}
                        />
                        <label htmlFor="penyimpanan-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">64GB - 128GB</div>
                                <div className="w-full">Hape Essensial</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="penyimpanan-cukup"
                            name="penyimpanan"
                            value="penyimpanan-cukup"
                            className="hidden peer"
                            checked={penyimpanan === 'penyimpanan-cukup'}
                            onChange={() => setPenyimpanan('penyimpanan-cukup')}
                        />
                        <label htmlFor="penyimpanan-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">128GB - 256GB</div>
                                <div className="w-full">Hape Midrange</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="penyimpanan-penting"
                            name="penyimpanan"
                            value="penyimpanan-penting"
                            className="hidden peer"
                            required
                            checked={penyimpanan === 'penyimpanan-penting'}
                            onChange={() => setPenyimpanan('penyimpanan-penting')}
                        />
                        <label htmlFor="penyimpanan-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">256GB - 512GB</div>
                                <div className="w-full">Hape Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="penyimpanan-sangat"
                            name="penyimpanan"
                            value="penyimpanan-sangat"
                            className="hidden peer"
                            checked={penyimpanan === 'penyimpanan-sangat'}
                            onChange={() => setPenyimpanan('penyimpanan-sangat')}
                        />
                        <label htmlFor="penyimpanan-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">512GB - 1TB</div>
                                <div className="w-full">Hape Ultra Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>


            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Baterai pada Smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input
                            type="radio"
                            id="baterai-tidak"
                            name="baterai"
                            value="baterai-tidak"
                            className="hidden peer"
                            required
                            checked={baterai === 'baterai-tidak'}
                            onChange={() => setBaterai('baterai-tidak')}
                        />
                        <label htmlFor="baterai-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">3500mAh - 4000mAh</div>
                                <div className="w-full">Hape Essensial</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="baterai-cukup"
                            name="baterai"
                            value="baterai-cukup"
                            className="hidden peer"
                            checked={baterai === 'baterai-cukup'}
                            onChange={() => setBaterai('baterai-cukup')}
                        />
                        <label htmlFor="baterai-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">4000mAh - 4500mAh</div>
                                <div className="w-full">Hape Midrange</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="baterai-penting"
                            name="baterai"
                            value="baterai-penting"
                            className="hidden peer"
                            required
                            checked={baterai === 'baterai-penting'}
                            onChange={() => setBaterai('baterai-penting')}
                        />
                        <label htmlFor="baterai-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">4500mAh - 5000mAh</div>
                                <div className="w-full">Hape Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="baterai-sangat"
                            name="baterai"
                            value="baterai-sangat"
                            className="hidden peer"
                            checked={baterai === 'baterai-sangat'}
                            onChange={() => setBaterai('baterai-sangat')}
                        />
                        <label htmlFor="baterai-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Lebih dari 5000mAh</div>
                                <div className="w-full">Hape Ultra Premium</div>
                            </div>
                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>

            <div className='flex justify-center w-4/5 mx-auto mt-5 block p-5'>
                <Button id='button' type="submit" className='bg-blue-500 lg:p-2 rounded-full'>
                    <a href="/quizResult" className='lg:text-xl'>
                        Cari Hape Impianku
                    </a>
                </Button>
            </div>
        </form>
    );
}