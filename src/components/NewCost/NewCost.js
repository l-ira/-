import React, { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'


function NewCost(props) {
    const [isFromVisible, setIsFormVisible] = useState(false)
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return <div className='new-cost'>
        {!isFromVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {isFromVisible && <CostForm onSaveCostData={saveCostDataHandler}
            onCancel={cancelCostHandler} />}
    </div>
}

export default NewCost