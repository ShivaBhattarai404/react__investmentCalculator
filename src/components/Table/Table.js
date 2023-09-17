import React from 'react'

const Table = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.content.map(item => {
                        return <tr key={item.year}>
                            <td> {item.year} </td>
                            <td> {item.amount} </td>
                            <td> {item.interstThisYear} </td>
                            <td> {item.totalInterest} </td>
                            <td> {item.principal} </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table