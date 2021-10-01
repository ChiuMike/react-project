import React from "react";
import { useState } from 'react';
import { ReactComponent as FilmIcon } from './../images/film.svg'
import { ReactComponent as CartIcon } from './../images/cart3.svg'
import { ReactComponent as HeartIcon } from './../images/heart.svg'
import { ReactComponent as TrashIcon } from './../images/trash.svg'
import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { cart, cancelCart } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="">
            <div className="navbar navbar-expand-lg navbar-dark sticky-top"
                style={{ height: '100px' }}>
                <div className="container">
                    <div className="col-6">
                        <FilmIcon style={{
                            marginRight: '5px', marginBottom: '15px',
                            color: 'white', height: '30px', width: '30px'
                        }} />
                        <Link to="/" className="text-white"
                         style={{ fontSize: '30px', textShadow: 'white 0.2em 0.2em 0.2em' }}>
                             大平台電影院
                        </Link>
                        <Link to="/wishlist">
                            <button className="btn text-white"
                                style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <HeartIcon style={{ marginRight: '3px', color: 'white' }} />
                                我的片單
                            </button>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className="btn text-white" caret 
                             style={{background:'#1c1c1d',borderColor:'#1c1c1d'}}>
                                <CartIcon style={{marginRight:'0px',marginBottom: '8px',
                                 color:'white',height:'30px',width:'30px'}}/>
                            </DropdownToggle>
                            <DropdownMenu  className="bg-dark" style={{minWidth: '350px'}}>
                            {(cart.length > 0) && cart.map((item,index)=>{return(
                            <div className="text-white" key={item.id} style={{marginLeft:'10px',fontSize:'25px'}}>
                                <TrashIcon style={{marginBottom:'6px',marginRight:'5px',height:'25px',width:'25px'}} 
                                 onClick={()=>{cancelCart(item.id)}}/>
                                {item.title}    售價 : {item.price}
                            </div>
                            )})}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div >
            </div >
         </div >
    )
}
export default NavBar;