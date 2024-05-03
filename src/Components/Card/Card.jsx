import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1   g-4 bg-primary d-flex justify-content-center align-items-center mt-5">
        {data.map((element, index) => {
          return (
            
              <div key={index}>
                <div className="col mt-1 mb-4 ">
                  <div className="card">
                    <div className="card-header ">
                      <div className="card-title text-center  mt-3 version ">
                        {element.title}
                      </div>
                      <div className="card-title text-center fs-1 fw-semibold">
                        {element.price}
                      </div>
                      <hr />
                      <div className="card-body">
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.choosen}></i> {element.user}
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.choosen}></i> {element.storage}
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.choosen}></i>{" "}
                          {element.pulicProjects}
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.choosen}></i> {element.access}
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.xmark} style={{color:"grey"}}></i>{" "}<span className={element.textDim}>{element.privateProjects}</span>
                          
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.xmark} style={{color:"grey"}}></i><span className={element.textDim}> {element.support}</span>
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.tick}></i><i className={element.xmark} style={{color:"grey"}}></i><span className={element.textDim}> {element.free}</span> 
                        </p>
                        <p>
                          <i className={element.check}></i><i className={element.xmark} style={{color:"grey"}}></i><i className={element.cross} style={{color:"grey"}}></i><span className={element.dullText}><span className={element.textDim}> {element.reports}</span></span>
                        </p>

                        <button
                          className="btn fw-bold col-12"
                          type="button"
                          data-bs-toggle="button"
                        ><small>BUTTON</small>
                       
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Card;
