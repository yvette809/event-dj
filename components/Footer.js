import Link from 'next/Link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>copyright &copy; Dj Events 2021</p>
            <p>
               <Link href="/about">
                   About This project
               </Link>
            </p>
            
        </footer>
    )
}
