import React from 'react'

import HeadPhone from '../components/HeadPhone'
import HeadPhoneFilter from "../components/HeadPhoneFilter";

const HeadPhonePage = () => {
  return (
    <div className="products__container">
      <div className="product__filter">
        <HeadPhoneFilter></HeadPhoneFilter>
      </div>

      <div className="product__container">
        <HeadPhone></HeadPhone>
      </div>
    </div>
  )
}

export default HeadPhonePage