import React from 'react'

const GenealogyLogData = ({ userLogs }) => {
  return (
    <tbody className="table-border-bottom-0">
    {userLogs.map((log) => {
        return (
            <tr key={log.id}>
                <td>
                    {log.title}
                </td>
                <td>{log.description}</td>
                <td>₱ {log.totalRebate}.00</td>
                <td><span className="badge bg-label-primary me-1">{log.created_at}</span></td>
             </tr>
        )
    })}
    </tbody>
  )
}

export default GenealogyLogData