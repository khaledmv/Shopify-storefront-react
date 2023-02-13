import React, { Component } from 'react';
import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain:process.env.REACT_APP_DOMAIN,
    storefrontAccessToken:process.env.REACT_APP_TOKEN
  });


const ShopContext = React.createContext();

export class ShopProvider extends Component {
  state= {
    product:{},
    products:[],
    checkout:{},
    isCartOpen:false,
    isMenuOpen:false

  }

  componentDidMount(){
    if(localStorage.checkout_id){
        this.fetchCheckout(localStorage.checkout_id)
    }else{
      this.createChekout();
    }
  }


  createChekout = async() => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({checkout});
  }
  fetchCheckout = async(checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({checkout})
    });
  }
  addItemtoCheckout = async() => {}
  removeLineItem = async(lineItemIdsRemove) => {}

  fetchAllProducts = async() => {
    const products = await client.product.fetchAll();
      this.setState({products});
  }

  fetchProductByHandle =  async(handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({product});
  }
  
  closeCart = () =>{}
  openCart = () => {}
  closeMenu = () => {}
  openMenu = () => {}

  render() {
    return (
      <ShopContext.Provider value={{
        ...this.state,
        fetchAllProducts: this.fetchAllProducts,
        fetchProductByHandle:this.fetchProductByHandle,
        addItemtoCheckout:this.addItemtoCheckout,
        removeLineItem:this.removeLineItem,
        closeCart:this.closeCart,
        openCart:this.openCart,
        closeMenu:this.closeMenu,
        openMenu:this.openMenu

      }}>
        { this.props.children }
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext}
export default ShopProvider