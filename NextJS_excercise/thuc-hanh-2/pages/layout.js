import Link from 'next/link';
import styles from '../styles/layout.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout ({children}) {
    return (
        <>
        <div>
            <ul className='list-group'>
                <li className='list-group-item list-group-item-action'><Link href='/home'>Home</Link></li>
                <li className='list-group-item list-group-item-action'><Link href='/blog'>Blog</Link></li>
                <li className='list-group-item list-group-item-action'><Link href='/about'>About</Link></li>
                <li className='list-group-item list-group-item-action'><Link href='/'>Log out</Link></li>
            </ul>
        </div>
        <div>{children}</div>
        </>
    )
}
