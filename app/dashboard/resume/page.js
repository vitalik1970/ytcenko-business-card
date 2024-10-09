import Image from "next/image";
import styles from './styles.module.css';

export default function Resume() { 

  return (
    <div className={`${styles.resume} scrollable-block`}>
            <h1>Сайты на любой вкус!</h1>
           
         
      <div 
          style={{
            backgroundImage: `url('/resume.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // width: '100%',      
            maxWidth: '700px',
            height: 'auto',    
            aspectRatio: '7 / 5'
          }}
        />

        </div>
    
  );
}