import Image from "next/image";
import styles from './styles.module.css';

export default function Resume() { 

  return (
      
        <div className={styles.resume}>
           
           
           < Image
    //   className={styles.github}
          src="/resume.png"
          alt="имс"
          width={600}
          height={500}
        />

        </div>
    
  );
}