import React from "react";
import { useState } from 'react';
import { ReactComponent as Bag } from './../images/bag.svg'
import { ReactComponent as HeartFill } from './../images/heart-fill.svg'
import { ReactComponent as HeartIcon } from './../images/heart.svg'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

const Product = (props) => {
    const {Products,addToStared,stared,addToCart,handleInfo} = props;
    const [topic,setTopic]=useState('all')
    const findTopicLen=(s)=>{
        var count=0;
        Products.forEach((item)=>{
            if(item.category===s){
                count++;
            }
        })
        return count
    }
    const [search,setSearch] = useState('')
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className="container">
            <div className="row"><h4></h4></div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <h3 className="product-title text-white">現正熱播</h3>
                    <form className="form-inline my-2 my-lg-0" style={{float:'right'}}>
                        <input className="form-control mr-sm-2" type="search" value={search}
                         onChange={handleSearch} placeholder="Search" aria-label="Search" style={{width:'150px'}}/>
                        <button className="btn btn-outline-light btn-sm" 
                         onClick={()=>{setTopic('search')}} type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                <div className="list-group" id="list-tab" role="tablist">
                    <a className={`list-group-item list-group-item-dark ${topic==='all'&& 'active'}`} 
                     data-toggle="list" href="#list-home" role="tab" onClick={()=>setTopic('all')}>
                         全部
                        <span className="badge badge-warning badge-pill" style={{float:'right',fontSize:'15px'}}>{Products.length}</span>
                    </a>
                    <a className={`list-group-item list-group-item-dark ${topic==='動作冒險'&& 'active'}`}
                     data-toggle="list" href="#list-profile" role="tab" onClick={()=>setTopic('動作冒險')}>
                         動作冒險
                         <span className="badge badge-warning badge-pill" 
                          style={{float:'right',fontSize:'15px'}}>{findTopicLen('動作冒險')}</span>
                    </a>
                    <a className={`list-group-item list-group-item-dark ${topic==='愛情'&& 'active'}`} 
                     data-toggle="list" href="#list-messages" role="tab" onClick={()=>setTopic('愛情')}>
                         愛情
                         <span className="badge badge-warning badge-pill" 
                          style={{float:'right',fontSize:'15px'}}>{findTopicLen('愛情')}</span>
                    </a>
                    <a className={`list-group-item list-group-item-dark ${topic==='驚悚'&& 'active'}`} 
                     data-toggle="list" href="#list-settings" role="tab" onClick={()=>setTopic('驚悚')}>
                         驚悚
                         <span className="badge badge-warning badge-pill" 
                          style={{float:'right',fontSize:'15px'}}>{findTopicLen('驚悚')}</span>
                    </a>
                    <a className={`list-group-item list-group-item-dark ${topic==='動畫'&& 'active'}`} 
                     data-toggle="list" href="#list-settings" role="tab" onClick={()=>setTopic('動畫')}>
                         動畫
                         <span className="badge badge-warning badge-pill" 
                          style={{float:'right',fontSize:'15px'}}>{findTopicLen('動畫')}</span>
                    </a>
                </div>
                </div>
                <div className="col-md-10">
                    <Row>
                        {Products.map((product)=>{ if(topic==='all'){ return(
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
                                    <Link to="/checkmore">
                                        <Button outline color="light" size='sm'
                                         onClick={()=>{handleInfo(product.id)}}>
                                            查看內容
                                        </Button>
                                    </Link>
                                    <Button outline color="light" size='sm' style={{float:'right'}}
                                     onClick={()=>{addToCart(product.id)}}>
                                        <Bag style={{marginRight:'3px',marginBottom:'3px'}}/>加入購物車
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>)}
                        else if(product.category===topic){return(
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
                                        <Link to="/checkmore">
                                            <Button outline color="light" size='sm'
                                            onClick={()=>{handleInfo(product.id)}}>
                                                查看內容
                                            </Button>
                                        </Link>
                                        <Button outline color="light" size='sm' style={{float:'right'}}
                                         onClick={()=>{addToCart(product.id)}}>
                                         <Bag style={{marginRight:'3px',marginBottom:'3px'}}/>加入購物車
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>)}
                        else if( topic==='search' && product.title.includes(search)){return(
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
                                        <Link to="/checkmore">
                                            <Button outline color="light" size='sm'
                                            onClick={()=>{handleInfo(product.id)}}>
                                                查看內容
                                            </Button>
                                        </Link>
                                        <Button outline color="light" size='sm' style={{float:'right'}}
                                         onClick={()=>{addToCart(product.id)}}>
                                         <Bag style={{marginRight:'3px',marginBottom:'3px'}}/>加入購物車
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>)}
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Product;
