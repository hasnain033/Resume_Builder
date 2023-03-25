import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addSkill, eraseSkill } from "./skillstore";
import { addLang, eraseLang } from "./languageStore";
import { addInt, eraseInt } from "./interestStore";
import { useSelector, useDispatch } from "react-redux";
import "./skills.css";

function Skills() {
  const skills = useSelector((state) => state.skill);
  const languages = useSelector((state) => state.language);
  const interests = useSelector((state) => state.interest);
  const dispatch = useDispatch();
  const [oneSkill, setOneSkill] = useState({
    skill: "",
    level: "",
  });
  const [oneLang, setOneLang] = useState("");
  const [oneInt, setOneInt] = useState("");
  function clearSkill() {
    setOneSkill({
      skill: "",
      level: "",
    });
  }
  function clearLang() {
    setOneLang("");
  }
  function clearInt() {
    setOneInt("");
  }

  // const getResume = (id) => {
  //   const template = await getResumeApi(id);
  //   console.log(id);
  //   FinalResume(template);
  //   navigate("/finalresume", { state: template });
  //   navigate(`/finalresume`);
  // };

  return (
    <>
      <div class="container">
        <section class="dark-grey-text">
          <div class="card mt-5 mb-5">
            <div class="card-body">
              {/* skills */}
              <h4 style={{ textAlign: "center" }}>Skills</h4>
              <div class="row justify-content-center">
                <div class="card mt-3 mb-3">
                  <div class="card-body">
                    <ul class="list-group list-group-horizontal justify-content-center flex-wrap">
                      {skills.length > 0 &&
                        skills.map((skill) => {
                          return (
                            <li class="list-group-item m-2 border border-1">
                              <h6 class="mb-0 d-inline me-1">{skill.skill}</h6>
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-sm btn-floating"
                                onClick={() => dispatch(eraseSkill(skill))}
                              >
                                <i class="fas fa-minus"></i>
                              </button>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-md-6 mb-3" style={{ display: "flex" }}>
                    <input
                      type="text"
                      id="uni"
                      class="form-control w-100 h-100"
                      style={{ marginRight: "0.5rem" }}
                      value={oneSkill.skill}
                      placeholder="e.g skill"
                      onChange={(e) =>
                        setOneSkill({ ...oneSkill, skill: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      id="uni"
                      class="form-control w-100 h-100"
                      value={oneSkill.level}
                      placeholder="e.g level (max-100)"
                      onChange={(e) =>
                        setOneSkill({ ...oneSkill, level: e.target.value })
                      }
                    />
                  </div>
                  <div class="col-md-2 mb-3">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={() => {
                        dispatch(addSkill(oneSkill));
                        clearSkill();
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              {/* languages */}
              <h4 style={{ textAlign: "center" }}>Languages</h4>
              <div class="row justify-content-center">
                <div class="card mt-3 mb-3">
                  <div class="card-body">
                    <ul class="list-group list-group-horizontal justify-content-center flex-wrap">
                      {languages.length > 0 &&
                        languages.map((language) => {
                          return (
                            <li class="list-group-item m-2 border border-1">
                              <h6 class="mb-0 d-inline me-1">{language}</h6>
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-sm btn-floating"
                                onClick={() => dispatch(eraseLang(language))}
                              >
                                <i class="fas fa-minus"></i>
                              </button>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-md-6 mb-3">
                    <input
                      type="text"
                      id="uni"
                      class="form-control w-100 h-100"
                      value={oneLang}
                      onChange={(e) => setOneLang(e.target.value)}
                    />
                  </div>
                  <div class="col-md-2 mb-3">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={() => {
                        dispatch(addLang(oneLang));
                        clearLang();
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              {/* Interest */}

              <h4 style={{ textAlign: "center" }}>Interests</h4>
              <div class="row justify-content-center">
                <div class="card mt-3 mb-3">
                  <div class="card-body">
                    <ul class="list-group list-group-horizontal justify-content-center flex-wrap">
                      {interests.length > 0 &&
                        interests.map((interest) => {
                          return (
                            <li class="list-group-item m-2 border border-1">
                              <h6 class="mb-0 d-inline me-1">{interest}</h6>
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-sm btn-floating"
                                onClick={() => dispatch(eraseInt(interest))}
                              >
                                <i class="fas fa-minus"></i>
                              </button>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-md-6 mb-3">
                    <input
                      type="text"
                      id="uni"
                      class="form-control w-100 h-100"
                      value={oneInt}
                      onChange={(e) => setOneInt(e.target.value)}
                    />
                  </div>
                  <div class="col-md-2 mb-3">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={() => {
                        dispatch(addInt(oneInt));
                        clearInt();
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}

              <hr />
              <div class="row justify-content-between">
                <div class="col-lg-3 col-md-3 mb-3">
                  <Link to="/resume/proj">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Back
                    </button>
                  </Link>
                </div>
                <div class="col-lg-3 col-md-3 mb-3">
                  <Link to="/resume/finalresume">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Next Step
                    </button>
                  </Link>
                </div>
                {/* <div class="col-lg-3 col-md-3 mb-4">
                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Add
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
