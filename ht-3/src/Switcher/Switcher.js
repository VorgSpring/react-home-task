import React, { Component as ReactComponent } from 'react'
import './Switcher.css'

class Switcher extends ReactComponent {
    static displayName = 'Switcher'
    
    state = {
        selectedChild: 0
    }

    get listComponent() {
        return this.props.children.map((item, i) => (
            <li
                key={Date.now().valueOf() + i}
                onClick={this.handleChangeChild}
                className="component-list__name"
                data-id={i}
            >
                {item.type.displayName || item.type.name}
            </li>
        ))
    }

    handleChangeChild = (event) => {
        this.setState({
            selectedChild: parseInt(event.target.dataset.id, 10)
        })
    }

    render() {
        const {children} = this.props
        const {selectedChild} = this.state
        return(
            <div className="switcher">
                <nav>
                    <ul className="component-list">
                        {this.listComponent}
                    </ul>
                </nav>
                <hr />
                <div className="component-wrapper">
                    {children[selectedChild]}
                </div>
            </div>
        )
    }
}

export default Switcher