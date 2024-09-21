'use client';
import styles from "./page.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const links = [
  { name: 'Home', href: '/' },
  {name: 'Резюме', href: '/dashboard/resume'},
  {name: 'Подробности', href: '/dashboard/details' },
  {name: 'Цены', href: '/dashboard/prices'},
  {name: 'Сайт в подарок', href: '/dashboard/present' },
  {name: 'Блог', href: '/dashboard/blog' },
  {name: 'Оставить заявку', href: '/dashboard/bid'},
  {name: '+38 (095) 394 51 57', href: 'tel:+380953945157' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (

     <div  className={styles.examples}>
      {links.map((link) => {
       const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}  
          > 
            <p  className={`${styles.example} ${isActive ? styles.active : ''}`}>{link.name}</p>
          </Link>
        );
      })}
      </div>
  );
}
