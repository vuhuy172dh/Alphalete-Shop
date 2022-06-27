import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className={style.product_card}>
      <div className={style.top_container}>
        <Link to="/collections/product">
          <div className={style.product_images_container}>
            <img src={props.image} alt={props.name} />
          </div>
        </Link>
      </div>
      <div className={style.bottom_container}></div>
    </div>
  )
}

export default ProductCard
