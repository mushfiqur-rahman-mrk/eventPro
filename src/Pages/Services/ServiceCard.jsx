 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { id,title, image, price, description } = data;
  return (
    <>
      <div className="card bg-base-100 shadow-xl border" data-aos="fade-up"
     data-aos-duration="3000">
        <figure>
          <img className="w-full h-80" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description?.slice(0, 100)}</p>
          <p>{price}</p>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`}>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-md font-semibold transition duration-150 text-white hover:bg-red-500 hover:text-black">
              Show Detail
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.object,
};

export default ServiceCard;
