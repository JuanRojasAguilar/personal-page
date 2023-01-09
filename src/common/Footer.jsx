import Image from 'next/image';
import linkedinIcon from '@icons/linkedin-icon.svg';
import githubIcon from '@icons/github-icon.svg';
import Styles from '@styles/Footer.module.scss';

export default function Footer() {
    return(
        <footer className={Styles.footer}>
            <a href='https://github.com/JuanRojasAguilar'>
                <Image src={githubIcon} alt='Github logo' className={Styles.logo} />
            </a>
            <a href='https://www.linkedin.com/in/juandrojasa/'>
                <Image src={linkedinIcon} alt='Linkedin logo' className={Styles.logo}/>
            </a>
        </footer>
    )
}