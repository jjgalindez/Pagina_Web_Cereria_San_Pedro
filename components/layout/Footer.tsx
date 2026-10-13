import Link from "next/link";
import { SITE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-sand-100 py-14">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="font-title text-3xl font-semibold">{SITE.name}</p>
            <p className="max-w-sm text-sm leading-7">
              Una luz cercana para los espacios y los momentos que quieres cuidar.
              Velas artesanales desde Popayán.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-flame-500">Hablemos</h2>
            <a className="flex min-h-11 items-center hover:text-flame-600" href={`tel:${SITE.phone}`}>
              {SITE.phoneLabel}
            </a>
            <a className="flex min-h-11 items-center hover:text-flame-600" href={`tel:${SITE.secondPhone}`}>
              {SITE.secondPhoneLabel}
            </a>
            <a
              className="flex min-h-11 items-center break-all text-sm hover:text-flame-600"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-flame-500">Encuéntranos</h2>
            <p className="text-sm leading-7">{SITE.location}</p>
            <Link href="/contact" className="inline-flex min-h-11 items-center underline hover:text-flame-600">
              Consultar atención y entrega
            </Link>
            <p className="text-sm leading-6">
              Nunca dejes una vela encendida sin supervisión. Mantenla lejos de
              niños, mascotas y materiales inflamables.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-brand-700 pt-6 text-sm">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
