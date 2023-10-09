import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const HomeServiceCard = ({data}) => {

  const{title,id,image,price,description}=data 
  console.log(data);
  return (
    <>
      <div className="card bg-base-100 shadow-xl border" data-aos="fade-up"
     data-aos-duration="2000">
        <figure>
          <img 
            className="h-72 w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description?.slice(0,100)}</p>
          <p>Price- {price}</p>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`}>
            <button className="px-5 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl">
              Show Detail
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

HomeServiceCard.propTypes = {
  data: PropTypes.object
};

export default HomeServiceCard;