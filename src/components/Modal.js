import ReactDOM from 'react-dom'
import {useEffect, useRef} from "react";

const modal = document.getElementById('modal')

const el = document.createElement('div')

const styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000'
}

const Modal = () => {

    useEffect(() => {
        modal.appendChild(el)
        return () => {
            modal.removeChild(el)
        }
    }, [])

    return ReactDOM.createPortal(
        <div className='portal'>
            HELLOOOOOO
        </div>,
        el
    )
}

export default Modal
