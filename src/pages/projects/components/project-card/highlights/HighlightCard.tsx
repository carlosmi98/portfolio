import { TechnicalHighlight } from "../../../../../types/portfolio";

import type { ReactNode } from "react";
import { FaServer, FaDatabase, FaDocker, FaLaptopCode } from "react-icons/fa";
import { IoPieChartSharp, IoLogoFigma } from "react-icons/io5";
import styles from "./HighlightCard.module.css";


const iconMap: Record<string, ReactNode> = {
    server: <FaServer />,
    database: <FaDatabase />,
    docker: <FaDocker />,
    chart: <IoPieChartSharp />,
    palette: <IoLogoFigma />,
    code: <FaLaptopCode />,
};

export const HighlightCard = ({ highlight }: { highlight: TechnicalHighlight }) => {
    const IconComponent = iconMap[highlight.icon] ?? null;
    return (
        <aside className={styles.card}>
            <div className={styles.titleIcon}>
                {IconComponent && (
                    <div className={styles.icon}>
                        {IconComponent}
                    </div>
                )}
                <h4 className={styles.title}>{highlight.title}</h4>
            </div>
            <p className={styles.description}>{highlight.description}</p>
        </aside>
    );
};