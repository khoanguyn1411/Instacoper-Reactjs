import React from 'react'
import clsx from 'clsx'

import { imgsAboutus } from '../../../constants'
import styles from './Values.module.scss'

const Values = () => {

  const values = [
    {
      title: 'Slogan',
      thumb: imgsAboutus.slogan,
      content: '“Hãy mang những giấc mơ của bạn lên đôi chân để dẫn lối giấc mơ đó thành hiện thực”',
    },
    {
      title: 'Mission',
      thumb: imgsAboutus.mission,
      content: '“Chúng tôi muốn Instacoper trở thành một công ty cung cấp giày thể thao tốt nhất và vững mạnh nhất".',
    },
    {
      title: 'Vision',
      thumb: imgsAboutus.vision,
      content: 'Instacoper nỗ lực trở thành người dẫn đầu toàn cầu trong ngành công nghiệp hàng thể thao với các thương hiệu được xây dựng dựa trên sự đam mê giành cho thể thao và phong cách sống thể thao.',
    }
  ]
  return (
    <div>
      <div className='app__wrapper'>
        <div className={styles.value__wrapper}>
          <div className={clsx(styles.value__row, styles.row_1)}>
            <img src={values[0].thumb} />
            <div className={styles.row_content}>
              <div className={styles.circle}></div>
              <h1>{values[0].title}</h1>
              <p>{values[0].content}</p>
            </div>
          </div>

          <div className={clsx(styles.value__row, styles.row_2)}>
            <div className={styles.row_content}>
              <p>{values[1].content}</p>
              <div className={styles.circle}></div>
              <h1>{values[1].title}</h1>
            </div>
            <img src={values[1].thumb} />
          </div>


          <div className={clsx(styles.value__row, styles.row_1)}>
            <img src={values[2].thumb} />
            <div className={styles.row_content}>
              <h1>{values[2].title}</h1>
              <div className={styles.circle}></div>
              <p>{values[2].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values