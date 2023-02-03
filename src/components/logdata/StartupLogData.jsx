import React from 'react'

const StartupLogData = ({ startupLogs }) => {
  return (
    <tbody className="table-border-bottom-0">
    {startupLogs.map((log) => {
        return (
            <tr key={log.id}>
                <td>
                    {log.addedUser}
                </td>
                <td>{log.addedBy}</td>
                <td>₱ {log.totalRebate}.00</td>
                <td>({log.totalStars}) ⭐</td>
                <td><span className="badge bg-label-primary me-1">{log.created_at}</span></td>
             </tr>
        )
    })}
    </tbody>
  )
}

export default StartupLogData