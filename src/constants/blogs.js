const cate = {
    sneakerTips: 'Sneaker Tips',
    newsFashion: 'Tin tức thời trang',
    trend: 'Xu hướng thời trang',
    star: 'Sao & styles',
    newsIns: 'Instacoper news',
}
const status = {
    newBlog: 'Blog mới nhất',
    mostWatch: 'Xem nhiều nhất'
}
const getBlogCates = () => {
    let array = Object.keys(cate)
        .map(function (key) {
            return cate[key];
        });
    return array
}

const getBlogStatus = () => {
    let array = Object.keys(status)
        .map(function (key) {
            return status[key];
        });
    return array
}


const blogsList = [{
        cate: cate.newsFashion,
        title: 'Lão đại Wowy đưa team đi sắm giày Nike chuẩn bị cho vòng đối đầu Rap Việt mùa 2',
        des: 'Không chỉ hướng dẫn và hỗ trợ các thành viên về khâu âm nhạc lẫn kỹ thuật trình diễn, HLV Wowy còn truyền cảm hứng đến các thành viên trong cách ăn mặc khi vừa qua thầy trò team này đã có một kỷ niệm shopping khó quên tại cửa hàng Nike Saigon Centre để chuẩn bị cho vòng đối đầu đầy rẫy thử thách tại Rap Việt mùa 2',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/part1.jpg',
        status: status.newBlog
    },
    {
        cate: cate.sneakerTips,
        title: 'Nike tips: 4 cách buộc dây giày Jordan 1 độc đáo và đẹp mắt',
        des: 'Jordan 1 chính là một trong những mẫu giày thể thao đang làm mưa làm gió của Nike với thiết kế nổi bật và đặc sắc.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-one.png',
        status: status.mostWatch
    },
    {
        cate: cate.sneakerTips,
        title: 'Nike gia tăng trải nghiệm mua sắm mới hậu Covid-19',
        des: 'Đại dịch Covid-19 đã ảnh hưởng đến hầu hết mọi khía cạnh của cuộc sống, thói quen mua sắm và sinh hoạt của mọi người',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-two.png',
        status: ''
    },
    {
        cate: cate.sneakerTips,
        title: '15 cách buộc dây giày đẹp "chất lừ", làm mới phong cách mỗi ngày của bạn',
        des: 'Đôi giày sneaker sẽ trở nên thú vị và luôn mới mẻ nếu bạn biết cách thay đổi các cách buộc dây giày thường xuyên',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/2short-three.png',
        status: status.mostWatch
    },
    {
        cate: cate.newsFashion,
        title: 'Chào mừng Sport Outlet thời trang thể thao giá siêu hấp dẫn – Nike tặng ngay 50.000đ cho đơn hàng đầu tiên',
        des: 'Nike giới thiệu Sport Outlet – Chuyên trang thời trang thể thao với mức giá siêu hấp dẫn, nơi mà bạn có thể tìm mua cho mình và người thân những món đồ chất lượng cao với mức giá hợp lý.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/part3.png',
        status: status.newBlog
    },
    {
        cate: cate.trend,
        title: 'Top những mẫu giày Nike Jordan 1 được phái đẹp mong đợi nhất 2021',
        des: 'Nike cho ra mắt sản phẩm Nike Jordan được mong đợi nhất thập kỷ này',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-one.png',
        status: ''
    },
    {
        cate: cate.star,
        title: 'Phong cách Grunge - Khi sự "lôi thôi" trở thành gu ăn mặc đẳng cấp',
        des: 'Phong cách Grunge là xu hướng thời trang cực thịnh đầu những năm 90 thế kỷ trước.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-two.png',
        status: ''
    },
    {
        cate: cate.trend,
        title: 'Phối đồ xinh chuẩn chỉnh với mẫu giày quốc dân – Nike Cortez',
        des: 'Nike Cortez không chỉ thay đổi cuộc chơi của các vận động viên trong quá khứ, mẫu giày thể thao hơn 45 tuổi này còn trở thành 1 hiện tượng',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/4short-three.png',
        status: status.newBlog
    },
    {
        cate: cate.newsIns,
        title: 'Cotton On lần đầu ra mắt BST Peanuts x Yale - Khi chú chó Snoopy vào đại học Yale',
        des: 'Lần đầu tiên, thương hiệu thời trang Cotton On đưa chú chó Snoopy trong bộ phim hoạt hình Peanuts',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-one.png',
        status: status.mostWatch
    },
    {
        cate: cate.trend,
        title: 'Cách chụp hình selfie đẹp cho nam: 5 tips và 10+ ý tưởng cực độc đáo',
        des: 'Không chỉ có chị em mới yêu thích những góc máy selfie ảo diệu, cánh mày râu hẳn cũng muốn bản thân trông thật ấn tượng và sành điệu',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-two.png',
        status: status.newBlog
    },
    {
        cate: cate.trend,
        title: 'Cách phối vest với áo thun nữ chạm đỉnh thần thái, đón đầu xu hướng 2022',
        des: 'Đồ vest là item thời trang đạt chuẩn sang xịn mà hẳn cô nàng công sở nào cũng mê mẩn.',
        thumb: 'https://instacoper-05.web.app/assets/img/blog/5short-three.png',
        status: ''
    },
    {
        cate: cate.sneakerTips,
        title: 'Cách vệ sinh giày vải tại nhà đơn giản',
        des: 'Sau đây là cách vệ sinh giày vải ngay tại nhà mà bạn có thể dễ dàng áp dụng. Ngoài ra, bạn có thể mang giày đến các cửa hàng chuyên nghiệp để chăm sóc.',
        thumb: 'https://www.extrim.vn/_next/image?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Ffiles.gigantecmedia.com%2Fextrim_file%2Fcach_ve_sinh_giay_vai_1_e7c33b68b8.jpg&w=1920&q=75',
        status: status.newBlog
    },
    {
        cate: cate.sneakerTips,
        title: 'Đế boost là gì? Tại sao nên sở hữu giày adidas ultra boost.',
        des: 'Đế boost là ưu điểm tuyệt vời của dòng giày này vì mang lại cảm giác nhẹ, êm chân, thoải mái vận động. Và đây cũng tạo ra nhược điểm lớn nhất của giày Adidas Ultra Boost đó là đế giày dễ bị ố vàng mất thẩm mỹ sau vài tháng sử dụng. ',
        thumb: 'https://www.extrim.vn/_next/image?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Ffiles.gigantecmedia.com%2Fextrim_file%2Fultra_boost_thumb_5c9ff027be.jpg&w=1920&q=75',
        status: status.newBlog
    },
    {
        cate: cate.newsIns,
        title: 'Nike Air Mag – đôi giày đắt nhất thế giới',
        des: 'Nike là một trong thương hiệu về giày thể thao nổi tiếng trên thế giới. Sản phẩm của tập đoàn Nike không chỉ đáp ứng về chất lượng mà còn về vẻ ngoài thời trang, phong cách. Ngoài ra, Nike cũng là thương hiệu đầu tiên tung ra đôi sneaker có có khả năng tự thắt dây với giá không tưởng. Hàng chục câu hỏi đặt ra, tại sao nó lại có giá như vậy? Hãy cùng Instacoper tìm câu trả lời cho đôi Nike air mag – đôi giày đắt nhất thế giới nhé!',
        thumb: 'https://saigonsneaker.com/wp-content/uploads/2020/01/nike-mag-doi-giay-dat-nhat-the-gioi.jpg',
        status: ''
    },
    {
        cate: cate.trend,
        title: 'Những mẫu giày Adidas neo nam, nữ thịnh hành tại Việt Nam và trên thế giới ',
        des: 'Adidas là một thương hiệu giày thể thao rất được yêu thích trên thị trường toàn cầu. Chúng ta thường quen thuộc với các dòng Adidas Originals nhưng bên cạnh đó, dòng Adidas Neo cũng được ưa chuộng không kém. Vậy Adidas Neo là gì? Hãy cùng khám phá nhé.',
        thumb: 'https://saigonsneaker.com/wp-content/uploads/2019/12/adidas-neo-cloudfoam-nu.jpg',
        status: status.mostWatch
    },
    {
        cate: cate.trend,
        title: 'Phong cách street wear là gì? 7 xu hướng streetwear hot nhất 2020',
        des: 'Phong cách thời trang được giới trẻ yêu thích nhất ngày nay là gì? Chắc chắn chính là streetwear. Vậy streetwear là gì? Để mọi người có cái nhìn chi tiết hơn về phong cách thời trang này, Instacoper mời mọi người cùng đọc qua bài viết sau.',
        thumb: 'https://saigonsneaker.com/wp-content/uploads/2019/12/streetwear.jpg',
        status: ''
    },
]

blogsList.forEach((blog, index) => {
    blog.id = `BLOG00${index}`
})

const getListBlogs = () => {
    return blogsList;
}

export default {
    getListBlogs,
    getBlogCates,
    getBlogStatus
}