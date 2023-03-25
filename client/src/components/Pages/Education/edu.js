import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add, erase, update } from "./edustore";
import { useSelector, useDispatch } from "react-redux";

function Edu() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);
  console.log(education);
  const [edit, setEdit] = useState(false);
  const [edu, setEdu] = useState({
    id: "",
    university: "",
    location: "",
    degree: "",
    field: "",
    start: "",
    end: "",
  });
  function clear() {
    setEdu({
      id: "",
      university: "",
      location: "",
      degree: "",
      field: "",
      start: "",
      end: "",
    });
  }
  return (
    <>
      <div class="container mt-5">
        <section class="dark-grey-text">
          <div class="card mb-4">
            <div class="card-body">
              <h1 style={{ textDecoration: "underline", textAlign: "center" }}>
                Education
              </h1>
              <div class="row justify-content-center">
                <div class="col-lg-10 mb-4">
                  <div class="tab-content pt-4">
                    <div
                      class="tab-pane fade in show active"
                      id="tabCheckoutBilling123"
                      role="tabpanel"
                    >
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <label for="uni" class="">
                            University
                          </label>
                          <input
                            type="text"
                            id="uni"
                            class="form-control"
                            value={edu.university}
                            onChange={(e) =>
                              setEdu({ ...edu, university: e.target.value })
                            }
                          />
                        </div>

                        <div class="col-md-6 mb-4">
                          <label for="location" class="">
                            Location
                          </label>
                          <input
                            type="text"
                            id="location"
                            class="form-control"
                            value={edu.location}
                            onChange={(e) =>
                              setEdu({ ...edu, location: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <label for="country" class="">
                            Degree
                          </label>
                          <select
                            class="mdb-select form-control"
                            id="degree"
                            value={edu.degree}
                            onChange={(e) =>
                              setEdu({ ...edu, degree: e.target.value })
                            }
                          >
                            <option value="" disabled>
                              Choose here
                            </option>
                            <option selected="selected" value="BSc">
                              Bachelor
                            </option>
                            <option value="MS">Master</option>
                            <option value="Ph.D">Ph.D</option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-4">
                          <label for="study" class="">
                            Field of Study
                          </label>
                          <input
                            type="text"
                            id="study"
                            class="form-control"
                            value={edu.field}
                            onChange={(e) =>
                              setEdu({ ...edu, field: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <label for="start">Start Date</label>
                          <input
                            type="date"
                            id="start"
                            class="form-control datepicker"
                            value={edu.start}
                            onChange={(e) =>
                              setEdu({ ...edu, start: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-6 mb-4">
                          <label for="end">End Date</label>
                          <input
                            type="date"
                            id="end"
                            class="form-control datepicker"
                            value={edu.end}
                            onChange={(e) =>
                              setEdu({ ...edu, end: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <hr />

                      <div class="row justify-content-between">
                        <div class="col-lg-3 col-md-3 mb-4">
                          <Link to="/resume/exp">
                            <button
                              class="btn btn-primary btn-lg btn-block"
                              type="submit"
                            >
                              Back
                            </button>
                          </Link>
                        </div>
                        <div class="col-lg-3 col-md-3 mb-4">
                          {edit ? (
                            <button
                              class="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={(e) => {
                                dispatch(update(edu));
                                clear();
                                setEdit(!edit);
                              }}
                            >
                              Update
                            </button>
                          ) : (
                            <button
                              class="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={() => {
                                dispatch(add(edu));
                                clear();
                              }}
                            >
                              Add
                            </button>
                          )}
                        </div>
                        <div class="col-lg-3 col-md-3 mb-4">
                          <Link to="/resume/proj">
                            <button
                              class="btn btn-primary btn-lg btn-block"
                              type="submit"
                            >
                              Next Step
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mb-4">
            <div class="row d-flex">
              {education.length > 0 &&
                education.map((element) => {
                  return (
                    <div class=" card card-body p-3 mb-2 col col-xl-10">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h3
                            class="mb-1"
                            style={{ fontSize: "calc(1rem + 0.6vw)" }}
                          >
                            {element.degree}({element.field})
                          </h3>
                          <p class="small mb-0">
                            <span>{element.univeristy}</span>
                            <span>({element.location})</span>
                          </p>
                          <p class="small mb-0">
                            <span class="me-2">
                              ({element.start}---{element.end})
                            </span>
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-floating me-4"
                            onClick={() => {
                              setEdu(element);
                              setEdit(!edit);
                            }}
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-floating"
                            onClick={() => dispatch(erase(element))}
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
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

export default Edu;
