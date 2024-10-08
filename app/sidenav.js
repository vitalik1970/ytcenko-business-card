"use client"
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Navlinks from "@/app/nav-links";
import NavMobil from "@/app/nav-mobil"

export default function Sidenav() { 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };
  // Управление z-index блоков при открытии/закрытии меню
  useEffect(() => {
    const scrollableBlocks = document.querySelectorAll('.scrollable-block'); // Ищем все блоки с классом прокрутки

    if (isOpen) {
      scrollableBlocks.forEach(block => {
        block.style.zIndex = '-10'; // Скрываем их за меню
      });
    } else {
      scrollableBlocks.forEach(block => {
        block.style.zIndex = ''; // Возвращаем z-index обратно
      });
    }

    // Очистка стилей при размонтировании компонента
    return () => {
      scrollableBlocks.forEach(block => {
        block.style.zIndex = ''; // Возвращаем исходные значения z-index
      });
    };
  }, [isOpen]); // Следим за состоянием меню

  console.log(isOpen, 'isOpen');
  return (  
     <nav className={styles.nav}>
        <div className={styles.nav__hader}>
          <h2>Ytcenko.Studio</h2>
        </div>   
        <Navlinks />
        <div className={styles.hamburger_menu}>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>

        <div className={styles.nav__mobil_heder}>
      <div className={styles.nav__logo_mobil}>
           Ytcenko.Studio 
        </div> 
        <div className={styles.nav_btn_close} onClick={() => setIsOpen(false)}></div>
        </div> 

        <div className={styles.nav__footer_mobil}>

        <div className={styles.nav__mail_mobil}>
        <a  href="mailto:ytcenko1970@gmail.com">ytcenko1970@gmail.com</a>
        </div>
         
      <Navlinks  isOpen={isOpen} toggleMenu={toggleMenu}/> 
      </div>
      </nav>
      </div>
        <div className={styles.nav__footer}>
        <a href="mailto:ytcenko1970@gmail.com">ytcenko1970<wbr/>@gmail.com</a>
        </div>
        
     </nav> 
  );
}

