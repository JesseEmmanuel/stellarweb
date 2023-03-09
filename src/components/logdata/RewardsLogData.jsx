import React from 'react'

const RewardsLogData = ({ rewardslogs }) => {
    return (
        <tbody className="table-border-bottom-0">
        {rewardslogs.map((reward) => {
            return (
                <tr key={reward.rewardsID}>
                    <td>
                        {reward.rewardsItem}
                    </td>
                    <td>{reward.redeemStatus === "0" ? <span className="badge bg-label-warning me-1">Not Yet</span> : <span className="badge bg-label-success me-1">Claimed</span> }</td>
                    <td><span className="badge bg-label-primary me-1">{reward.created_at}</span></td>
                 </tr>
            )
        })}
        </tbody>
      )
}

export default RewardsLogData