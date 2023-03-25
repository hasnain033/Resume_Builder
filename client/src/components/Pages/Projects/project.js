import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add, erase, update } from "./projectStore";
import { useSelector, useDispatch } from "react-redux";

function Project(props) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);
  console.log(projects);
  const [edit, setEdit] = useState(false);
  const [project, setProject] = useState({
    title: "",
    about: "",
  });
  function clear() {
    setProject({
      title: "",
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
                Projects
              </h1>
              <div className="row justify-content-center">
                <div className="col-lg-10 mb-4">
                  <div className="tab-content pt-4">
                    <div
                      className="tab-pane fade in show active"
                      id="tabCheckoutBilling123"
                      role="tabpanel"
                    >
                      <div className="row justify-content-center">
                        <div
                          className="col-md-6 mb-4"
                          style={{ textAlign: "center" }}
                        >
                          <label for="title" className="text-align-center">
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            value={project.title}
                            className="form-control"
                            onChange={(e) =>
                              setProject({
                                ...project,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div
                          className="col-md-12 mb-4"
                          style={{ textAlign: "center" }}
                        >
                          <label for="exp" className="">
                            Details
                          </label>
                          <textarea
                            id="exp"
                            className="form-control"
                            rows="4"
                            value={project.about}
                            onChange={(e) =>
                              setProject({
                                ...project,
                                about: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>

                        <hr />

                        <div className="row justify-content-between">
                          <div className="col-lg-3 col-md-3 mb-4">
                            <Link to="/resume/edu">
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
                                  dispatch(update(project));
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
                                  dispatch(add(project));
                                  clear();
                                }}
                              >
                                Add
                              </button>
                            )}
                          </div>
                          <div className="col-lg-3 col-md-3 mb-4">
                            <Link to="/resume/skill">
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
          </div>
          <div className="container mb-4">
            <div className="row d-flex">
              {projects.length > 0 &&
                projects.map((project) => {
                  return (
                    <div className=" card card-body p-4 mb-2 col col-xl-10">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h3 className="mb-2">{project.title}</h3>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-floating  me-4"
                            onClick={() => {
                              setProject(project);
                              setEdit(!edit);
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-floating"
                            onClick={() => dispatch(erase(project))}
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
                        <p className="mb-0 text-captilize">{project.about}</p>
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

export default Project;
