'use client';

import { useState } from 'react';
import styles from "./bid.module.css";

export default function Bid() {
  const [description, setDescription] = useState('');
  // const [responseMessage, setResponseMessage] = useState('');
  // const [showResponseMessage, setShowResponseMessage] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch('/api/submitRequest', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ description }),
  //   });

  //   const data = await res.json();
    

  //   if (res.ok) {
  //     setResponseMessage('Заявка успешно отправлена!');
  //     setShowResponseMessage(true);
  //     setTimeout(function() {
  //       setShowResponseMessage(false)
  //     }, 10000);
  //   } else {
  //     setResponseMessage(`Ошибка: ${data.error}`);
  //   }

  //   setDescription('');
  // };

  return (
    <div className={`${styles.bid_container} scrollable-block`}>
       <h1>Сайты с прекрасным соотношением цена-качество</h1>
       <p>Оставьте свои пожелания и  контакты, и мы свяжемся с вами для консультации по выбору готового сайта, а также расскажем о возможностях его настройки под ваш бизнес!</p>
       <p>Или просто оставте ваш отзыв о сайте и наших услугах, ваше мнение очень важно для нас!</p>
     {/* <p>Извините, мы ещё работам над создание API для обработки данных на сервере, поэтому напишите нам пожалуйста на электронную почту   <a href="mailto:ytcenko1970@gmail.com">ytcenko1970@gmail.com</a> или позвоните по телефону<a href= 'tel:+380953945157' >+38 095 394 51 57</a>, или через социальные сети.<br/> Просим извинения за неудобства.</p> */}
    {/* <form onSubmit={handleSubmit} className={styles.feedbackform }  name="contact" method="POST" data-netlify="true">
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="ВВЕДИТЕ ОПИСАНИЕ ВАШЕЙ  ЗАЯВКИ"
        required
        className={`${styles.feedback__form} ${styles.inputField} `}
      />
      <button type="submit" className={styles.button__form }>Отправить заявку</button>
      {showResponseMessage ?    
      <p>   
      {responseMessage}</p> : ''}
    </form> */}
    <form name="contact" method="POST" data-netlify="true" className={styles.feedbackform }  >
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="ВВЕДИТЕ ОПИСАНИЕ ВАШЕЙ  ЗАЯВКИ"
        required
        className={`${styles.feedback__form} ${styles.inputField} `}
      />
      <button type="submit" className={styles.button__form }>Отправить заявку</button>
      {/* {showResponseMessage ?    
      <p>   
      {responseMessage}</p> : ''} */}
    </form>
    </div> 
  );
}



// import styles from "./bid.module.css";


// export default function Bid() { 

//   return (  
//     <div className={`${styles.bid_container} scrollable-block`}>
//       <h1>Сайты на любой вкус!</h1>
//      <p>Извините, мы ещё работам над создание API для обработки данных на сервере, поэтому напишите нам пожалуйста на электронную почту   <a href="mailto:ytcenko1970@gmail.com">ytcenko1970@gmail.com</a> или позвоните по телефону<a href= 'tel:+380953945157' >+38 095 394 51 57</a>, или через социальные сети.<br/> Просим извинения за неудобства.</p>
         
    
      
    
//      </div> 
//   );
// }