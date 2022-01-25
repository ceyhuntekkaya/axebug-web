import React from 'react';

export default function Login() {
    return <React.Fragment>
        <div className="container">
            <div className="row pt-4">
                <h3>AXE BUG COMICS</h3>
            </div>
  

                <div class="card mt-5" style={{width: 600}}>
                    <div class="card-header">
                        LOGIN
                    </div>
                    <div class="card-body"  style={{backgroundColor: "black"}}>
                    <form>
                        <div class="form-group row mb-3">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                            <div class="col-sm-10">
                                <input type="text" readonly class="form-control" id="staticEmail" placeholder="Enter your username" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Enter your password" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-dark">Start Advancure</a>
  </div>
                </div>

        </div>
    </React.Fragment>
}
