import Photosite from "@/app/photosite";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() { 

  
  return (
    <div className={styles.page}>
     <nav className={styles.nav}>
        <div className={styles.nav__hader}>
          <h2>Ytcenko.Studio</h2>
        </div>
        <div className={styles.examples}>
        <div className={styles.example}>
          <p>Главная</p>
        </div>
        <div className={styles.example}>
          <p>Резюме</p>
        </div>
        <div className={styles.example}>
          <p>Подробности</p>
          </div>
          <div className={styles.example}>
          <p>Цены</p>
        
        </div>
        <div className={styles.example}>
          <p>Сайт в подарок</p>
        </div>
        <div className={styles.example}>
          <p>Блог</p>
        </div>
        <div className={styles.example}>
          <p>Оставить заявку</p>
        </div>
         <div className={styles.example}>
         <a href="tel:+380954323425">+38 095 432 34 25</a>
        </div>  
        </div>
        <div className={styles.nav__footer}>
        <a href="mailto:ytcenko1970@gmail.com"> ytcenko1970@gmail.com</a>
        </div>
     </nav>
     <Photosite/>


        <div className={styles.main_content}>
      <main className={styles.main}>
        Согласно международного права каждый человек имеет право на владение собственным сайтом,созданным в фрейворке NEXT.js! 

        <br/>
        Для чего тебе это нужно?
        <ol>
          <li>Иметь свой реальный сайт в интернете это круто! </li>
          <li>Стать частью загадочного мира под таинственным названием "IT". </li>
          <li>Имея уже готовый сайт, легче приобретать навыки development&deployment.</li>
          <li>Это возможность завести новых друзей по интересам.</li>
          <li>Возможность поделится с миром какой либо информаций которая меня волнует.</li>
          <li>Использовать сайт для  бизнеса, добавив необходимый контент. </li>
          <li>Использовать как сайт-визитку, подробно описав свои услуги и контакты.  </li>
          <li>Иметь возможность <b>поздравить</b> близкого человека, с помощью его личного <b>сайта-открытки!</b>  </li>
        </ol>
      </main>
      </div>
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
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
