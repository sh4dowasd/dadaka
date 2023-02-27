import './categories.scss'

function Categories() {
  const sectionsArr = [
    'Смартфоны Apple ',
    'Смартфоны Apple ',
    'Смартфоны Apple ',
    'Смартфоны Apple ',
    'Смартфоны Apple ',
    'Смартфоны Apple ',
  ]
  const createCard = (img: string, text: string, price: string) => {
    return (
      <div className='product-card'>
        <div className='image'>
          <img src={img} alt='Just Image' />
        </div>
        <div className='info'>
          <p>{text}</p>
          <hr />
          <p className='price'>от {price} ₽</p>
        </div>
      </div>
    )
  }

  return (
    <section className='categories'>
      <div className='menu-container'>
        <div className='categories-menu'>
          <ul>
            <li>
              <p>Смартфоны</p>
            </li>
            <li>
              <p>Аксессуары</p>
            </li>
            <li>
              <p>Смарт-часы</p>
            </li>
            <li>
              <p>Наушники</p>
            </li>
            <li>
              <p>Ноутбуки</p>
            </li>
            <li>
              <span className='dot'></span>
            </li>
            <li>
              <p>Акции</p>
            </li>
            <li>
              <p>Блог</p>
            </li>
          </ul>
        </div>
        <div className='categories-catalog'>
          <span className='dot'></span>
          <span className='categories-icon'></span>
          <span className='search-icon'></span>
        </div>
      </div>
      <div className='categories-sections-container'>
        <div className='categories-sections'>
          {sectionsArr.map((el) => (
            <div className='section' key={Math.random()}>
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div className='categories-cards'>
          <div className='cards'>
            {createCard(require('../../images/new-smartphones.png'), 'Смартфоны', '4599')}
            {createCard(require('../../images/cables.png'), 'Кабели и зарядки', '4599')}
            {createCard(require('../../images/covers.png'), 'Чехлы', '4599')}
            {createCard(require('../../images/headphones.png'), 'Наушники', '4599')}
            {createCard(require('../../images/laptops.png'), 'Ноутбуки', '4599')}
            {createCard(require('../../images/smartwatch.png'), 'Смарт-часы', '4599')}
            {createCard(require('../../images/speakers.png'), 'Колонки', '4599')}
            {createCard(require('../../images/tablets.png'), 'Планшеты', '4599')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
