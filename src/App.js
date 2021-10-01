import Home from "./components/Home"
import WishList from "./components/WishList"
import CheckMore from "./components/CheckMore"
import './App.css';
import { Route } from "react-router";
import React from "react";
import { useEffect,useState } from 'react';
import axios from 'axios';
const APIPATH = 'https://vue-course-api.hexschool.io'
const CUSTOMPATH = 'mikechiu8512'

function App() {
  const [stared,setStared]=useState([])
  const addToStared=(id)=>{
    var target=products.filter((item)=>{
        return item.id===id;
    })
    var cancel=products.findIndex((item)=>{
      return item.id===id;
    })
    setStared((oldarr)=>{
       if(oldarr.includes(target[0])){
          oldarr.splice(cancel,1) 
          return ([...oldarr])
       }else{
          return ([...oldarr,target[0]])
       }
    })
  }
  const [products, setProducts] = useState([{
    category:'',
    content:'',
    description:'',
    id:'',
    imageUrl:'',
    is_enabled:'',
    num:'',
    origin_price:'',
    price:'',
    title:'',
    unit:0,
  }])
  const getProducts = () => {
    const api = `${APIPATH}/api/${CUSTOMPATH}/products?page=${1}`;
    axios.get(api).then((response) => {
        if (response.data.success) {
            setProducts(response.data.products)
        }
    });
  }
  const [info, setInfo] = useState([{
    category:'',
    content:'',
    description:'',
    id:'',
    imageUrl:'',
    is_enabled:'',
    num:'',
    origin_price:'',
    price:'',
    title:'',
    unit:0,
  }])
  const handleInfo=(id)=>{
    var target=products.filter((item)=>{
      return item.id===id;
    })
    setInfo(target[0]);
  }

  const [cart,setCart]=useState([])
  const cancelCart=(id)=>{
    var target=cart.findIndex((item)=>{
        return item.id===id;
      })
      setCart((oldarr)=>{
        oldarr.splice(target,1)
        return ([...oldarr])
      })
  }
  const addToCart=(id)=>{
    var target=products.filter((item)=>{
        return item.id===id;
    })
    setCart((oldarr)=>{
       if(oldarr.includes(target[0])){
          // oldarr.splice(cancel,1)
          window.alert('已加入購物車')
          return ([...oldarr])
       }else{
          return ([...oldarr,target[0]])
       }
    })  
  }
  useEffect(() => { getProducts() }, [])
  return (
    <div className="App">
      <Route path="/" exact 
       render={()=>{return( <Home products={products} 
       addToStared={addToStared} stared={stared} addToCart={addToCart} cart={cart} cancelCart={cancelCart} handleInfo={handleInfo}/>)}} />
      <Route path="/wishlist" render={()=>{return( <WishList addToStared={addToStared} stared={stared} cart={cart}/> )}} />
      <Route path="/checkmore" render={()=>{return( <CheckMore info={info} 
      cart={cart} addToCart={addToCart} addToStared={addToStared} stared={stared}/> )}} />
    </div>
  );
}

export default App;
