import {MOVE_ORDER_TO_FARM} from '../actions/marketTypes';
import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';

const initState = {
    orders: []
}

export default function (state = initState, action) {
    let newState, orders

    switch (action.type) {
        case (MOVE_ORDER_TO_FARM):
            orders = [ ...state.orders, action.payload ]
            
            newState = { ...state, orders }
            break

        case (MOVE_ORDER_TO_CUSTOMER):
            orders = state.orders.filter(order => {
                return order.id !== action.payload.id
            })

            newState = { ...state, orders }
            break

        default: 
            newState = { ...state }
    }

    return newState
}
