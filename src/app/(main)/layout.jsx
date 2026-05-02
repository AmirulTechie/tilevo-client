import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";


export default function MainLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    );
}