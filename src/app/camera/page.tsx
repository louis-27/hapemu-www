export default function Page() {
    // return (
    //     <main className="bg-white min-h-screen text-black">
    //         <div className="flex flex-col overflow-x-auto">
    //             <div className="sm:-mx-6 lg:-mx-8">
    //                 <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
    //                     <div className="overflow-x-auto">
    //                         <table
    //                             className="min-w-full text-start text-sm font-light text-surface">
    //                             <thead
    //                                 className="border-b border-neutral-200 font-medium dark:border-white/10">
    //                                 <tr>
    //                                     <th scope="col" className="px-6 py-4">Rank</th>
    //                                     <th scope="col" className="px-6 py-4">Device</th>
    //                                     <th scope="col" className="px-6 py-4 bg-blue-100 font-bold">Camera</th>
    //                                     <th title="Evaluates the main camera performances for capturing still images in various lighting environments"
    //                                         scope="col" className="px-6 py-4">Photo</th>
    //                                     <th title="" scope="col" className="px-6 py-4">Zoom</th>
    //                                     <th scope="col" className="px-6 py-4">Bokeh</th>
    //                                     <th scope="col" className="px-6 py-4">Video</th>
    //                                     <th scope="col" className="px-6 py-4">Preview</th>
    //                                 </tr>
    //                             </thead>
    //                             <tbody>
    //                                 <tr className="border-b border-neutral-200 dark:border-white/10">
    //                                     <td className="whitespace-nowrap px-6 py-4 font-medium text-center">1</td>
    //                                     <td className="whitespace-nowrap px-6 py-4">Infinix Note 40 Pro</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center bg-blue-100 font-bold">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                 </tr>
    //                                 <tr className="border-b border-neutral-200 dark:border-white/10">
    //                                     <td className="whitespace-nowrap px-6 py-4 font-medium text-center">2</td>
    //                                     <td className="whitespace-nowrap px-6 py-4">Iphone 15 Pro Max</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center bg-blue-100 font-bold">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                 </tr>
    //                                 <tr className="border-b ">
    //                                     <td className="whitespace-nowrap px-6 py-4 font-medium text-center">3</td>
    //                                     <td className="whitespace-nowrap px-6 py-4">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center bg-blue-100 font-bold">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                     <td className="whitespace-nowrap px-6 py-4 text-center">Cell</td>
    //                                 </tr>
    //                             </tbody>
    //                         </table>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </main>
    // );

    return (
        <main className="bg-slate-200 min-h-screen text-black">
            <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-white p-6 text-surface shadow-secondary-1">
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
                                        <th title="Evaluates the main camera performances for capturing still images in various lighting environments"
                                            scope="col" className="px-6 py-4">Photo</th>
                                        <th title="" scope="col" className="px-6 py-4">Zoom</th>
                                        <th scope="col" className="px-6 py-4">Bokeh</th>
                                        <th scope="col" className="px-6 py-4">Video</th>
                                        <th scope="col" className="px-6 py-4">Preview</th>
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
        </main>
    );
}