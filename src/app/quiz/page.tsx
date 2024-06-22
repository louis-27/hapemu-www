import SideNav from '@/src/app/ui/sidenav';
import Questions from '@/src/app/components/questions';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Page() {
    return (
        <main className="bg-slate-200 min-h-screen text-black">
            <SideNav />

            <Questions />
        </main>
    );
}