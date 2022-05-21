import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss' ;


const Pagination = ({ itemsPerPage,
  itemsShow, setCurrentItems, reRender, setRerender
}) => {
  const items = itemsShow
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsShow]);

  useEffect(() =>{
    setRerender(Math.random())
    setItemOffset(0)
  }, [itemsShow])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    window.scroll(0, 0)
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapperDiv} key = {reRender}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="❯"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="❮"
        renderOnZeroPageCount={null}
        containerClassName={styles.wrapper}
        previousLinkClassName={styles.directButton}
        nextLinkClassName={styles.directButton}
        activeClassName={styles.activePage}
      />
    </div>
  )
}

export default Pagination