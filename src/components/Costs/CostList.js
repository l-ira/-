import './CostList.css'
import CostItem from './CostItem'

const CostList = (props) => {
    if (props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>No spendings this year</h2>
    }

    const keyIdLS = Object.keys(localStorage)

    const costFromLS = keyIdLS.map((id) => {
        const costLS = JSON.parse(localStorage.getItem(id))
        return { id, ...costLS }
    })

    return (<ul className='cost-list' >
        {
            props.costs.map((cost) => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ))
        }
        {
            costFromLS.map(({ id, date, description, amount }) => (
                <CostItem
                    key={id}
                    date={date}
                    description={description}
                    amount={amount}
                />
            ))
        }
    </ul >)

}

export default CostList