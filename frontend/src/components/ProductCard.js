import style from './ProductCard.module.css'

function ProductCard(props) {
  return (
    <div className={style.product_card}>
      <div className={style.top_container}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={style.bottom_container}></div>
    </div>
  )
}

export default ProductCard
