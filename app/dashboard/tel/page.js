import styles from "./tel.module.css";


export default function Tel() { 

  return (  
   <div className={`${styles.tel_container} scrollable-block`}>
        <h1>Продажа готовых сайтов</h1>
     <p>Свяжитесь с нами по телефону <a href= 'tel:+380953945157' >+38 095 394 51 57</a> Будем очень рады звонку, уверены что мы всегда сможем договорится и вы останетесь довольны нашим продуктом!</p>
         
    
      
    
     </div> 
  );
}