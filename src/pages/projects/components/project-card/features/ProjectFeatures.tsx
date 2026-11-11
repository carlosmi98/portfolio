import { useState } from "react";
import type { ProjectItem, ProjectFeature } from "../../../../../types/portfolio";
import styles from "./ProjectFeatures.module.css";
import { FeatureModal } from "./FeatureModal";

export const ProjectFeatures = ({ project }: { project: ProjectItem }) => {
    const [selectedFeature, setSelectedFeature] = useState<ProjectFeature | null>(null);

    return (
        <section className={styles.features}>
            <div className={styles.header}>
                <h2>{project.featuresTitle}</h2>
                <p>{project.featuresSubtitle}</p>
            </div>
            <div className={styles.grid}>
                {project.features.map((feature) => (
                    <div key={feature.id} className={styles.card} onClick={() => setSelectedFeature(feature)}>
                        <figure className={styles.figure}>
                            <img src={feature.image} alt={feature.title} className={styles.img} />
                            <div className={styles.overlay}>
                                <span className={styles.overlayIcon}>＋</span>
                            </div>
                        </figure>
                        <h4>{feature.title}</h4>
                        <p className={styles.hint}>Toca para ver más</p>
                    </div>
                ))}
            </div>
            {selectedFeature && <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
        </section>
    )
}