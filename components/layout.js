import Navbar from './navbar'
import Footer from './footer'

const Layout = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <div className={`w-full relative ${props.className ?? ''}`}>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Layout