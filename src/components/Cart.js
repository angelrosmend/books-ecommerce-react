import React, { Component, Fragment } from 'react'
import Title from '../components/Title'
import ListaInfo from './cart/ListaInfo'
import CarroVacio from './cart/CarroVacio'
import { ProductConsumer } from '../context/Context'
import ListaCompras from './cart/ListaCompras'
import Total from './cart/Total'



export class Cart extends Component {
 render() {
  return (
   <section>
        <ProductConsumer>
         {value =>{
          const {cart} = value;
          if (cart.length > 0) {
           return(
            <Fragment>
               <Title title="Tu lista de compras" />
               <ListaInfo/>
               <ListaCompras value={value}/>
               <Total value={value} />
            </Fragment>
           );
          }else{
           return (
            <CarroVacio />
           )
          }
         }}
        </ProductConsumer>
   </section>
  )
 }
}

export default Cart
