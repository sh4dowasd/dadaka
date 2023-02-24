import './sets.scss'

function Sets() {
  const set = require('../../images/set.png')

  const createSet = (text: string, price: string, img: string) => {
    return (
      <div className='set'>
        <div className='set-info'>
          <h2>{text}</h2>
          <p>{price} ₽</p>
          <div className='buttons'>
            <button className='more'>
              <p>Перейти</p>
            </button>
            <button className='like'>
              <span className='like-icon'></span>
            </button>
          </div>
        </div>
        <div className='set-img'>
          <img src={img} alt='Just Image' />
        </div>
      </div>
    )
  }

  return (
    <section className='sets'>
      <h1>Выгодный комплект</h1>
      <div className='set-list'>
        {createSet('iPhone XS + Airpods', '77 499', set)}
        {createSet('iPhone XS + Airpods', '77 499', set)}
      </div>
      <div className='more-text'>
        <p>Смотреть все акции и скидки</p>
        <span className='arrow-right'></span>
      </div>
    </section>
  )
}

export default Sets
