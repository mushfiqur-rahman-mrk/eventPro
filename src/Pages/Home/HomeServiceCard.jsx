import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const HomeServiceCard = ({data}) => {

  const{title,id,image,price,description}=data 
  console.log(data);
  return (
    <>
      <div className="card bg-base-100 shadow-xl border">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description?.slice(0,100)}</p>
          <p>{price}</p>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`}>
            <button className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-500 hover:text-black">
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