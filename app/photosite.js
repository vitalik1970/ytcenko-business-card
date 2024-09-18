"use client"
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() { 

    const [activeSites, setActiveSites] = useState({});

    const handleClick = (siteKey) => {
 
        setActiveSites(prevState => ({ ...prevState, [siteKey]: true }));
    
        setTimeout(() => {
          setActiveSites(prevState => ({ ...prevState, [siteKey]: false }));
        }, 4000);
      };
  return (
   

     <div className={styles.mainpage__site}>

     <div onClick={() => handleClick('siteTravel')} className={styles.travel__site}> 
        <Image
      className={styles.example__site}
          src="/travel.png"
          alt="имс"
          width={450}
          height={220}
         
        />
       <p className={styles.site_activ}>{activeSites.siteTravel ? 'Образец сайта путешественника' : ''}</p> 

        </div>
<div  onClick={() => handleClick('sitePhoto')} className={styles.photosite__site}>
<Image
      className={styles.example__site}
          src="/photosite.png"
          alt="имс"
          width={450}
          height={220}
         
        />
 <p className={styles.site_activ}>{activeSites.sitePhoto ? 'Образец сайта фотографа' : ''}</p> 
        </div>
        <div onClick={() => handleClick('siteAlex')} className={styles.alex__site}> 
        <Image
      className={styles.example__site}
       src="/Alex1.png"
          alt="имс"
          width={450}
          height={220}
         
        />
         <p className={styles.site_activ}>{activeSites.siteAlex ? 'Образец сайта разработчика сайтов' : ''}</p> 
        </div>
        <div onClick={() => handleClick('siteSvyt')} className={styles.svyt__site}> 
        <Image
      className={styles.example__site}
          src="/svyt.png"
          alt="имс"
          width={450}
          height={220}
          
        /> <p className={styles.site_activ}>{activeSites.siteSvyt ? 'Образец сайта города' : ''}</p> 
        </div>
        
        </div> 
   
  );
}
