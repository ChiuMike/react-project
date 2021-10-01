import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Bag } from './../images/bag.svg'
import { ReactComponent as HeartFill } from './../images/heart-fill.svg'
import { ReactComponent as HeartIcon } from './../images/heart.svg'

const WishList=(props)=>{
    const {addToStared,stared,cart}=props
    console.log("CART=",cart)
    return(
        <div> 
            <NavBar cart={cart}/>
            <div className="container">
                <div className="row"><h4></h4></div>
                <div className="row" style={{marginLeft:'2px'}}>
                    <h1 className="product-title text-white">收藏片單</h1>
                </div>    
                <div className="row">
                    <div className="col-md-12">
                        <Row>
                            {stared.map((product)=>{return(
                            <Col sm={6} md={4} className="mb-3" key={product.id}>
                                <Card className="custom-card" 
                                    style={{width:'18rem',backgroundColor: '#343a40', borderColor: '#343a40'}}>
                                    <CardImg width="100%" src={product.imageUrl}/>
                                    <CardBody>
                                        <CardTitle className="text-white" style={{fontSize:'20px'}}>
                                            {product.title}
                                            <button className="btn" style={{float:'right'}}
                                             onClick={()=>{addToStared(product.id)}}>
                                             {(stared.includes(product))?<HeartFill style={{color:'red'}}/>:<HeartIcon style={{color:'white'}}/>}
                                            </button>
                                        </CardTitle>
                                        <CardSubtitle>
                                            <h4><Badge color="dark">售價：{product.price}</Badge></h4>
                                        </CardSubtitle>
                                        <CardText></CardText>
                                        <Link to="/wishlist">
                                            <Button outline color="light" size='sm' style={{float:'right'}} >
                                                <Bag style={{marginRight:'3px',marginBottom:'3px'}}/>加入購物車
                                            </Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>)
                            })}
                        </Row>
                    </div>
                </div>
               {(stared.length===0)&&<div className="custom-br"></div>}
            </div>
            <Footer/>
        </div>
    )
}
export default WishList;