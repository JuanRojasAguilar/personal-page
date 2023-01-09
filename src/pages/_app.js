import MainLayout from '@layout/MainLayout';
import localFont from '@next/font/local';
import '@styles/global.css';

const sofia = localFont({
    src: [
        {
            path: '../fonts/SofiaSans-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
        {
            path: '../fonts/SofiaSans-VariableFont_wght.ttf',
            style: 'normal',
        }
    ]
})

export default function MyApp({ Component, pageProps }) {
    return(
        <main className={sofia.className}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </main>
    )
}