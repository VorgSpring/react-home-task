import React, { Component as ReactComponent } from 'react'
import './Step.css'

class Step extends ReactComponent {
    get className() {
        const {isSelected, isClickable} = this.props
        let className = 'step'

        if(isSelected) className +=' step-selected'
        if(isClickable) className +=' step-clickable'

        return className
    }

    handleClick = () => {
        const {number, isClickable, onClick} = this.props

        if(!isClickable) return false
        onClick(number)
    }

    render() {
        const {number, children} = this.props
        return (
            <div className={this.className} onClick={this.handleClick}>
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        )
    }
}

export default Step