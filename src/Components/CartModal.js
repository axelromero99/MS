import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {FaShoppingCart} from 'react-icons/fa';

import './CartModal.css'

// Use of React Modal Library

const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: 'black',
    }
};

const CartModal = ({ cart, total}) => {

    const [addedOne, setAddedOne] = useState(false)

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
    setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal(){
    setIsOpen(false);
    }

    useEffect( () => {

        if (cart[0] !== undefined){
            
            setAddedOne(true)
            setTimeout(function(){  setAddedOne(false) }, 1000);

        }
    },[cart])

    return (
        <>
        <button className={addedOne ? "btnCart addedOne" : "btnCart" } onClick={openModal}><FaShoppingCart className="cartIcon" size={18}/>Cart</button>

        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="modalContent">
            <h2>CART</h2>
            {cart.map((element,key)=>{
                return(
                    <div key={key} className="itemCart">
                        <div>
                            <span>{element[0]} ||</span>
                            <span> ${element[1]}</span>
                        </div>

                    </div>
                    
                )
            })}
            <div className="totalCart">Total: ${total}</div>
            
            <button className="buttonCloseCart" onClick={closeModal}>Close</button>
            </div>
        </Modal>
        </>
    );
}

export default CartModal
