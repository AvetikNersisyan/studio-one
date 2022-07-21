import React, { Component, ReactNode } from 'react'
import { HomePage } from '../pages/HomePage'

import { Icons } from '../assets/svg'
import NewsPage  from '../pages/NewsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { LoginPage } from '../pages/LoginPage'


export interface IRoutes {
  component: JSX.Element
  path: string
  secure: boolean,
  label: string,
  isShowMenu: boolean,
  icon?:  React.FC<{fillColor?: string}>
  fillColor?: string
}


export const routes: IRoutes[] = [
  {
    component: <HomePage/>,
    path: '/',
    secure: false,
    label: 'Home',
    isShowMenu: true,
    icon: Icons.Home

  },
  {
    component: <NewsPage/>,
    path: '/news',
    secure: false,
    label: 'News Feed',
    isShowMenu: true,
    icon: Icons.NewsFeed
  },
  {
    component: <LoginPage/>,
    path: '/login',
    secure: false,
    label: 'Login',
    isShowMenu: false
  },
  {
    component: <ProfilePage/>,
    path: '/profile',
    secure: false,
    label: 'Profile',
    isShowMenu: true,
    icon: Icons.Account
  },
  {
    component: <HomePage/>,
    path: '*',
    secure: false,
    label: 'Not found',
    isShowMenu: false
  },



]
