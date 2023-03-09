import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/Auth'
import axios from 'axios'

function CheckRewardsUI() {

  const [ rewards, setRewards ] = useState([])
  const { token } = useAuth();
  const dataFetchedRef = useRef(false); 
  
  const getRewards = async () => {
        const apiRewards = await axios.get(`${process.env.REACT_APP_API_URL}/getRewards`, {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        setRewards(apiRewards.data.rewards)
  }
  
  useEffect(() => {
    if(dataFetchedRef.current) 
    {
        return;
    }
    dataFetchedRef.current = true;
    getRewards();
})
  

  return (
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row">
                <h4 class="pb-1 mb-4">List of Rewards</h4>
                <div class="col-md-6 col-lg-8 mb-4">
                    <div class="card mb-3">
                        <div class="card-body">
                        <h5 class="card-title text-warning"><strong>Rewards To Claim:</strong></h5>
                            <ul class="p-0 m-0">
                                {rewards.map((reward) => {
                                    return(
                                        <li class="d-flex mb-2 pb-0" key={reward.rewardsID}>
                                            {/* <div class="avatar flex-shrink-0 me-3">
                                                <img className="card-img" id='sa-avatar' src={process.env.PUBLIC_URL+"/assets/img/"+reward.rewardsImage+".png"} 
                                                height={"100%"} width={"150%"} alt="" />
                                            </div> */}
                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div class="me-2">
                                                {/* <small class="text-muted d-block mb-1">Pro Max</small> */}
                                                <h6 class="mb-0">{reward.rewardsItem}</h6>
                                            </div>
                                            <div class="user-progress d-flex align-items-center gap-1">
                                                <span className="badge bg-label-primary me-1">{reward.created_at}</span>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })}
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title text-warning"><strong>NOTE</strong></h5>
                            <p class="card-text">
                                <i class='bx bxs-info-circle'></i> Wallet is <strong>LOCKED</strong> each cycle beginning.
                            </p>
                            <p class="card-text">
                                <i class='bx bxs-info-circle'></i> <strong>AUTO</strong> deducts when funds reach amount for
                                allocation, then unlocks.
                            </p>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title text-info"><strong>REMINDER</strong></h5>
                            <p class="card-text">
                                Less <strong>10%</strong> Tax Php 5,000.00
                            </p>
                            <p class="card-text">
                                Less <strong>Php 100.00</strong> Transaction Fee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckRewardsUI