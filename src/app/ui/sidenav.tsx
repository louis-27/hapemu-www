"use client";

import { Button, Navbar } from "flowbite-react";
import React from "react";

export default function SideNav() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/home">
                <img src="/hapemu.svg" className="mr-2 h-9 sm:h-9" alt="Hapemu Logo" />
                <span className="self-center whitespace-nowrap lg:text-xl font-semibold text-blue-500">Hapemu</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button id="quizButton" className="me-3 lg:me-0 bg-blue-500 hover:bg-red-700">Do Quiz</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link id="pages" href="/home">Home</Navbar.Link>
                <Navbar.Link id="pages" href="/phones">Semua Hape</Navbar.Link>
                <Navbar.Link id="pages" href="/processor">Prossesor Terbaik</Navbar.Link>
                <Navbar.Link id="pages" href="/camera">Kamera Terbaik</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}