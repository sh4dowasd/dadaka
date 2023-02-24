import './blog.scss'

function Blog() {
  const articleCreator = (title: string, text: string, d: Date = new Date(), id: number) => {
    const date = d.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
    })
    return (
      <div className='article' key={id}>
        <h2>{title}</h2>
        <p className='text'>{text}</p>
        <p className='date'>{date}</p>
      </div>
    )
  }

  return (
    <section className='blog'>
      <h1>Читай и познавай</h1>
      <div className='nav-blog'>
        <ul>
          <li>
            <p className='active'>Новинки</p>
          </li>
          <li>
            <p>Аксессуары</p>
          </li>
          <li>
            <p>Apple</p>
          </li>
          <li>
            <p>Android</p>
          </li>
          <li>
            <p>Приложения</p>
          </li>
        </ul>
      </div>
      <div className='articles'>
        <div className='article active'>
          <h2>Новые ультрабуки от HP</h2>
          <p className='text'>HP представила бюджетные ноутбуки с процессорами AMD Mendocino на Zen 2</p>
          <p className='date'>12 февраля</p>
        </div>
        {articleCreator(
          'BMW Galaxy',
          'Samsung представила эксклюзивный Galaxy S23 Ultra BMW M Edition — со смартфоном покупатель получит уроки вождения',
          new Date(2011, 1, 12),
          1
        )}
        {articleCreator(
          'BMW Galaxy',
          'Samsung представила эксклюзивный Galaxy S23 Ultra BMW M Edition — со смартфоном покупатель получит уроки вождения',
          new Date(2011, 1, 12),
          2
        )}
      </div>
      <div className='more-text'>
        <p>Перейти в блог</p>
        <span className='arrow-right'></span>
      </div>
    </section>
  )
}

export default Blog
