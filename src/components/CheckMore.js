import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Button} from 'reactstrap';
import { ReactComponent as Bag } from './../images/bag.svg'
import { ReactComponent as HeartFill } from './../images/heart-fill.svg'
import { ReactComponent as HeartIcon } from './../images/heart.svg'

const CheckMore = (props)=>{
    const {info,cart,addToCart,addToStared,stared}=props;
    console.log("stare=",stared)
    return(
        <div> 
            <NavBar cart={cart} stared={stared}/>
            <div className="container">
                <div className="row"><h4></h4></div>
                <div className="row">
                    <div className="col-md-5">
                        <img className="ml-auto" src={info.imageUrl}/>
                    </div>
                    <div className="col-md-5">
                        <h1 className="display-4" style={{color: 'white'}}>{info.title}</h1>
                        <h3 style={{color: 'white'}}>售價: {info.price} 元</h3>
                        <h3 style={{color: 'white'}}>類型: <div className="d-inline-block border px-2 py-1">{info.category}</div></h3>
                        <div className="mb-3" style={{color: 'white'}}>{info.content}</div>
                        <Button outline color="light" size='sm' style={{float:'left',marginRight:'10px'}}
                         onClick={()=>{addToStared(info.id)}}>
                         {(stared.includes(info))?<HeartFill style={{color:'red'}}/>:<HeartIcon style={{color:'white'}}/>}
                         </Button>
                        <Button outline color="light" size='sm' style={{float:'left'}}
                         onClick={()=>{addToCart(info.id)}}>
                         <Bag style={{marginRight:'3px',marginBottom:'3px'}}/>加入購物車
                        </Button>
                    </div>
                </div>
               {/* {(stared.length===0)&&<div className="custom-br"></div>} */}
            </div>
            <Footer/>
        </div>
    )
}
export default CheckMore;