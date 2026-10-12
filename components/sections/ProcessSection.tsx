import Link from "next/link";
import { ArrowUpRight, } from "lucide-react";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import styles from "./ProcessSection.module.css";

export const PROCESS_STEPS = [
    { number: "01", label: "Selección", detail: "de materia prima de alta calidad" },
    { number: "02", label: "Fundición", detail: "y moldeo de alta precisión" },
    { number: "03", label: "Inspección", detail: "y acabado de cada producto" },
    { number: "04", label: "Despacho", detail: "protegido para envío nacional" },
] as const;

export default function ProcessSection() {
    return (
        <section
            aria-labelledby="process-title"
            className={styles.section}
        >
            <div className={styles.mediaLayer} aria-hidden="true">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={styles.video}
                    poster="/images/process-poster.webp"
                >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                </video>

                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Columna izquierda - Contenido */}
                    <div className={styles.content}>
                        <RevealOnScroll direction="left">
                            <p className={styles.eyebrow}>
                                <span className={styles.eyebrowMark} aria-hidden="true" />
                                Nuestro proceso
                            </p>
                            <h2 id="process-title" className={styles.title}>
                                Del fuego nace{" "}
                                <span className={styles.titleAccent}>el arte.</span>
                            </h2>
                            <p className={styles.description}>
                                Unimos años de tradición en cerería con procesos estandarizados en cuatro pasos,
                                asegurando un producto final resistente, estético y listo para llegar a cualquier lugar de Colombia.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll direction="left" delay={0.2}>
                            <Link href="/catalog" className={styles.cta}>
                                Ver colección completa
                                <ArrowUpRight
                                    aria-hidden="true"
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </RevealOnScroll>
                    </div>

                    {/* Columna derecha - Pasos */}
                    <div className={styles.steps}>
                        {PROCESS_STEPS.map((step, index) => (
                            <RevealOnScroll
                                key={step.number}
                                delay={index * 0.1}
                                direction="right"
                            >
                                <div className={styles.step}>
                                    <span className={styles.stepNumber}>
                                        {step.number}
                                    </span>
                                    <div className={styles.stepText}>
                                        <span className={styles.stepLabel}>
                                            {step.label}
                                        </span>
                                        <span className={styles.stepDetail}>
                                            {step.detail}
                                        </span>
                                    </div>
                                    {index < PROCESS_STEPS.length - 1 && (
                                        <div className={styles.stepLine} aria-hidden="true" />
                                    )}
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}