import React, {Component} from 'react'
import {createOrder, moveOrderToFarm} from '../../actions/marketActions'
import {connect} from 'react-redux'
import Order from '../Order'
import './Market.css'

let id = 0

const getId = () => {
  id += 1
  return id
}

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
]

const getNewOrder = () => {
  const timeOptions = { 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' 
  }
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleString('ru-RU', timeOptions)
  }
}

export class Market extends Component {
  get orderList() {
    return this.props.orders.map((order) => (
      <Order key={order.id} name={order.name} price={order.price} createdAt={order.createdAt} />
    ))
  }

  createNewOrder = () => {
    const order = getNewOrder()
    this.props.createOrder(order)
  }

  sendToFarm = () => {
    const {orders, moveOrderToFarm} = this.props
    if(orders.length === 0) return false
    moveOrderToFarm(orders[orders.length - 1])
  }

  render() {
    const {orders} = this.props

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={this.createNewOrder}>Создать заказ</button>
        <button onClick={this.sendToFarm} disabled={orders.length === 0}>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.orderList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  orders: state.market.orders 
})

const mapDispatchToProps = dispatch => ({
  createOrder: (payload) => dispatch(createOrder(payload)),
  moveOrderToFarm: (payload) => dispatch(moveOrderToFarm(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Market);
