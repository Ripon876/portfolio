import ServiceItem from "./ServiceItem";
import "./Services.css";
import { services } from "./data";

function Services() {
  return (
    <div className="service" id="services" data-aos="fade-up">
      <div className="container text-center p-5">
        <div className="serviceInfo py-3">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum congue leo eget malesuada.
          </p>
        </div>
        <div className="services pt-5">
          <div className="justify-content-center row">
            {services?.map((service) => (
              <ServiceItem icon="fa-solid fa-code" service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
