import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'


const Modal = () => {
    const dispatch = useDispatch();


    const removeAll = () => {
        dispatch(clearCart())
        dispatch(closeModal())
    }

    const cancelModal = () => {
        dispatch(closeModal())
    }

    return (
        <aside className='modal-container'>
            <div className="modal">
                <h4>remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button type='button' className="btn confirm-btn" onClick={removeAll}>
                        confirm
                    </button>
                    <button type='button' className='btn clear-btn' onClick={cancelModal}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal
