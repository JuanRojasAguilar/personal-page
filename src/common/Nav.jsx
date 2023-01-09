import Styles from '@styles/Nav.module.scss'

export default function Nav() {
    return(
        <header className={Styles.header}>
            <span className={Styles.name}>Juan Diego <strong>Rojas Aguilar</strong></span>
            <div>
                <ul className={Styles.navList}>
                    <li className={Styles.home}>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Resume</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}