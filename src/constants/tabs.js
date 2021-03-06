import blogs from "./blogs"
import products from "./products"
import util from "./util/util"


const HOME = 'Trang chủ'
const PRODUCTS = 'Sản phẩm'
const BLOG = 'Blog'
const FAQS = 'FAQs'
const ABOUTUS = 'Về chúng tôi'

const HOME_NO_ACCENTS = 'trang-chu'
const PRODUCTS_NO_ACCENTS = 'san-pham'
const BLOG_NO_ACCENTS = 'blog'
const FAQS_NO_ACCENTS = 'faqs'
const ABOUTUS_NO_ACCENTS = 've-chung-toi'

const BRAND_NO_ACCENTS = 'thuong-hieu'
const PROMOTION_NO_ACCENTS = 'khuyen-mai'
const NEWPRODUCT_NO_ACCENT = 'hang-moi-ve'
const TOPSALE_NO_ACCENT = 'ban-chay-nhat'
const SNEAKERMALE_NO_ACCENT = 'sneaker-nam'
const SNEAKERFEMALE_NO_ACCENT = 'sneaker-nu'

const TOPIC_NO_ACCENT = 'chu-de'
const LATESTBLOG_NO_ACCENT = 'blog-moi-nhat'
const MOSTWATCHED_NO_ACCENT = 'xem-nhieu-nhat'

const CUSTOMERASSISTANCE_NO_ACCENT = 'ho-tro-khach-hang'
const POLICY_NO_ACCENT = 'chinh-sach'
const CONTACT_NO_ACCENT = 'lien-he'


const arrProductPages = ['Khuyến mãi', 'Hàng mới về', 'Bán chạy nhất',

]
const arrBlogPages = ['Chủ đề', 'Blog mới nhất', 'Xem nhiều nhất']
const arrFAQs = ['Hỗ trợ khách hàng', 'Chính sách', 'Liên hệ']

const tabsLeftBar = ['Walking Style Shoes', 'Casual Shoes', 'Boat Shoes', 'Canvas Trendy Shoes',
    'Basketball Style Shoes', 'Chunky Shoes', 'Other Trendy Shoes'
]

const tabsUser = [{
        name: 'Đăng nhập',
        nameNoAccent: 'dang-nhap',
    },
    {
        name: 'Đăng ký',
        nameNoAccent: 'dang-ky',
    }
]

const getTabsBlog = () => {
    return blogs.getBlogCates().map((item) => ({
        name: item,
        nameNoAccent: util.removeAccent(item),
        isExpanded: false
    }))
}



const tabsCustomerSupport = [{
        name: 'Hướng dẫn mua hàng',
        nameNoAccent: 'huong-dan-mua-hang',
        isExpanded: false
    },
    {
        name: 'Hướng dẫn thanh toán',
        nameNoAccent: 'huong-dan-thanh-toan',
        isExpanded: false
    },
    {
        name: 'Giao hàng & Vận chuyển',
        nameNoAccent: 'giao-hang-&-van-chuyen',
        isExpanded: false
    },
    {
        name: 'Hướng dẫn chọn size',
        nameNoAccent: 'huong-dan-chon-size',
        isExpanded: false
    },

]

const tabsPolicy = [{
        name: 'Chính sách bảo mật',
        nameNoAccent: 'chinh-sach-bao-mat',
        isExpanded: false
    },
    {
        name: 'Chinh sách đổi trả',
        nameNoAccent: 'chinh-sach-doi-tra',
        isExpanded: false
    },
    {
        name: 'Cam kết & bảo hành',
        nameNoAccent: 'cam-ket-&-bao-hanh',
        isExpanded: false
    },
]

const tabListObj = [{
        name: HOME,
        nameNoAccent: HOME_NO_ACCENTS,
        isExpanded: false
    },
    {
        name: PRODUCTS,
        nameNoAccent: PRODUCTS_NO_ACCENTS,
        isExpanded: true,
        tabList2: [{
                name: arrProductPages[0],
                nameNoAccent: PROMOTION_NO_ACCENTS,
                isExpanded: false,
            },
            {
                name: arrProductPages[1],
                nameNoAccent: NEWPRODUCT_NO_ACCENT,
                isExpanded: false
            },
            {
                name: arrProductPages[2],
                nameNoAccent: TOPSALE_NO_ACCENT,
                isExpanded: false
            },
        ]
    },
    {
        name: BLOG,
        nameNoAccent: BLOG_NO_ACCENTS,
        isExpanded: true,
        tabList2: [{
                name: arrBlogPages[0],
                nameNoAccent: TOPIC_NO_ACCENT,
                isExpanded: true,
                tablist3: getTabsBlog()

            },
            {
                name: arrBlogPages[1],
                nameNoAccent: LATESTBLOG_NO_ACCENT,
                isExpanded: false
            },
            {
                name: arrBlogPages[2],
                nameNoAccent: MOSTWATCHED_NO_ACCENT,
                isExpanded: false
            },
        ]
    },
    {
        name: FAQS,
        nameNoAccent: FAQS_NO_ACCENTS,
        isExpanded: true,
        tabList2: [{
                name: arrFAQs[0],
                nameNoAccent: CUSTOMERASSISTANCE_NO_ACCENT,
                isExpanded: true,
                tablist3: tabsCustomerSupport

            },
            {
                name: arrFAQs[1],
                nameNoAccent: POLICY_NO_ACCENT,
                isExpanded: true,
                tablist3: tabsPolicy

            },
            {
                name: arrFAQs[2],
                nameNoAccent: CONTACT_NO_ACCENT,
                isExpanded: false
            },
        ]
    },
    {
        name: ABOUTUS,
        nameNoAccent: ABOUTUS_NO_ACCENTS,
        isExpanded: false
    }
]


export default {
    tabListObj,
    tabsLeftBar,
    tabsUser,
    tabsCustomerSupport,
    tabsPolicy,
    HOME,
    PRODUCTS,
    BLOG,
    FAQS,
    ABOUTUS,
    HOME_NO_ACCENTS,
    PRODUCTS_NO_ACCENTS,
    BLOG_NO_ACCENTS,
    FAQS_NO_ACCENTS,
    ABOUTUS_NO_ACCENTS
}