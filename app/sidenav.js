import styles from "./page.module.css";
import Navlinks from "@/app/nav-links";

export default function Sidenav() { 

  return (  
     <nav className={styles.nav}>
        <div className={styles.nav__hader}>
          <h2>Ytcenko.Studio</h2>
        </div>   
        <Navlinks/>
        <div className={styles.nav__footer}>
        <a href="mailto:ytcenko1970@gmail.com">ytcenko1970@gmail.com</a>
        </div>
        
     </nav> 
  );
}

