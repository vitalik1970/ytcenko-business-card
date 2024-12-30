import Sidenav from '@/app/sidenav';
import Photosite from "@/app/photosite";
import Social from "@/app/social";
import "./globals.css";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
     <head>
        <title>Готовые сайты по доступным ценам | Сайт-визитка, Блог, Лендинг, Корпоративный сайт</title>
        <meta name="description" content="Продажа готовых сайтов: сайт-визитка, блог, лендинг, корпоративный сайт и сайты для бизнесменов. Гарантируем индивидуальный подход и учёт всех пожеланий клиентов." />
        <meta name="keywords" content="готовые сайты, сайт-визитка, лендинг, корпоративный сайт, сайт для бизнеса, сайт для юристов, сайт для адвокатов, сайт для стоматологов, недорогие сайты, сайт поздравления" />
        <meta name="author" content="Яценко Виталий Викторович" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="ru" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Готовые сайты по доступным ценам | Визитки, блоги, лендинги" />
        <meta property="og:description" content="Продажа готовых сайтов для бизнеса и личных нужд: корпоративные сайты, сайты-визитки, блоги и лендинги. Гибкий подход к каждому клиенту. Яценко Виталий Викторович." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prodazhas.site/" />
        <meta property="og:image" content="https://prodazhas.site/icons/favicon.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Готовые сайты Яценко Виталий Викторович" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YcenkoVitalij" />
        <meta name="twitter:title" content="Готовые сайты по доступным ценам" />
        <meta name="twitter:description" content="Закажите готовый сайт у нас! Предлагаем: визитки, блоги, лендинги, корпоративные сайты и сайты для бизнесменов." />
        <meta name="twitter:image" content="https://prodazhas.site/icons/favicon.png" />
        <meta name="google-site-verification" content="1IBkZQxzHq6yI5of7cqIYcvhUR2JY8y3GVcwn5LzW_c" />
        {/* Другие метаданные */}
        <meta name="googlebot" content="index, follow" />
        <meta name="yandex-verification" content="25c34e2b353080af" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Russian" />
        <meta name="coverage" content="Worldwide" />

        <link rel="icon" type="image/x-icon" href="/icons/favicon.png" />
        <link rel="canonical" href="https://prodazhas.site/" />
      </head>
    
      <body>
      <div className={styles.page}>
        <Sidenav/>
        <Photosite/>
        {children}
        <Social/>
        </div>
      </body>
    </html>
  );
}
