import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className={style.product_card}>
      <div className={style.top_container}>
        <div className={style.product_link}>
          <div className={style.product_images_container}>
            <Link to="/collections/product">
              <img src={props.image} alt={props.name} />
              <img src={props.image_2} alt={props.name} />
            </Link>
          </div>
          <span>NEW</span>
        </div>
        <div className={style.quick_add_container}>
          <span>QUICK ADD +</span>
          <div className={style.size_btn_container}></div>
        </div>
      </div>
      <div className={style.bottom_container}>
        <div className={style.product_info}>
          <h3>{props.name}</h3>
          <div className={style.product_color_info}>
            <span>{props.color}</span>
            <span>{props.numbColor} Colors</span>
          </div>
          <div className={style.product_price_info}>
            <span>${props.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
