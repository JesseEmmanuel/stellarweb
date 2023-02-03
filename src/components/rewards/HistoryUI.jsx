import React from 'react'

function HistoryUI() {
return (
<div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
        <h5 class="py-3 my-4">Wallet History</h5>

        <div class="row">
            <div class="col-xl-12">
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-home" aria-controls="navs-top-home" aria-selected="true">
                                Startup Savings
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-profile" aria-controls="navs-top-profile"
                                aria-selected="false">
                                Great Savings
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                            <div class="table-responsive text-nowrap">
                                <table class="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Description</th>
                                            <th>Ref Number</th>
                                            <th>IN</th>
                                            <th>OUT</th>
                                            <th>Tax</th>
                                            <th>Fee</th>
                                            <th>Net Amount</th>
                                            <th>Wallet Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Referral Bonus Level 1
                                            </td>
                                            <td>984729</td>
                                            <td>PHP 50</td>
                                            <td><span class="badge bg-label-info me-1">PHP 0</span></td>
                                            <td>PHP 50</td>
                                            <td>PHP 50</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Rebates Level 2
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Encashment
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="navs-top-profile" role="tabpanel">
                            <div class="table-responsive text-nowrap">
                                <table class="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Description</th>
                                            <th>Referrence Number</th>
                                            <th>IN</th>
                                            <th>OUT</th>
                                            <th>Tax</th>
                                            <th>Fee</th>
                                            <th>Net Amount</th>
                                            <th>Wallet Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Referral Bonus Level 1
                                            </td>
                                            <td>984729</td>
                                            <td>PHP 50</td>
                                            <td><span class="badge bg-label-info me-1">PHP 0</span></td>
                                            <td>PHP 50</td>
                                            <td>PHP 50</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Rebates Level 2
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>01/01/2023 (2:00pm)</strong>
                                            </td>
                                            <td>
                                                Encashment
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default HistoryUI