import React from "react";

function ServiceItem({ icon, service }) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-10 p-3 p-lg-2">
      <div className="serviceItem">
        <div className="card py-3">
          <i className={icon}></i>
          <div className="card-body">
            <h5 className="card-title">{service?.title}</h5>

            <div>
              <ul className="text-left">
                {service?.texts?.map((text) => (
                  <li className="card-text">{text}</li>
                ))}
              </ul>
            </div>
            {/* <a href="#" className="btn seeMoreBtn">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
