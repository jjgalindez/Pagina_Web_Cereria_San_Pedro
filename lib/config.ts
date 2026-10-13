export const SITE = {
    name: "Cerería San Pedro",
    description:
        "Velas artesanales en Popayán para el hogar, la decoración y las celebraciones. Consulta referencias y prepara tu pedido por WhatsApp.",
    email: "velassanpedropopayan@gmail.com",
    location: "Popayán, Cauca, Colombia",
    phone: "+573147982292",
    secondPhone: "+573113699929",
    phoneLabel: "314 798 2292",
    secondPhoneLabel: "311 369 9929",
    whatsapp: "573147982292",
};

export const NAVIGATION = [
    { href: "/", label: "Inicio" },
    { href: "/catalog", label: "Catálogo" },
    { href: "/contact", label: "Contacto" },
];

export function getSiteUrl(): URL {
    const value = process.env.SITE_URL;

    if (!value) {
        throw new Error("Falta SITE_URL: configura el origen público del sitio.");
    }

    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("SITE_URL debe usar HTTP o HTTPS.");
    }

    return new URL(url.origin);
}