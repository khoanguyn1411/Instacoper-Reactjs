import styles from '../pages/Home/Banner/Banner.module.scss'

const banners = [
    {
      id: styles.banner0,
      bigTitle: 'NIKE 2022’s COLLECTION',
      title: 'Nike Air Force 1',
      style: styles.banner__titleColor_white,
      content: 'A brand new series of AF1 has been released for 2022',
      actionSlogan: 'Discover with us!',
      
    },
    {
      id: styles.banner1,
      bigTitle: 'ADIDAS NMD COLLECTION',
      title: 'Adidas NMD',
      style: [styles.banner__titleColor_black, styles.banner__alightLeft],
      content: 'A brand new series of AF1 has been released for 2022',
      actionSlogan: 'Discover with us!',
    },
    {
      id: styles.banner2,
      bigTitle: 'CONVERSE CLASSIC - MEMORY OF 70s',
      title: 'Converse Chuck Taylor 70s',
      style: styles.banner__titleColor_black,
      content: 'A classical sneaker from Converse, bring back history of sneakers from 70s...',
      actionSlogan: '',
    },
    {
      id: styles.banner3,
      bigTitle: 'VANS OLD SKOOL - SKATEBOAR’s BUDDIES',
      title: 'Vans Old Skool',
      style: styles.banner__titleColor_black,
      content: 'VANS OLD SKOOL, no matter how much time has passed, still carries with it the charm as well as the lasting value.',
      actionSlogan: '',
    },
    {
      id: styles.banner4,
      bigTitle: 'NEW BALANCE COLLECTION - ONE FOR ALL PURPOSE',
      title: 'New Balance Fresh Foam',
      style: styles.banner__titleColor_black,
      content: 'Independent since 1906, New Balance empower people through sport and craftsmanship to create positive change in communities around the world.',
      actionSlogan: '',
    },
  ]

  export default banners
