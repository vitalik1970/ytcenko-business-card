// import Photosite from "@/app/photosite";
import Image from "next/image";
import styles from "./page.module.css";

export default function Social() { 

  
  return (
   
     
      <div className={styles.social}>
      <a href="https://github.com/vitalik1970?tab=repositories"><Image
      className={styles.github}
          src="/icons/gitHub.svg"
          alt="имс"
          width={30}
          height={30}
        /></a>
       <a href="https://www.instagram.com/iatsenko1748/"> <Image
      className={styles.github}
          src="/icons/instagram.svg"
          alt="имс"
          width={30}
          height={30}
        /></a>
         <a href="https://www.linkedin.com/in/vitaliy-yatsenko-5806b5226/"><Image
      className={styles.github}
          src="/icons/linkedin.svg"
          alt="имс"
          width={30}
          height={30}
        /></a>
         <a  href="https://twitter.com/YcenkoVitalij"><Image
      className={styles.github}
          src="/icons/twitter.svg"
          alt="имс"
          width={30}
          height={30}
        /></a>


      
     
    </div>
  );
}
