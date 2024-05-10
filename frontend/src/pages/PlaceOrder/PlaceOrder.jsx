// import React from 'react'
import { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
export const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list,cartItems, url} = useContext(StoreContext);
  
  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value =  event.target.value;
    setData(data =>({...data,[name]:value}))
  }
  
  
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email address' />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
          <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
