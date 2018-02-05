import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes'
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes'

const initState = {
    deliveryExpanse: 0,
    profit: 0,
    sellers: 0,
    farmExpanse: 0,
    total: 0
}

export default function (state = initState, action) {
    let newState

    switch (action.type) {
        case (MOVE_ORDER_TO_CUSTOMER):
            state.deliveryExpanse += 20

            newState = { ...state }
            break

        case (CREATE_ORDER):
            state.profit += action.payload.price
            state.sellers += 20

            newState = { ...state }
            break

        case (MOVE_ORDER_TO_FARM):
            state.farmExpanse += 100
            
            newState = { ...state }
            break

        default:
            newState = { ...state }
    }

    newState.total = state.profit - state.deliveryExpanse - state.sellers - state.farmExpanse

    return newState
}
