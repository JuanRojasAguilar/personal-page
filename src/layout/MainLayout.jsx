import Nav from '@common/Nav';

export default function MainLayout({ children }) {
    return(
        <>
            <div>
                <header>
                    <Nav />
                </header>
                <main>
                    <div>{ children }</div>
                </main>
            </div>
        </>
    )
}