export default {
    app: {
      head: {
        title: 'Готовые сайты по доступным ценам | Сайт-визитка, Блог, Лендинг, Корпоративный сайт',
        htmlAttrs: {
          lang: 'ru'  
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Продажа готовых сайтов: сайт-визитка, блог, лендинг, корпоративный сайт и сайты для бизнесменов. Гарантируем индивидуальный подход и учёт всех пожеланий клиентов.' },
          { name: 'keywords', content: 'готовые сайты, сайт-визитка, лендинг, корпоративный сайт, сайт для бизнеса, сайт для юристов, сайт для адвокатов, сайт для стоматологов, недорогие сайты, сайт поздравления' },
          { name: 'author', content: 'Яценко Виталий Викторович' },
          { name: 'robots', content: 'index, follow' },
          { httpEquiv: 'Content-Language', content: 'ru' },
          
          { name: 'geo.region', content: 'UA' },  
          { name: 'geo.placename', content: 'Украина' },
          { meta:'geo.region', content:'BY' }, 
          { name: 'geo.placename', content: 'Беларусь' },
          { meta:'geo.region', content:'GE' }, 
          { name: 'geo.placename', content: 'Грузия' },
          { name: 'geo.region', content: 'RU' },  
          { name: 'geo.placename', content: 'Россия' },
        //   { name: 'geo.position', content: '50.4501;30.5234' },
           // Пример: геопозиция Киева
        //   { name: 'ICBM', content: '50.4501, 30.5234' }, 
          // Альтернатива для geo.position
          
          { property: 'og:title', content: 'Готовые сайты по доступным ценам | Визитки, блоги, лендинги' },
          { property: 'og:description', content: 'Продажа готовых сайтов для бизнеса и личных нужд: корпоративные сайты, сайты-визитки, блоги и лендинги. Гибкий подход к каждому клиенту. Яценко Виталий Викторович.' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://ready-site.vercel.app' },  
          { property: 'og:image', content: 'https://https://ready-site.vercel.app/icons/favicon.png' },  
          { property: 'og:locale', content: 'ru_RU' },  
          { property: 'og:site_name', content: 'Готовые сайты Яценко Виталий Викторович' },
  
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@YcenkoVitalij' },
          { name: 'twitter:title', content: 'Готовые сайты по доступным ценам' },
          { name: 'twitter:description', content: 'Закажите готовый сайт у нас! Предлагаем: визитки, блоги, лендинги, корпоративные сайты и сайты для бизнесменов.' },
          { name: 'twitter:image', content:  'https://https://ready-site.vercel.app/icons/favicon.png' },
  
          { name: 'rating', content: 'general' },  
          { name: 'distribution', content: 'global' },  
          { name: 'revisit-after', content: '7 days' }, 
          { name: 'language', content: 'Russian' },  
          { name: 'coverage', content: 'Worldwide' },  
          
          { name: 'googlebot', content: 'index, follow' }, 
          { name: 'yandex-verification', content: '7dd821d029628bf5' }, 
          { name: 'google-site-verification', content:'4qgwXJ8Au_8pw0iLmju1ouUbwas1O66ZhwYkgnAWzkA' }, 
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.png' },
          { rel: 'canonical', href: 'https://https://ready-site.vercel.app' } 
        ]
      }
    }
  };
  