import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'


import styles from './ExpandedTabLv2.module.scss'
import { tabList } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { PageContext } from '../../PageContext/PageContext'

const ExpandedTabLv2 = ({ isVisible, title, page }) => {
  const tabs = title.tablist3

  const navigate = useNavigate()
  const handleSetBold = useContext(PageContext).handleSetBold

  const handleSwitchPage = (item) => {
    handleSetBold(
      {
        direct: item,
        pageAssistance: undefined
      }
    )
  }

  const handleDirectPage = (name) => {
    let path = `${page}/${title.nameNoAccent}/${name}`
    navigate(path);
    handleSwitchPage(name)
  }

 
  return (
    isVisible &&
    <div className={styles.expandedTabLv2__wrapper}>
      {
        tabs &&
        tabs.map((item, index) => (
          <div onClick={() => handleDirectPage(item.nameNoAccent)} key={index}>
            <FontAwesomeIcon icon={faCaretDown} />
            <li>{item.name}</li>
          </div>
        ))
      }
    </div>
  )
}

export default ExpandedTabLv2