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
  {name: '+38 (095) 394 51 57', href: '/dashboard/tel'  },
];

export default function NavLinks( isOpen ) {
  const pathname = usePathname();
  console.log(isOpen, 'isOpen');
  return (

    <div className={styles.examples_mobil} style={{ display: isOpen ? 'block' :  'none'}}>
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
