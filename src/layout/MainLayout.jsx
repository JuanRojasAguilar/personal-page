import Nav from '@common/Nav';
import Footer from '@common/Footer';

export default function MainLayout({ children }) {
    return(
        <>
            <div>
                    <Nav />
                <main>
                    <div>{ children }</div>
                </main>
                    <Footer />
            </div>
        </>
    )
}