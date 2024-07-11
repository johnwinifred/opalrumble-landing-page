import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Layout = ({ children }) => {
  return (
    <>
      <section className='flex flex-col justify-between px-12 py-4 '>
        <Navbar />
        <div className="">
        <div className="">{children}</div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Layout;