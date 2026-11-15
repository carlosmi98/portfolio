import styles from "./NotFoundC.module.css";
import lost from "../../../assets/not-found/lost.jpg";
import Button from "../../../components/common/button/Button";
import { notFoundData } from "../../../data/portfolioData";
import { FaArrowLeft } from "react-icons/fa";

export const NotFoundC = () => {
    return (
        <section className={styles.container}>
            <figure className={styles.figure}>
                <img 
                    src={lost} 
                    alt="Lost illustration" 
                    className={styles.image} 
                />
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
