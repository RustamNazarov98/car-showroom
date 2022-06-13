import styles from './CarsItem.module.scss';
import {Link} from "react-router-dom";
import {ICar} from "../../models/ICar";

const CarsItem = ({
                      name,
                      description,
                      id,
                      year='2022',
                      mileage,
                      price,
                      production='Japan',
                      image,
                      code='JPN'
                  }:ICar) => {
    const {
        cars_item,
        image_wrapper,
        city
    } = styles

    return(
        <Link to={`/cars/${id}`}>
            <div className={cars_item}>
                <div className={image_wrapper}>
                    <img src={image} alt={name}/>
                </div>
                <h3>{name}</h3>
                <p className={city}>{production}</p>
                <p>{year} - {price} km</p>
                <p>{price},000 <span>{code}</span></p>
            </div>
        </Link>
    );
}
export default CarsItem;
