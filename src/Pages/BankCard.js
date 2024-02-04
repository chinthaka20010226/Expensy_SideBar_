import React from 'react';
import '../Style/BankCard.css';

import { FaIdCard } from "react-icons/fa";

function BankCard(){
    return(
        <section className="h-100">
            <div class="container py-1 px-md-5 h-100 bank-card-container">
                <div className='row'>
                    <div className='col px-md-5 bank-card-container-top-section'>
                        <h1 className='bank-card-container-top-section-title'>Bank</h1>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col px-md-5 bank-card-container-body-section">
                        <div class="card bank-card rounded-3 p-3">
                            <div className='w-100 d-flex justify-content-center align-items-center bank-card-container-body-section-image'>
                                <FaIdCard />
                            </div>
                            <div class="card-body px-md-5">
                                <h3 class="mb-2 pb-2 pb-md-0 mb-md-4 px-md-2">Bank Info</h3>

                                <form class="px-md-2 bank-card-container-body-section-inputs w-100">

                                    <div class="form-outline mb-2 bank-card-container-body-section-input">
                                        <input type="text" id="form3Example1q" class="form-control" />                                         
                                        <label class="form-label" for="form3Example1q">Card Holder's Name(it appears on card)</label>
                                    </div>

                                    <div class="form-outline mb-2 bank-card-container-body-section-input">
                                        <input type="text" class="form-control" id="exampleDatepicker1" />
                                        <label for="exampleDatepicker1" class="form-label">Card Number</label>
                                    </div>

                                    <div class="form-outline mb-2 bank-card-container-body-section-input">
                                        <input type="text" class="form-control" id="exampleDatepicker1" />
                                        <label for="exampleDatepicker1" class="form-label">Security Code</label>
                                    </div>

                                    <div class="form-outline mb-2 bank-card-container-body-section-input">
                                        <input type="text" class="form-control" id="exampleDatepicker1" />
                                        <label for="exampleDatepicker1" class="form-label">Expire Date</label>
                                    </div>

                                    <div className='bank-card-submit d-flex justify-content-center w-100'>
                                        <button type="submit" className="btn bank-card-submit-btn d-flex justify-content-center btn-lg mb-1">Submit</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BankCard;