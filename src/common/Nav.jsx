import Styles from '@styles/Nav.module.scss'

export default function Nav() {
    return(
        <nav className={Styles.navBody}>
            <div>
                Image
            </div>
            <div className={Styles.navList}>
                <li>
                    <a>
                        About Me
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
                <li>
                    <a>
                        Resume
                    </a>
                </li>
            </div>
        </nav>
    )
}