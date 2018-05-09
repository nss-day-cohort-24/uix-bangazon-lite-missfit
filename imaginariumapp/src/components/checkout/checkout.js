import React from 'react';
// import PropTypes from 'prop-types';
// import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default function Checkout () {

    return(
        <main>
        {/* <div class="row">
            <div class="col-sm-12">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Shipping</div>
                </div>
            </div>
        </div> */}
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header">
                        Choose Shipping
                    </div>
                    <div class="card-body">
                        <form>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        1234 Red Road, Somewhere, TN 37677
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label class="form-check-label" for="exampleRadios2">
                                        5678 Blue St, Somewhere Else, TN 37299
                                    </label>
                                </div>
                        </form>
                    </div>
                    <div class="card-body border-top">
                        <strong>Add Another Address</strong>
                        <form>
                                <div class="form-group">
                                  <label for="inputAddress">Address</label>
                                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="form-group">
                                  <label for="inputAddress2">Address 2</label>
                                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="form-row">
                                  <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                  </div>
                                  <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                      <option selected>Choose...</option>
                                      <option>...</option>
                                    </select>
                                </div>
                                  <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                      Use as my billing address as well.
                                    </label>
                                  </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save and Continue</button>
                              </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};