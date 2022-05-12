import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { tabList } from '../../../constants'
import styles from './ExpandedTab.module.scss'
import ExpandedTabLv2 from '../ExpandedTabLv2/ExpandedTabLv2'
import { PageContext } from '../../PageContext/PageContext'

const ExpandedTab = ({ page }) => {


  const navigate = useNavigate()

  const handleSetBold = useContext(PageContext).handleSetBold

  const tabs = tabList.tabListObj
  const newArr = tabs.filter((item) => (item.nameNoAccent === page))
  const tabInside = newArr[0].tabList2

  const [checked, setChecked] = useState([]);

  const handleSwitchPage = (item) => {
    handleSetBold( {
      direct: item,
      pageAssistance: undefined
    })
  }

  const handleDirectPage = (name) => {
    if (!name.isExpanded) {
      let path = `${page}/${name.nameNoAccent}`;
      navigate(path);
      handleSwitchPage(name.nameNoAccent)
    }
    else {
      setChecked(function (prev) {
        const isChecked = checked.includes(name.nameNoAccent);
        if (isChecked) {
          const newArr = checked.filter(item => item !== name.nameNoAccent)
          return newArr
        }
        else {

          // return [...prev, name.nameNoAccent] //dạng checkbox
          return [name.nameNoAccent] // dạng radio
        }
      })
    }
  }

  const classesWrapper = clsx([
    styles.expandedTab__wrapper,
    {[styles.productWidth]: page===tabList.PRODUCTS_NO_ACCENTS},
    {[styles.blogWidth]: page===tabList.BLOG_NO_ACCENTS},
    {[styles.faqsWidth]: page===tabList.FAQS_NO_ACCENTS}
  ])


  return (
    <ul className={classesWrapper} onMouseLeave = {() => {setChecked([])}}>
      {
        tabInside.map((item, index) => (
          <div key={index}>
            <div className={styles.expandedTab__title}>
              <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
              <li onClick={() => handleDirectPage(item)}>{item.name}</li>
            </div>
            {
              item.isExpanded &&
              <ExpandedTabLv2
                isVisible={checked.includes(item.nameNoAccent)}
                title={item}
                page={page}
              />
            }
          </div>
        ))
      }
    </ul>
  )
}

export default ExpandedTab