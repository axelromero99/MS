import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Loading from './Loading';
import starFull from './Images/starFull.png';
import starEmpty from './Images/starEmpty.png';

import './GameList.css';

// Fetching with GET and axios library the data from the API
async function getGames () {
    try{
        const response = await axios({
            url: `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`,
            method: 'GET'
        })
        return response;
    } catch (e){
        console.log(e)
    }
}

// Principal function
const GameList = ( {parentCallback} ) => {
    
    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    

    useEffect( () => {
        async function loadGames() {
            const response = await getGames()
            
            if (response.status === 200){
                setGames(response.data)
                //console.log(response)
            }
            setIsLoading(false)
        }
        loadGames();

        // Callback for sending the data to the parent
        parentCallback(cart,total);
    }, [cart, total])

    // Function for showing the correct quantity of full/empty stars
    function steamStars(steamRatingPercent){

        steamRatingPercent = parseInt(steamRatingPercent/10/2);

        // Aclaration: this is a little bit hardcoded and i think that can be much better coded, but is the solution i reach in this time
        if (steamRatingPercent === 5){
            return <div className="star">
                <img src={starFull} alt="Full Star"></img>
                <img src={starFull} alt="Full Star"></img>
                <img src={starFull} alt="Full Star"></img>
                <img src={starFull} alt="Full Star"></img>
                <img src={starFull} alt="Full Star"></img>
            </div>
        } else if (steamRatingPercent >= 4){
            return <div className="star">
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
        </div>
        } else if (steamRatingPercent >= 3){
            return <div className="star">
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
        </div>
        } else if (steamRatingPercent >= 2){
            return <div className="star">
            <img src={starFull} alt="Full Star"></img>
            <img src={starFull} alt="Full Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
        </div>
        }else if (steamRatingPercent >= 1){
            return <div className="star">
            <img src={starFull} alt="Full Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
        </div>
        } else if (steamRatingPercent >= 0){
            return <div className="star">
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
            <img src={starEmpty} alt="Empty Star"></img>
        </div>
        }
    }

    if (isLoading){
        return <div className="isLoading"><Loading/></div>
    }
    
    return (
        <>
        {/* Searchbar */}
        <div className="searchBarContainer">
        <input className="searchBar" type="text" placeholder="Search..." onChange={(event) =>{ setSearchTerm(event.target.value);}}></input>
        </div>

        {/* First we filter the games from the API with the content of the searchbar, then we map all we have to show  */}
        <div className="gameCardContainer">
        {games.filter((val)=>{
            if (searchTerm === ""){
                return val
            } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val
            }
        }).map(({savings, thumb, title, steamRatingPercent, normalPrice, salePrice},key) => (
            <div className="gameCard" key={key}>
                <div>
                    <div>
                        <div id="circle" className="off">
                            <div>{parseInt(savings).toFixed(0)}%off</div>
                        </div>
                    </div>
                    <img className="thumb" src={thumb} alt={title}></img>
                </div>

                <div>
                <h3>{title}</h3>
                </div>

                <div className="steamReview">
                    <div>Steam Review</div>
                    <div>{steamStars(steamRatingPercent)}</div>
                </div>
                
                <div className="gameBtn">
                <button onClick={ () => { 
                    // Setting the state with the relevant data for the Cart
                    setCart(cart => [...cart, [[title],[salePrice]]]);
                    setTotal(total+parseFloat(salePrice));

                }}>
                    <span className="normalPrice"><strike>${normalPrice}</strike></span>
                    <span className="salePrice"> ${salePrice}</span>
                </button>
                </div>

            </div>
        ))}
        </div>
        </>
    )
}

export default GameList
