import SideNav from '@/src//app/ui/sidenav';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Page() {
    return (
        <main className="bg-slate-200 min-h-screen text-black">
            <SideNav />

            <div className='flex flex-col w-4/5 mx-auto mt-5 block rounded-lg bg-white p-5 text-surface shadow-secondary-1'>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Berapa anggaranmu untuk smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="harga-essensial" name="harga" value="harga-essensial" className="hidden peer" required />
                        <label for="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-midrange" name="harga" value="harga-midrange" className="hidden peer" />
                        <label for="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-premium" name="harga" value="harga-premium" className="hidden peer" required />
                        <label for="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-ultra" name="harga" value="harga-ultra" className="hidden peer" />
                        <label for="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="prosessor-tidak" name="prosessor" value="prosessor-tidak" className="hidden peer" required />
                        <label for="prosessor-tidak" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="prosessor-cukup" name="prosessor" value="prosessor-cukup" className="hidden peer" />
                        <label for="prosessor-cukup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="prosessor-penting" name="prosessor" value="prosessor-penting" className="hidden peer" required />
                        <label for="prosessor-penting" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="prosessor-sangat" name="prosessor" value="prosessor-sangat" className="hidden peer" />
                        <label for="prosessor-sangat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-essensial" name="harga" value="harga-essensial" className="hidden peer" required />
                        <label for="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-midrange" name="harga" value="harga-midrange" className="hidden peer" />
                        <label for="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-premium" name="harga" value="harga-premium" className="hidden peer" required />
                        <label for="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-ultra" name="harga" value="harga-ultra" className="hidden peer" />
                        <label for="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">RAM pada Smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="harga-essensial" name="harga" value="harga-essensial" className="hidden peer" required />
                        <label for="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-midrange" name="harga" value="harga-midrange" className="hidden peer" />
                        <label for="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-premium" name="harga" value="harga-premium" className="hidden peer" required />
                        <label for="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-ultra" name="harga" value="harga-ultra" className="hidden peer" />
                        <label for="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Berapa anggaranmu untuk smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="harga-essensial" name="harga" value="harga-essensial" className="hidden peer" required />
                        <label for="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-midrange" name="harga" value="harga-midrange" className="hidden peer" />
                        <label for="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-premium" name="harga" value="harga-premium" className="hidden peer" required />
                        <label for="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-ultra" name="harga" value="harga-ultra" className="hidden peer" />
                        <label for="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Berapa anggaranmu untuk smartphone?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="harga-essensial" name="harga" value="harga-essensial" className="hidden peer" required />
                        <label for="harga-essensial" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-midrange" name="harga" value="harga-midrange" className="hidden peer" />
                        <label for="harga-midrange" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-premium" name="harga" value="harga-premium" className="hidden peer" required />
                        <label for="harga-premium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                        <input type="radio" id="harga-ultra" name="harga" value="harga-ultra" className="hidden peer" />
                        <label for="harga-ultra" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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

            <div className='flex justify-center w-4/5 mx-auto mt-5 block p-5'>
                <Button id='button' type="submit" className='bg-blue-500 lg:p-2 rounded-full'>
                    <a href="/quizResult" className='lg:text-xl'>
                        Cari Hape Impianku
                    </a>
                </Button>
            </div>
        </main>
    );
}