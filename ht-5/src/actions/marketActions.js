import {MOVE_ORDER_TO_FARM, CREATE_ORDER} from './marketTypes';

export const createOrder = payload => ({
    payload,
    type: CREATE_ORDER
})

export const moveOrderToFarm = payload => ({
    payload,
    type: MOVE_ORDER_TO_FARM
})