"use client"
import { useState } from 'react';
// import Image from "next/image";
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
       
         <div   className={styles.example__site}
      style={{
        backgroundImage: `url('/travel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
      }}
    >
      
    </div>
       <p className={styles.site_activ}>{activeSites.siteTravel ? 'Образец сайта путешественника' : ''}</p> 

        </div>
<div  onClick={() => handleClick('sitePhoto')} className={styles.photosite__site}>
<div   className={styles.example__site}
      style={{
        backgroundImage: `url('/photosite.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
      }}
    >
      
    </div>

 <p className={styles.site_activ}>{activeSites.sitePhoto ? 'Образец сайта фотографа' : ''}</p> 
        </div>
        <div onClick={() => handleClick('siteAlex')} className={styles.alex__site}> 
        <div className={styles.example__site}
      style={{
        backgroundImage: `url("/Alex1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
      }}
    >
      
    </div>
       
         <p className={styles.site_activ}>{activeSites.siteAlex ? 'Образец сайта разработчика сайтов' : ''}</p> 
        </div>
        
        {/* <a onClick={() => handleClick('siteSvyt')} className={styles.svyt__site}>  */}
        <a href='https://svytogorsk.online'  className={styles.svyt__site}>
      
          <div className={styles.example__site}
      style={{
        backgroundImage: `url("/svyt.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
      }}
    >
      
    </div>
        {/* <p className={styles.site_activ}>{activeSites.siteSvyt ? 'Образец сайта города' : ''}</p>  */}
        </a>

        <div onClick={() => handleClick('siteHeppi')} className={styles.heppi__site}>
        <div className={styles.example__site} 
      style={{
        backgroundImage: `url("/heppi.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
       maxWidth: '450px',
        height: '220px',
      }}>
        <p className={styles.site_activ}>{activeSites.siteHeppi ? 'Образец сайта поздравления' : ''}</p> 
        </div>
        </div>
        
        </div> 
   
  );
}
