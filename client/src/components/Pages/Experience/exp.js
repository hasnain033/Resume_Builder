import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add, erase, update } from "./expstore";
import { useSelector, useDispatch } from "react-redux";

function Exp(props) {
  const dispatch = useDispatch();
  const work = useSelector((state) => state.work);
  console.log(work);
  const [edit, setEdit] = useState(false);
  const [exp, setExp] = useState({
    id: "",
    title: "",
    employer: "",
    city: "",
    country: "",
    from: "",
    to: "",
    about: "",
  });
  function clear() {
    setExp({
      id: "",
      title: "",
      employer: "",
      city: "",
      country: "",
      from: "",
      to: "",
      about: "",
    });
  }
  return (
    <>
      <div className="container mt-5">
        <section className="dark-grey-text">
          <div className="card mb-4">
            <div className="card-body">
              <h1 style={{ textDecoration: "underline", textAlign: "center" }}>
                Experience
              </h1>
              <div className="row justify-content-center">
                <div className="col-lg-10 mb-4">
                  <div className="tab-content pt-4">
                    <div
                      className="tab-pane fade in show active"
                      id="tabCheckoutBilling123"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label for="title" className="">
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            value={exp.title}
                            className="form-control"
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label for="employer" className="">
                            Employer
                          </label>
                          <input
                            type="text"
                            id="employer"
                            className="form-control"
                            value={exp.employer}
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                employer: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label for="city" className="">
                            city
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="form-control"
                            value={exp.city}
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                city: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label for="country" className="">
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            className="form-control"
                            value={exp.country}
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                country: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="row" style={{ alignItems: "end" }}>
                        <div className="col-md-5 mb-4">
                          <label for="start">Start Date</label>
                          <input
                            type="date"
                            id="start"
                            className="form-control datepicker"
                            value={exp.from}
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                from: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-md-5 mb-4">
                          <label for="end">End Date</label>
                          <input
                            type="date"
                            id="end"
                            className="form-control datepicker"
                            value={exp.to}
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                to: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div
                          className="col-md-1 mb-4"
                          style={{
                            display: "flex",
                            columnGap: "8px",
                          }}
                        >
                          <input
                            type="checkbox"
                            id="present"
                            // className="form-control"
                            value="Present"
                            onChange={(e) =>
                              setExp({
                                ...exp,
                                to: e.target.value,
                              })
                            }
                          />
                          <label for="present">Present</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <label for="exp" className="">
                            Task
                          </label>
                          <textarea
                            id="exp"
                            className="form-control"
                            rows="4"
                            value={exp.about}
                            onChange={(e) =>
                              setExp({ ...exp, about: e.target.value })
                            }
                          ></textarea>
                        </div>
                      </div>

                      <hr />

                      <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-3 mb-4">
                          <Link to="/resume/contact">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                            >
                              Back
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                          {edit ? (
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={(e) => {
                                dispatch(update(exp));
                                clear();
                                setEdit(!edit);
                              }}
                            >
                              Update
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={(e) => {
                                dispatch(add(exp));
                                clear();
                              }}
                            >
                              Add
                            </button>
                          )}
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                          <Link to="/resume/edu">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                            >
                              Next Step
                            </button>
                          </Link>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-4">
            <div className="row d-flex">
              {work.length > 0 &&
                work.map((element) => {
                  return (
                    <div className=" card card-body p-4 mb-2 col col-xl-10">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h3 className="mb-2">{element.title}</h3>
                          <p className="small mb-0">
                            <span className="me-2">{element.employer}</span>
                            <span>
                              ({element.city}, {element.country})
                            </span>
                          </p>
                          <p className="small mb-0">
                            <span className="me-2">
                              ({element.from} to {element.to})
                            </span>
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-floating  me-4"
                            onClick={() => {
                              setExp(element);
                              setEdit(!edit);
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-floating"
                            onClick={() => dispatch(erase(element))}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div
                        className="d-flex justify-content-start align-items-center"
                        style={{ wordBreak: "break-all" }}
                      >
                        <p className="mb-0 text-captilize">{element.about}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Exp;
