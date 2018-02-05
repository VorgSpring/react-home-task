import React, {Component} from 'react'
import {connect} from 'react-redux'
import {moveOrderToCustomer} from '../../actions/farmActions'
import Order from '../Order'
import './Farm.css'

class Farm extends Component {
    get orderList() {
        return this.props.orders.map(order => (
            <Order key={order.id} name={order.name} price={order.price} createdAt={order.createdAt} />
        ))
    }

    sendToCustomer = () => {
        const {orders, moveOrderToCustomer} = this.props
        if(orders.length === 0) return false
        moveOrderToCustomer(orders[orders.length - 1])
    }

    render() {
        const {orders} = this.props

        return(
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button disabled={orders.length === 0} onClick={this.sendToCustomer}>Отправить урожай клиенту</button>
                <div className="order-list">
                    {this.orderList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ orders: state.farm.orders })

const mapDispatchToProps = dispatch => ({
    moveOrderToCustomer: (payload) => dispatch(moveOrderToCustomer(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Farm);