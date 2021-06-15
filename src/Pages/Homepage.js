import React, {useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import GameList  from '../Components/GameList';
import Slide from '../Components/Slide';

const Homepage = () => {

    //States and callback for getting the information from the GameList component to the navbar, where is placed the Cart component

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);

    function callback (cartSended, totalSended) {

        setCart(cartSended)
        setTotal(totalSended)

    }

    return (
        <div>
            <Navbar cartNavbar={cart} totalNavbar={total}/>
            <Slide/>
            <GameList parentCallback={callback}/>
            <Footer/>
        </div>
    )
}

export default Homepage
