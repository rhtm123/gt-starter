import Footer from "./footer/Footer"
// import Header from "./Header"
import Navbar from "./navbar/Navbar"

function Layout({children}) {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout