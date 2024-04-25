import SideNav from '@/src//app/ui/sidenav';

export default function Page() {
    return (
        <main className="bg-slate-200 min-h-screen text-black">
            <SideNav />

            {/* <div className="grid w-[40rem] grid-cols-4 gap-2 rounded-xl bg-gray-200 p-2">
                <div>
                    <input type="radio" name="option" id="1" value="1" className="peer hidden" checked />
                    <label htmlFor="1" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">1</label>
                </div>

                <div>
                    <input type="radio" name="option" id="2" value="2" className="peer hidden" />
                    <label htmlFor="2" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">2</label>
                </div>

                <div>
                    <input type="radio" name="option" id="3" value="3" className="peer hidden" />
                    <label htmlFor="3" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">3</label>
                </div>

                <div>
                    <input type="radio" name="option" id="4" value="3" className="peer hidden" />
                    <label htmlFor="4" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">4</label>
                </div>
            </div> */}

            <div role="radiogroup" className="mx-auto py-12 flex justify-center">

                <div className="flex items-center">
                    <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label1" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">On</label>
                </div>

                <div className="flex items-center ml-6">
                    <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                    </div>
                    <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Off</label>
                </div>

                <div className="flex items-center ml-6">
                    <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="disabled" disabled type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="disabled" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Disabled</p>
                </div>
            </div>
        </main>
    );
}