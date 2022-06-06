import Navbar from './navbar'
import Footer from './footer'

function Layout({ children }) {

    return (
        <>
            <Navbar></Navbar>
            <div className='w-full relative'>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Layout