import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./detailstore";

function Details() {
  const details = useSelector((state) => state.details);
  console.log(details);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-5">
        <section className="dark-grey-text">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                  <div className="tab-content pt-4">
                    <div
                      className="tab-pane fade in show active"
                      id="tabCheckoutBilling123"
                      role="tabpanel"
                    >
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="firstName" className="">
                              First name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              value={details.firstname}
                              onChange={(e) =>
                                dispatch(add({ firstname: e.target.value }))
                              }
                            />
                          </div>

                          <div className="col-md-6 mb-4">
                            <label htmlFor="lastName" className="">
                              Last name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              value={details.lastname}
                              onChange={(e) =>
                                dispatch(add({ lastname: e.target.value }))
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 mb-4">
                          <label htmlFor="profession">Profession</label>
                          <input
                            type="text"
                            className="form-control"
                            id="profession"
                            placeholder="e.g Accountant"
                            required
                            value={details.profession}
                            onChange={(e) =>
                              dispatch(add({ profession: e.target.value }))
                            }
                          />
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="country">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              id="country"
                              placeholder="e.g Pakistan"
                              required
                              value={details.country}
                              onChange={(e) =>
                                dispatch(add({ country: e.target.value }))
                              }
                            />
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              className="form-control"
                              id="state"
                              placeholder="e.g Islamabad"
                              required
                              value={details.state}
                              onChange={(e) =>
                                dispatch(add({ state: e.target.value }))
                              }
                            />
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="zip">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder="e.g 44000"
                              required
                              value={details.zip}
                              onChange={(e) =>
                                dispatch(add({ zip: e.target.value }))
                              }
                            />
                            <div className="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="country">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="e.g +921234567"
                              required
                              value={details.phone}
                              onChange={(e) =>
                                dispatch(add({ phone: e.target.value }))
                              }
                            />
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="state">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="e.g email@gmail.com"
                              required
                              value={details.email}
                              onChange={(e) =>
                                dispatch(add({ email: e.target.value }))
                              }
                            />
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="zip">Linkedin</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder="e.g linkedin.com/in/alandoe"
                              required
                              value={details.linkedin}
                              onChange={(e) =>
                                dispatch(add({ linkedin: e.target.value }))
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <label htmlFor="object" className="">
                            Summary
                          </label>
                          <textarea
                            id="object"
                            className="form-control"
                            rows="12"
                            value={details.summary}
                            onChange={(e) =>
                              dispatch(add({ summary: e.target.value }))
                            }
                          ></textarea>
                        </div>

                        <hr />

                        <div className="row justify-content-end">
                          <div className="col-lg-3 col-md-3 mb-4">
                            <Link to="/resume/exp">
                              <button className="btn btn-primary btn-lg btn-block">
                                Next Step
                              </button>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* section-2    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Details;
