import React from 'react'

const EncashLogData = ({ encashlogs }) => {
  return (
    <tbody className="table-border-bottom-0">
    {encashlogs.map((log) => {
        return (
            <tr key={log.logID}>
                <td>
                    {log.title}
                </td>
                <td>{log.description}</td>
                <td>₱ {log.encashment}.00</td>
                <td>₱ {log.rebateBalance}.00</td>
                <td>{log.claim === "0" ? <span className="badge bg-label-warning me-1">Not Yet</span> : <span className="badge bg-label-success me-1">Claimed</span> }</td>
                <td><span className="badge bg-label-primary me-1">{log.created_at}</span></td>
             </tr>
        )
    })}
    </tbody>
  )
}

export default EncashLogData