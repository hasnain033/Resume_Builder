import React from "react";
import c1 from "../../images/c1.PNG";
import c2 from "../../images/c2.PNG";
import c3 from "../../images/c3.PNG";
import c4 from "../../images/c4.PNG";

function Cover() {
  return (
    <div class="container mt-5">
      <section class="dark-grey-text text-center">
        <h3 class="font-weight-bold mb-4 pb-2">Cover</h3>

        <p class="grey-text w-responsive mx-auto mb-5">
          Click on a cover letter template, fill it online, and download in
          seconds. Build a professional cover letter in a few clicks.
        </p>

        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card collection-card z-depth-1-half">
              <div class="view zoom">
                <img src={c1} class="img-fluid" alt="" />
                <div class="stripe dark">
                  {/* <a>
                    <p>
                      Trousers
                      <i class="fas fa-angle-right"></i>
                    </p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card collection-card z-depth-1-half">
              <div class="view zoom">
                <img src={c2} class="img-fluid" alt="" />
                <div class="stripe light">
                  {/* <a>
                    <p>
                      Sweatshirt
                      <i class="fas fa-angle-right"></i>
                    </p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card collection-card z-depth-1-half">
              <div class="view zoom">
                <img src={c3} class="img-fluid" alt="" />
                <div class="stripe dark">
                  {/* <a>
                    <p>
                      Black hat
                      <i class="fas fa-angle-right"></i>
                    </p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card collection-card z-depth-1-half">
              <div class="view zoom">
                <img src={c4} class="img-fluid" alt="" />
                <div class="stripe light">
                  {/* <a>
                    <p>
                      Sweatshirt
                      <i class="fas fa-angle-right"></i>
                    </p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cover;
