import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes'

const initState = {
    orders: []
}

export default function (state = initState, action) {
    let newState, orders

    switch (action.type) {
        case (CREATE_ORDER):
            orders = [ ...state.orders, action.payload ]
            newState = { ...state, orders }
            break

        case (MOVE_ORDER_TO_FARM):
            orders = state.orders.filter(order => order.id !== action.payload.id)
            newState = { ...state, orders }
            break

        default: 
            newState = { ...state }
    }

    return newState
}