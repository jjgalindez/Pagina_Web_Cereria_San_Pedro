import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import styles from "./CollectionSection.module.css";
import Image from "next/image";

const COLLECTIONS = [
    {
        id: "religiosas",
        title: "Velas Religiosas",
        description: "Cirios, veladoras y velas de fe para iglesias, procesiones y altares.",
        accent: "Para la devoción",
        imageHint: "/assets/Religiosas.png",
    },
    {
        id: "decorativas",
        title: "Velas Decorativas",
        description: "Diseños únicos que transforman tu hogar en un refugio de calidez.",
        accent: "Para el hogar",
        imageHint: "/assets/Decorativas.png",
    },
    {
        id: "Esotericas",
        title: "Velas Esotéricas",
        description: "Diseños únicos para rituales y prácticas esotéricas.",
        accent: "Para la espiritualidad",
        imageHint: "/assets/Eventos.png",
    },
] as const;

export default function CollectionSection() {
    return (
        <section
            aria-labelledby="collection-title"
            className={styles.section}
        >
            <div className={styles.container}>
                <RevealOnScroll>
                    <div className={styles.header}>
                        <p className={styles.eyebrow}>
                            <span className={styles.eyebrowMark} aria-hidden="true" />
                            Colecciones
                        </p>
                        <h2 id="collection-title" className={styles.title}>
                            Una vela para cada{" "}
                            <span className={styles.titleAccent}>momento.</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className={styles.grid}>
                    {COLLECTIONS.map((collection, index) => (
                        <RevealOnScroll
                            key={collection.id}
                            delay={index * 0.15}
                        >
                            <Link
                                href="/catalog"
                                className={styles.card}
                                aria-label={`Ver ${collection.title}`}
                            >
                                <div className={styles.cardVisual}>
                                    <Image
                                        className={styles.cardImage}
                                        src={collection.imageHint}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                </div>

                                <div className={styles.cardContent}>
                                    <span className={styles.cardAccent}>
                                        {collection.accent}
                                    </span>
                                    <h3 className={styles.cardTitle}>
                                        {collection.title}
                                    </h3>
                                    <p className={styles.cardDescription}>
                                        {collection.description}
                                    </p>
                                    <span className={styles.cardLink}>
                                        Explorar
                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>

                <RevealOnScroll delay={0.3}>
                    <div className={styles.footer}>
                        <p className={styles.footerText}>
                            ¿Buscas algo personalizado? Te ayudamos.
                        </p>
                        <a
                            href="https://wa.me/573147982292?text=Hola%2C%20quiero%20un%20pedido%20personalizado"
                            className={styles.footerCta}
                        >
                            Escribir por WhatsApp
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}