import React from 'react'

function Items() {
    return (
        <div className="items">
            <span>Name:Dagmar Lewis</span>
            <span>Email:dagmarlewis8@gmail.com</span>
            <span>Tracking#:43553565432</span>
            <span>Address:6043 KIMBERLY BLVD, SUITE E</span>
            <div className="changes">
                <button className="received">Received</button>
                <button className="intransit">Intransit</button>
                <button className="delivered">Delivered</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Items
