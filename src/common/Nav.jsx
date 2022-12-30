import Styles from '@styles/Nav.module.scss'

export default function Nav() {
    return(
        <header className={Styles.header}>
            <div className={Styles.headerTop}>
                <div>
                    <a className={Styles.logo}>
                        <span className={Styles.logoName}>Juan Diego <strong>Rojas Aguilar</strong></span>
                        <span className={Styles.logoCv}>Download <strong>CV</strong></span>
                    </a>
                </div>
                <div>
                    <ul className={Styles.navList}>
                        <li className={Styles.home}>
                            <a>Home</a>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Contact</a>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a>Resume</a>
                            <a>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}