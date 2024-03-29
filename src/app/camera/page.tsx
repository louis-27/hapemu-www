export default function Page() {
    return (
        <main className="bg-slate-200 min-h-screen text-black">
            <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
                {/*
                    Aku agak buntu dengan margin top, karena setiap kali
                    dibuat pasti ada ruang hitam kosong, jadi aku pakai div
                    ini sebagai margin top
                */}
            </div>

            <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-white p-5 text-surface shadow-secondary-1">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table
                                className="min-w-full text-left text-sm font-light text-surface">
                                <thead
                                    className="border-b border-neutral-200 font-medium text-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Rank</th>
                                        <th scope="col" className="px-6 py-4">Device</th>
                                        <th scope="col" className="px-6 py-4 bg-blue-100 font-bold rounded-t-2xl">Camera</th>
                                        <th data-title="Evaluates the main camera performances for capturing still images in various lighting environments"
                                            scope="col" className="px-6 py-4">
                                            Photo
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </th>
                                        <th data-title="Evaluates the main camera zoom in and zoom out capabilities for still images at various distances and lighting environments"
                                            scope="col" className="px-6 py-4">
                                            Zoom
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </th>
                                        <th data-title="Evaluates the performances of the main camera when taking portrait pictures with an out-of-focus blur background"
                                            scope="col" className="px-6 py-4">
                                            Bokeh
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </th>
                                        <th data-title="Evaluates the main camera video recording in various lighting environments"
                                            scope="col" className="px-6 py-4">
                                            Video
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </th>
                                        <th data-title="Evaluates the fidelity of the main camera application preview rendering compared to the actual capture"
                                            scope="col" className="px-6 py-4">
                                            Preview
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Infinix Note 40 Pro</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Iphone 15 Pro Max</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="transition duration-300 ease-in-out hover:bg-neutral-100 text-center">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-start">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4 bg-blue-100 hover:bg-neutral-100 font-bold rounded-b-2xl">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
                {/*
                    Sama dengan Margin Top kasusnya
                */}
            </div>
        </main>
    );
}