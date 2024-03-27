export default function Page() {
    return (
        <main className="bg-white min-h-screen text-black">
            <div className="flex flex-col overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table
                                className="min-w-full text-start text-sm font-light text-surface">
                                <thead
                                    className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Rank</th>
                                        <th scope="col" className="px-6 py-4">Device</th>
                                        <th scope="col" className="px-6 py-4">Camera</th>
                                        <th title="Evaluates the main camera performances for capturing still images in various lighting environments"
                                        scope="col" className="px-6 py-4">Photo</th>
                                        <th title="" scope="col" className="px-6 py-4">Zoom</th>
                                        <th scope="col" className="px-6 py-4">Bokeh</th>
                                        <th scope="col" className="px-6 py-4">Video</th>
                                        <th scope="col" className="px-6 py-4">Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
                                    </tr>
                                    <tr className="border-b ">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
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