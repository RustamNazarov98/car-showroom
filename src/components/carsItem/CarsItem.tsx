import {CardItemProps} from './CardItem.props';
import styles from './CardItem.module.scss';
import {Link} from "react-router-dom";

const CarsItem = ({
                      title,
                      description,
                      id,
                      year,
                      mileage,
                      price,
                      production,
                      preview,
                      code
                  }:CardItemProps) => {

    const {
        cars_item,
        image_wrapper,
        city
    } = styles

    return(
        <Link to={`/cars/${id}`}>
            <div className={cars_item}>
                <div className={image_wrapper}>
                    <img src={preview} alt={title}/>
                </div>
                <h3>{title}</h3>
                <p className={city}>{production}</p>
                <p>{year} - {mileage} km</p>
                <p>{price},000 <span>{code}</span></p>
            </div>
        </Link>
    );
}
export default CarsItem;
