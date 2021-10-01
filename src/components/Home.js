import Footer from "./Footer";
import NavBar from "./NavBar";
import CarouselSlide from "./CarouselSlide";
import Product from "./Product";

const Home=(props)=>{
    const {products,addToStared,stared,addToCart,cart,cancelCart,handleInfo}=props;
    return (
        <div> 
          <NavBar cart={cart} cancelCart={cancelCart}/>
            <CarouselSlide/>
            <Product Products={products} addToStared={addToStared}
             stared={stared} addToCart={addToCart} handleInfo={handleInfo}/>
          <Footer/> 
        </div>
      );
}
export default Home;