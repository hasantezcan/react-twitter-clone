import React from 'react'
import * as Icon from '../components/icons'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30 }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'More',
    notify: 0
  }
]
