import './navigation.scss'

function Navigation() {
  return (
    <div className='navigation'>
      <nav className='container'>
        <div className='nav-left'>
          <div className='logo'>
            <span className='logo-icon' />
          </div>
          <div className='location'>
            <span className='nav-icon' />
            <p>Санкт-Петербург</p>
          </div>
        </div>
        <div className='nav-menu'>
          <ul>
            <li>
              <p>Магазины</p>
            </li>
            <li>
              <p>Оптовые</p>
            </li>
            <li>
              <p>Доставка и оплата</p>
            </li>
            <li>
              <p>Где мой заказ?</p>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navigation
