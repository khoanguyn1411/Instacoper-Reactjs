import { useState, createContext } from "react";

import { tabList } from "../../constants";


const PageContext = createContext()

function PageProvider({ children }) {

  function splitMulti(str, tokens) {
    var tempChar = tokens[0];
    for (let i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
  }

  function getWindowHref() {
    let href = window.location.href
    const splitHrefArr = splitMulti(href, ['/', '?'])
    if (splitHrefArr[splitHrefArr.length - 1] === '') {
      return {
        direct: tabList.HOME_NO_ACCENTS, //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3],
        pageAssistance: splitHrefArr[5]
      }
    }
    else {
      return {
        direct: splitHrefArr[splitHrefArr.length - 1], //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3],
        pageAssistance: splitHrefArr[5]
      }
    }
  }

  const [bold, setBold] = useState({
    direct: getWindowHref().direct,
    pageAssistance: getWindowHref().pageAssistance
  })


  const value = {
    bold,
    setBold,
    getWindowHref,
  }

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  )

}

export { PageContext, PageProvider }