import styles from "./NotFoundC.module.css";
import lost from "../../../assets/not-found/lost.jpg";
import Button from "../../../components/common/button/Button";
import { notFoundData } from "../../../data/portfolioData";
import { FaArrowLeft } from "react-icons/fa";

export const NotFoundC = () => {
    return (
        <section className={styles.container}>
            <figure className={styles.figure}>
                <div className={styles.imageContainer}>
                    <img 
                        src={lost} 
                        alt="Lost illustration" 
                        className={styles.image} 
                    />
                </div>
                <figcaption className={styles.caption}>
                    {notFoundData.attribution.text}{" "}
                    <a 
                        href={notFoundData.attribution.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {notFoundData.attribution.linkText}
                    </a>
                </figcaption>
            </figure>

            <span className={styles.badge}>{notFoundData.badge}</span>

            <h1 className={styles.title}>{notFoundData.title}</h1>

            <p className={styles.description}>{notFoundData.description}</p>
            
            <div className={styles.actions}>
                <Button 
                    texto={notFoundData.buttonText} 
                    to="/" 
                    icon={<FaArrowLeft />} 
                    className={styles.homeButton} 
                />
            </div>
        </section>
    );
};

export default NotFoundC;
