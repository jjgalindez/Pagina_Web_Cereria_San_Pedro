import { Flame, History, ShieldCheck, Truck } from "lucide-react";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import styles from "./FeaturesSection.module.css";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Calidad y durabilidad",
        description:
            "Velas diseñadas para una combustión limpia, uniforme y de larga duración que ilumina tus espacios con total seguridad.",
    },
    {
        icon: History, //  Award / LandPlot
        title: "Tradición en Popayán",
        description:
            "Nuestras velas iluminan eventos y parte de la emblemática Semana Santa de Popayán, garantizando calidad.",
    },
    {
        icon: Flame,
        title: "Acabados impecables",
        description:
            "Años de experiencia en la fabricación de velas, combinando técnica y dedicación desde el corazón.",
    },
    {
        icon: Truck,
        title: "Envío a toda Colombia",
        description:
            "Tu pedido llega seguro a cualquier rincón del país, coordinamos por WhatsApp.",
    },
] as const;

export default function FeaturesSection() {
    return (
        <section
            aria-labelledby="features-title"
            className={styles.section}
        >
            <div className={styles.container}>
                <RevealOnScroll>
                    <div className={styles.header}>
                        <p className={styles.eyebrow}>
                            <span className={styles.eyebrowMark} aria-hidden="true" />
                            Nuestra esencia
                        </p>
                        <h2 id="features-title" className={styles.title}>
                            Tradición que se siente{" "}
                            <span className={styles.titleAccent}>en cada detalle.</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Desde Popayán para el mundo, velas que transforman cualquier espacio
                            en un momento de paz y calidez.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className={styles.grid}>
                    {FEATURES.map((feature, index) => (
                        <RevealOnScroll
                            key={feature.title}
                            delay={index * 0.12}
                        >
                            <article className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <feature.icon
                                        size={24}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>
                                    {feature.description}
                                </p>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}