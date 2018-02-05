import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Budget.css'

class Budget extends Component {
    render() {
        const { deliveryExpanse, profit, sellers, farmExpanse, total } = this.props

        return(
            <div className="budget">
                <h2>Бюджет</h2>
                <p>
                    Всего получено денег: 
                    <span className="t-profit">{profit}</span>
                </p>
                <p>
                    Расходы продавцов: 
                    <span className="t-sellers">{-1 * sellers}</span>
                </p>
                <p>
                    Расходы на ферме: 
                    <span className="t-farm">{-1 *farmExpanse}</span>
                </p>
                <p>
                    Расходы на доставку: 
                    <span className="t-delivery">{-1 *deliveryExpanse}</span>
                </p>
                <p>
                    Итого: 
                    <span className="t-total">{total}</span>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {deliveryExpanse, profit, sellers, farmExpanse, total} = state.budget

    return {deliveryExpanse, profit, sellers, farmExpanse, total}
}

export default connect(mapStateToProps)(Budget)