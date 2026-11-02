import { TechIcon } from "./TechIcon";
import { TECH_COLORS } from "./techConfig";
import { technologies } from "../../../../../data/portfolioData";
import styles from "./Technologies.module.css";

export const Technologies = () => {
    return (
        <section id="technologies">
            <h2>Technologies</h2>
            <p>{technologies.subtitle}</p>
            {technologies.categories.map((category) => (
                <div key={category.name} className={styles.category}>
                    <h3>{category.name}</h3>
                    <ul
                        className={styles.skills}
                        style={{ '--columns': category.skills.length } as React.CSSProperties}
                    >
                        {category.skills.map((skill) => (
                            <li
                                key={skill.name}
                                className={styles.skillCard}
                                style={{
                                    '--brand-color': TECH_COLORS[skill.name.toLowerCase()] ?? "currentColor"
                                } as React.CSSProperties}
                            >
                                <TechIcon name={skill.name} className={styles.icon} />
                                <span className={styles.iconName}>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )


}