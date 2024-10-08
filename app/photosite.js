"use client"
import { useState } from 'react';
import styles from "./page.module.css";

export default function Photosite() {
  const [activeSites, setActiveSites] = useState({});
  const [fullScreenImage, setFullScreenImage] = useState(null); 
  
  const handleClick = (siteKey) => {
    setActiveSites(prevState => ({ ...prevState, [siteKey]: true }));

    setTimeout(() => {
      setActiveSites(prevState => ({ ...prevState, [siteKey]: false }));
    }, 4000);
  };

  const openFullScreen = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
   <>
      <div className={styles.mainpage__site}>
  
        <div onClick={() => handleClick('siteTravel')} className={styles.travel__site}>
          <div
            className={styles.example__site}
            style={{
              backgroundImage: `url('/travel.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              maxWidth: '450px',
              height: '220px',
            }}
            onClick={() => openFullScreen('/travel.jpg')} 
          >
          </div>
          <p className={styles.site_activ}>{activeSites.siteTravel ? 'Образец сайта путешественника' : ''}</p>
        </div>

       
        <div onClick={() => handleClick('sitePhoto')} className={styles.photosite__site}>
          <div
            className={styles.example__site}
            style={{
              backgroundImage: `url('/photosite.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              maxWidth: '450px',
              height: '220px',
            }}
            onClick={() => openFullScreen('/photosite.jpg')}
          >
          </div>
          <p className={styles.site_activ}>{activeSites.sitePhoto ? 'Образец сайта фотографа' : ''}</p>
        </div>

        {/* Пример для остальных изображений */}
        <div onClick={() => handleClick('siteAlex')} className={styles.alex__site}>
          <div
            className={styles.example__site}
            style={{
              backgroundImage: `url("/Alex1.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              maxWidth: '450px',
              height: '220px',
            }}
            onClick={() => openFullScreen('/Alex1.jpg')}
          >
          </div>
          <p className={styles.site_activ}>{activeSites.siteAlex ? 'Образец сайта разработчика сайтов' : ''}</p>
        </div>
        <a href='https://svytogorsk.online'  className={styles.svyt__site}>
      
          <div className={styles.example__site}
         style={{
        backgroundImage: 'url("/svyt.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
        }}
         >
         </div></a>
        
         <div onClick={() => handleClick('siteStudio')} className={styles.studio__site}> 
         <div   className={styles.example__site}
        style={{
        backgroundImage: `url('/web-studio.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '450px',
        height: '220px',
        }}
        onClick={() => openFullScreen('/web-studio.png')}
        >
        </div>
       <p className={styles.site_activ}>{activeSites.siteStudio ? 'Образец сайта фрилансера' : ''}</p> 

        </div>
       
      </div>
      {fullScreenImage && (
          <div className={styles.fullScreen} onClick={closeFullScreen}>
            <img src={fullScreenImage} alt="Full size" className={styles.fullScreenImage} />
          </div>
        )}
    </>
  );
}
