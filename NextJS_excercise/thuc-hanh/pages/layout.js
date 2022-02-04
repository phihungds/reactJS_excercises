import Link from 'next/link';
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <div class={styles.menu}>
                <ul >
                    <li class={styles.menuItem}>
                        <Link href='/home'>
                            Home
                        </Link>
                    </li>
                    <li class={styles.menuItem}>
                        <Link href='/about'>
                            About Us
                        </Link>
                    </li>
                    <li class={styles.menuItem}>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li class={styles.menuItem}>
                        <Link href='/'>
                            Log out
                        </Link>
                    </li>
                </ul>

            </div>
            <div>
                {children}
            </div>
        </>
    )
}