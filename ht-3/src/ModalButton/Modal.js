import { Component as ReactComponent } from 'react'
import ReactDOM from 'react-dom'

class Modal extends ReactComponent {
    static displayName = 'Modal'
    
    render() {
        return (
            ReactDOM.createPortal(this.props.children, this.props.domNode)
        )
    }
}

export default Modal