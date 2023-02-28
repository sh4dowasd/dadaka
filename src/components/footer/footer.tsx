import './footer.scss'
import { useState } from 'react'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div>
          <div className='logo'>
            <span className='footer-logo-icon' />
            <p>DADAKA</p>
          </div>
          <p>(C) 2023</p>
          <p>ИП Иванов</p>
        </div>
        <hr />
        <div>
          <ul>
            <div className='textcols'>
              <li>
                <p>Смартфоны</p>
              </li>
              <li>
                <p>Аксессуары</p>
              </li>
              <li>
                <p>Смарт-часы</p>
              </li>
            </div>
            <div className='textcols'>
              <li>
                <p>Наушники</p>
              </li>
              <li>
                <p>Ноутбуки</p>
              </li>
              <li>
                <p>Комплектующие для ПК</p>
              </li>
            </div>
          </ul>
        </div>
        <hr />
        <div>
          <ul>
            <div className='textcols'>
              <li>
                <p>Сервисный центр</p>
              </li>
              <li>
                <p>Магазины</p>
              </li>
              <li>
                <p>Бизнесу</p>
              </li>
            </div>
            <div className='textcols'>
              <li>
                <p>Доставка и оплата</p>
              </li>
              <li>
                <p>Где мой заказ?</p>
              </li>
            </div>
          </ul>
        </div>
        <hr />
        <div>
          <p>Акции</p>
          <p>Блог</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
