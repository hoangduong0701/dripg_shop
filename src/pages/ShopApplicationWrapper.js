import React from 'react'
import Naviagation from '../components/Navigation/Naviagation'
import { Outlet } from 'react-router-dom'

const ShopApplicationWrapper = () => {
  return (
    <div>
        <Naviagation/>
        <Outlet/>
    </div>
  )
}

export default ShopApplicationWrapper