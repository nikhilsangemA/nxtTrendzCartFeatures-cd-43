import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachAdd => {
        total += eachAdd.price * eachAdd.quantity
      })
      return (
        <>
          <div className="checkOut-total">
            <h3>Order Total: {total}</h3>
            <p>{cartList.length} Items in cart</p>
            <div>
              <button type="button" className="btn-checkout">
                Checkout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
