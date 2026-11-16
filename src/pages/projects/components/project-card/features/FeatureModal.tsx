import { useEffect } from "react";

import styles from "./FeatureModal.module.css";
import type { ProjectFeature } from "../../../../../types/portfolio";


interface FeatureModalProps {
    feature: ProjectFeature;
    onClose: () => void;
};

export const FeatureModal = ({ feature, onClose }: FeatureModalProps) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className={styles.modal} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${feature.title} details`}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{feature.title}</h2>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">✕</button>
                </div>
                <img src={feature.image} alt={`${feature.title} preview screenshot`} className={styles.image} />
                <p className={styles.description}>{feature.description}</p>
            </div>
        </div>
    )
}