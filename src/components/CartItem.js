import { ChevronDown, ChevronUp } from '../icons'
import { decrease, increase, removeItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({ id, img, title, price, amount }) {

    const dispatch = useDispatch()

    const delItem = () => {
        dispatch(removeItem(id))
    }

    const increaseItem = () => {
        dispatch(increase({ id }))
    }

    const decreaseItem = () => {
        if (amount === 1) {
            dispatch(removeItem(id))
            return
        }
        dispatch(decrease({ id }))
    }

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className='remove-btn' onClick={delItem}>Remove</button>

            </div>
            <div>
                <button className='amount-btn' onClick={increaseItem}>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={decreaseItem}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
