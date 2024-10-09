import styles from "./bid.module.css";


export default function Bid() { 

  return (  
    <div className={`${styles.bid_container} scrollable-block`}>
      <h1>Сайты на любой вкус!</h1>
     <p>Извините, мы ещё работам над создание API для обработки данных на сервере, поэтому напишите нам пожалуйста на электронную почту   <a href="mailto:ytcenko1970@gmail.com">ytcenko1970@gmail.com</a> или позвоните по телефону<a href= 'tel:+380953945157' >+38 095 394 51 57</a>, или через социальные сети.<br/> Просим извинения за неудобства.</p>
         
    
      
    
     </div> 
  );
}