const cate = {
    sneakerTips: 'Sneaker Tips',
    newsFashion: 'Tin tức thời trang',
    trend: 'Xu hướng thời trang',
    star: 'Sao & styles',
    newsIns: 'Instacoper news'
}
const blogsList = [{
        cate: cate.newsFashion,
        title: 'Lão đại Wowy đưa team đi sắm giày Nike chuẩn bị cho vòng đối đầu Rap Việt mùa 2',
        des: 'Không chỉ hướng dẫn và hỗ trợ các thành viên về khâu âm nhạc lẫn kỹ thuật trình diễn, HLV Wowy còn truyền cảm hứng đến các thành viên trong cách ăn mặc khi vừa qua thầy trò team này đã có một kỷ niệm shopping khó quên tại cửa hàng Nike Saigon Centre để chuẩn bị cho vòng đối đầu đầy rẫy thử thách tại Rap Việt mùa 2',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/part1.jpg',
    },
    {
        cate: cate.sneakerTips,
        title: 'Nike tips: 4 cách buộc dây giày Jordan 1 độc đáo và đẹp mắt',
        des: 'Jordan 1 chính là một trong những mẫu giày thể thao đang làm mưa làm gió của Nike với thiết kế nổi bật và đặc sắc.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-one.png'
    },
    {
        cate: cate.sneakerTips,
        title: 'Nike gia tăng trải nghiệm mua sắm mới hậu Covid-19',
        des: 'Đại dịch Covid-19 đã ảnh hưởng đến hầu hết mọi khía cạnh của cuộc sống, thói quen mua sắm và sinh hoạt của mọi người',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-two.png'

    },
    {
        cate: cate.sneakerTips,
        title: '15 cách buộc dây giày đẹp "chất lừ", làm mới phong cách mỗi ngày của bạn',
        des: 'ôi giày sneaker sẽ trở nên thú vị và luôn mới mẻ nếu bạn biết cách thay đổi các cách buộc dây giày thường xuyên',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-three.png'
    },
    {
        cate: cate.newsFashion,
        title: 'Chào mừng Sport Outlet thời trang thể thao giá siêu hấp dẫn – Nike tặng ngay 50.000đ cho đơn hàng đầu tiên',
        des: 'Nike giới thiệu Sport Outlet – Chuyên trang thời trang thể thao với mức giá siêu hấp dẫn, nơi mà bạn có thể tìm mua cho mình và người thân những món đồ chất lượng cao với mức giá hợp lý.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/part3.png'
    },
    {
        cate: cate.trend,
        title: 'Top những mẫu giày Nike Jordan 1 được phái đẹp mong đợi nhất 2021',
        des: 'Nike cho ra mắt sản phẩm Nike Jordan được mong đợi nhất thập kỷ này',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-one.png'
    },
    {
        cate: cate.star,
        title: 'Phong cách Grunge - Khi sự "lôi thôi" trở thành gu ăn mặc đẳng cấp',
        des: 'Phong cách Grunge là xu hướng thời trang cực thịnh đầu những năm 90 thế kỷ trước.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-two.png'
    },
    {
        cate: cate.trend,
        title: 'Phối đồ xinh chuẩn chỉnh với mẫu giày quốc dân – Nike Cortez',
        des: 'Nike Cortez không chỉ thay đổi cuộc chơi của các vận động viên trong quá khứ, mẫu giày thể thao hơn 45 tuổi này còn trở thành 1 hiện tượng',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-three.png'
    },
    {
        cate: cate.newsIns,
        title: 'Cotton On lần đầu ra mắt BST Peanuts x Yale - Khi chú chó Snoopy vào đại học Yale',
        des: 'Lần đầu tiên, thương hiệu thời trang Cotton On đưa chú chó Snoopy trong bộ phim hoạt hình Peanuts',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-one.png'
    },
    {
        cate: cate.trend,
        title: 'Cách chụp hình selfie đẹp cho nam: 5 tips và 10+ ý tưởng cực độc đáo',
        des: 'Không chỉ có chị em mới yêu thích những góc máy selfie ảo diệu, cánh mày râu hẳn cũng muốn bản thân trông thật ấn tượng và sành điệu',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-two.png'
    },
    {
        cate: cate.trend,
        title: 'Cách phối vest với áo thun nữ chạm đỉnh thần thái, đón đầu xu hướng 2022',
        des: 'Đồ vest là item thời trang đạt chuẩn sang xịn mà hẳn cô nàng công sở nào cũng mê mẩn.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-three.png'
    }
]

const getListBlogs = () => {
    return blogsList;
}

export default {
    getListBlogs
}