import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'


import styles from './ExpandedTabLv2.module.scss'
import {tabList} from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { PageContext } from '../../PageContext/PageContext'

const ExpandedTabLv2 = ({isVisible, title, page}) => {
  const tabs = title.tablist3

  const navigate = useNavigate()
  const setBold = useContext(PageContext).setBold

  const handleSwitchPage = (item) => {
    setBold((prev) => (
      {
        direct: item,
        pageAssistance: prev.pageAssistance
      }
    ))
  }

  const handleDirectPage = (name) => {
      let path =  `${page}/${title.nameNoAccent}/${name}`
      navigate(path);
      handleSwitchPage(title.nameNoAccent)
  }

  return (
    isVisible && 
    <div className={styles.expandedTabLv2__wrapper}>
        {
          tabs && 
          tabs.map((item, index) => (
            <div onClick={() => handleDirectPage(item.nameNoAccent)} key={index}>
              <FontAwesomeIcon icon={faCaretDown}/>
              <li>{item.name}</li>
            </div>
          ))
        }
    </div>
  )
}

export default ExpandedTabLv2