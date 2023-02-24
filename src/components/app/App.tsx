import React from 'react'

import './App.scss'
import Navigation from '../navigation/navigation'
import Categories from '../categories/categories'
import Sets from '../sets/sets'
import Blog from '../blog/blog'
import Footer from '../footer/footer'

function App() {
  return (
    <div className='all-container'>
      <Navigation />
      <Categories />
      <Sets />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
