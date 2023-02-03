import React from 'react'

function CheckRewardsUI() {
  return (
    <div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <h4 class="pb-1 mb-4">Star Rewards</h4>
            <div class="col-md-6 col-lg-8 mb-4">
                <div class="card mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="card-img card-img-left my-2 mx-2"
                                src={process.env.PUBLIC_URL + "/assets/img/activestar-v2.png"}
                                alt="" />
                        </div>
                        <div class="col-md-6 d-flex align-items-center">
                            <div class="card-body">
                                <h6 class="card-title">Available Balance:</h6>
                                <h6 class="card-title"><span class="badge bg-warning">
                                        10,000 Star Points
                                    </span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                    <h5 class="card-title text-warning"><strong>Catalogue:</strong></h5>
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/iphone.png"}
                                        alt="User" class="rounded" />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <small class="text-muted d-block mb-1">Pro Max</small>
                                        <h6 class="mb-0">Iphone 15</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <i class='bx bxs-star text-warning'></i>
                                        <h6 class="mb-0">60,000</h6>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <div class="d-flex flex-row-reverse">
                                <i class='bx bxs-plus-circle'></i> Redeem
                            </div>
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