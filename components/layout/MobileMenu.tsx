"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "@/lib/config";


export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const trigger = useRef<HTMLButtonElement>(null);

    function close(restoreFocus: boolean) {
        setOpen(false);
        if (restoreFocus) trigger.current?.focus();
    }

    return (
        <div
            className="md:hidden"
            onKeyDown={(event) => {
                if (event.key === "Escape" && open) {
                    event.preventDefault();
                    close(true);
                }
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) close(false);
            }}
        >
            <button
                ref={trigger}
                type="button"
                className="nav-link"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setOpen((value) => !value)}
            >
                {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>

            <nav
                id="mobile-navigation"
                aria-label="Navegación móvil"
                hidden={!open}
                className="absolute inset-x-0 top-full border-b border-sand-200 bg-sand-50/75  p-4 shadow-card"
            >
                <div className="container-shell flex flex-col">
                    {NAVIGATION.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="nav-link"
                            onClick={() => close(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="nav-link"
                        onClick={() => close(false)}
                    >
                        Administración
                    </Link>
                </div>
            </nav>

            <noscript>
                <nav aria-label="Navegación sin JavaScript" className="flex flex-wrap">
                    {NAVIGATION.map((item) => (
                        <a className="nav-link" href={item.href} key={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </noscript>
        </div>
    );
}
