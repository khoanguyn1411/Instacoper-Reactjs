import {
    imgsProducts
} from "."

const thumb = imgsProducts.shoes
const bestseller = 'Bestseller'
const newProduct = 'Sản phẩm mới'
const listProducts = [{
        name: 'Nike Air Force 1 Low',
        isMaleShoes: true,
        price: 2649000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Nike',
        thumb: thumb[0],
        stars: 4,
        sizeAvailable: [35, 36, 37, 40, 42, 43]
    },
    {
        name: 'Nike Air Max 90',
        isMaleShoes: true,
        price: 4109000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[1],
        stars: 3.5,
        sizeAvailable: [34, 38, 39, 40, 41]

    },
    {
        name: 'Nike Air Max 95',
        isMaleShoes: false,
        price: 4751000,
        saleOff: 10, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[2],
        stars: 5,
        sizeAvailable: [32, 33, 40, 41]
    },
    {
        name: 'Nike Air Zoom Pegasus 38',
        isMaleShoes: false,
        price: 3519000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[4],
        stars: 3.5,
        sizeAvailable: [32, 33, 40, 41]
    },
    {
        name: 'Adidas Continental 80',
        isMaleShoes: true,
        price: 2699000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Adidas',
        thumb: thumb[5],
        stars: 3.5,
        sizeAvailable: [35, 36, 37, 40, 42, 43]

    },
    {
        name: 'Adidas NMD R1',
        isMaleShoes: true,
        price: 3330000,
        saleOff: 10, //(%)
        status: bestseller,
        brand: 'Adidas',
        thumb: thumb[6],
        stars: 4,
        sizeAvailable: [34, 38, 39, 40, 41]

    },
    {
        name: 'Adidas Forum Exhibit Low',
        isMaleShoes: false,
        price: 2450000,
        saleOff: 10, //(%)
        status: '',
        brand: 'Adidas',
        thumb: thumb[7],
        stars: 4.5,
        sizeAvailable: [40, 41]
    },

    {
        name: 'Adidas ZX 2K Boost Pure',
        isMaleShoes: false,
        price: 3700000,
        saleOff: 15, //(%)
        status: newProduct,
        brand: 'Adidas',
        thumb: thumb[8],
        stars: 4.5,
        sizeAvailable: [35, 37, 38, 43]
    },

    {
        name: 'Adidas Ultraboost 21',
        isMaleShoes: true,
        price: 4999000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'Adidas',
        thumb: thumb[9],
        stars: 4.5,
        sizeAvailable: [35, 37, 38, 43]
    },
    {
        name: 'Converse Chuck Taylor Classic',
        isMaleShoes: true,
        price: 1450000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Converse',
        thumb: thumb[10],
        stars: 5,
        sizeAvailable: [35, 40, 42, 43]
    },
    {
        name: 'Converse Chuck 70 Vintage Canvas Hi',
        isMaleShoes: true,
        price: 1900000,
        saleOff: 30, //(%)
        status: '',
        brand: 'Converse',
        thumb: thumb[11],
        stars: 4.5,
        sizeAvailable: [34, 38, 39, 40, 41]

    },
    {
        name: 'Converse x Keith Haring Run Star Hike High-Top',
        isMaleShoes: false,
        price: 2500000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Converse',
        thumb: thumb[12],
        stars: 4.5,
        sizeAvailable: [37, 38, 40, 41]
    },
    {
        name: 'Puma Chuck 70 Pride',
        isMaleShoes: false,
        price: 3700000,
        saleOff: 15, //(%)
        status: newProduct,
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/1367/0817/products/converse-chuck-70-hi-pride-footwear-28406830891073_1024x1024.jpg?v=1628375264',
        stars: 4.5,
        sizeAvailable: [40, 42]
    },
    {
        name: 'Chuck VANS All Star Renew Canvas',
        isMaleShoes: true,
        price: 4999000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'VANS',
        thumb: thumb[14],
        stars: 3.5,
        sizeAvailable: [40, 41, 42]
    },
    {
        name: 'VANS Old Skool Classic',
        isMaleShoes: true,
        price: 1490000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'VANS',
        thumb: thumb[15],
        stars: 4,
        sizeAvailable: [34, 38, 39, 40, 41]
    },
    {
        name: 'VANS Vault OG Classic Slip On Checkerboard/Off White',
        isMaleShoes: true,
        price: 2600000,
        saleOff: 10, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[16],
        stars: 4,
        sizeAvailable: [35, 36, 37, 40, 42, 43]
    },
    {
        name: 'VANS Vault OG Authentic LX Chili Pepper Red',
        isMaleShoes: false,
        price: 2450000,
        saleOff: 0, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[17],
        stars: 4,
        sizeAvailable: [40, 41, 42]

    },
    {
        name: 'VANS Flame SK8-HI Reissue',
        isMaleShoes: true,
        price: 1800000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'VANS',
        thumb: thumb[18],
        stars: 5,
        sizeAvailable: [40, 41, 42]
    },
    {
        name: 'VANS Era Packing Tape Black',
        isMaleShoes: true,
        price: 1900000,
        saleOff: 0, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[19],
        stars: 5,
        sizeAvailable: [37, 38, 40, 41, 42, 43]

    },

    {
        name: 'Nike Air Zoom Pegasus 39',
        isMaleShoes: true,
        price: 3510000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Nike',
        thumb: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa49236e-bc0b-4194-996c-5148086aa5cf/air-zoom-pegasus-39-road-running-shoes-kmZSD6.png',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Nike ZoomX Vaporfly Next% 2',
        isMaleShoes: true,
        price: 2500000,
        saleOff: 5, //(%)
        status: newProduct,
        brand: 'Nike',
        thumb: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a17c1c96-1088-4ea6-bd8d-be5e8dca2110/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Nike Air Zoom Pegasus 38 A.I.R. Jordan Moss',
        isMaleShoes: true,
        price: 3829000,
        saleOff: 20, //(%)
        status: '',
        brand: 'Nike',
        thumb: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c907d45-c2e2-4988-8f6a-214e610714b0/air-zoom-pegasus-38-air-jordan-moss-road-running-shoes-rFNWJS.png',
        stars: 3,
        sizeAvailable: [37, 43, 44, 45, 47]

    },
    {
        name: 'Nike Air Jordan 1 High Panda Twist Rep 1:1',
        isMaleShoes: true,
        price: 1050000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Nike',
        thumb: 'https://dqshop.vn/wp-content/uploads/2021/06/giay-nike-air-jordan-1-university-blue-like-auth-dep-chat-1.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Adidas Superstar',
        isMaleShoes: false,
        price: 2500000,
        saleOff: 5, //(%)
        status: '',
        brand: 'Adidas',
        thumb: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',
        stars: 3,
        sizeAvailable: [37, 40, 41, 45, 47]

    },
    {
        name: 'Adidas Ultraboost 22',
        isMaleShoes: false,
        price: 3000000,
        saleOff: 10, //(%)
        status: bestseller,
        brand: 'Adidas',
        thumb: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Giay_Ultraboost_22_DJen_GZ0127_01_standard.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Adidas Supernova',
        isMaleShoes: true,
        price: 2850000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Adidas',
        thumb: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Giay_Supernova_DJen_S42722_01_standard.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Adidas X Allbirds',
        isMaleShoes: false,
        price: 3500000,
        saleOff: 15, //(%)
        status: '',
        brand: 'Adidas',
        thumb: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfc5f46677ba437daefead8d00ff62f4_9366/Giay_adidas_x_Allbirds_trang_H02740_01_standard.jpg',
        stars: 3,
        sizeAvailable: [37, 42, 43, 44, 45]

    },
    {
        name: 'New Balance 550 – White Green',
        isMaleShoes: false,
        price: 5000000,
        saleOff: 10, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://sneakerholicvietnam.vn/wp-content/uploads/2021/10/new-balance-550-white-green-bb550wt1.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'New Balance 530 – Running Navy',
        isMaleShoes: true,
        price: 3500000,
        saleOff: 0, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://sneakerholicvietnam.vn/wp-content/uploads/2022/01/new-balance-530-running-navy-mr530sg-2.jpg',
        stars: 3,
        sizeAvailable: [42, 43, 44, 45, 47]

    },
    {
        name: 'New Balance 530 – Steel Blue',
        isMaleShoes: false,
        price: 3500000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'New Balance',
        thumb: 'https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/New-Balance-530-Steel-Blue-MR530KC.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Puma Suede Mayu Raw Wns',
        isMaleShoes: false,
        price: 2999000,
        saleOff: 10, //(%)
        status: newProduct,
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/38311401-1_360x.jpg?v=1652189495',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Puma Rs-Z',
        isMaleShoes: false,
        price: 3450000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/38164001-1_1024x1024@2x.jpg?v=1641476166',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Puma RS-Fast Mix',
        isMaleShoes: true,
        price: 2500000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/375641_01-1_1024x1024@2x.jpg?v=1638009370',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Puma Wild Rider Soft Metal',
        isMaleShoes: false,
        price: 1400000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/38190001-1_720x.jpg?v=1645861711',
        stars: 3,
        sizeAvailable: [40, 43, 44, 45, 47]

    },
    {
        name: 'Puma Future Z 4.3 Tt',
        isMaleShoes: true,
        price: 1399000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Puma',
        thumb: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/10677001-1_1024x1024@2x.jpg?v=1652088849',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Balenciaga Triple S Beige Green Yellow Plus Y Factory',
        isMaleShoes: true,
        price: 4500000,
        saleOff: 10, //(%)
        status: bestseller,
        brand: 'Balenciaga',
        thumb: 'https://swagger.com.vn/wp-content/uploads/2020/03/balenciaga-triple-s-blue.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Balenciaga Triple S white Plus Y Factory',
        isMaleShoes: false,
        price: 4500000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'Balenciaga',
        thumb: 'https://swagger.com.vn/wp-content/uploads/2020/03/balenciaga-triple-white-11.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Balenciaga Triple S Allover Logo White Plus Factory',
        isMaleShoes: true,
        price: 2800000,
        saleOff: 5, //(%)
        status: '',
        brand: 'Balenciaga',
        thumb: 'https://swagger.com.vn/wp-content/uploads/2020/04/balenciaga-triple-s-allover-logo-white.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'Balenciaga Triple S Blue black Plus Y Factory',
        isMaleShoes: false,
        price: 3250000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Balenciaga',
        thumb: 'https://swagger.com.vn/wp-content/uploads/2020/03/Balenciaga-Triple-S-Black-Blue-white-6.jpg',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 42, 43, 44, 45, 47]

    },
    {
        name: 'New Balance Fresh Foam Roav',
        isMaleShoes: false,
        price: 2500000,
        saleOff: 0, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://nb.scene7.com/is/image/NB/mroavcr_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 45, 47]

    },
    {
        name: 'New Balance CT302',
        isMaleShoes: true,
        price: 3000000,
        saleOff: 0, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://nb.scene7.com/is/image/NB/ct302oc_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 45, 47]

    },
    {
        name: 'New Balance 2002R',
        isMaleShoes: true,
        price: 2589000,
        saleOff: 0, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://nb.scene7.com/is/image/NB/m2002rwc_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 45, 47]

    },
    {
        name: 'New Balance Made in USA 992',
        isMaleShoes: false,
        price: 4850000,
        saleOff: 0, //(%)
        status: '',
        brand: 'New Balance',
        thumb: 'https://nb.scene7.com/is/image/NB/m992cc_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944',
        stars: 3,
        sizeAvailable: [37, 38, 40, 41, 45, 47]

    },
]

listProducts.forEach(element => {
    element.des = `Ra mắt vào năm 1990, ${element.name} là đôi giày bóng chày đầu tiên của Jordan, đã cách mạng hóa trò chơi trong khi nhanh chóng thu hút được sức hút trên khắp thế giới. Ngày nay,  ${element.name}  vẫn đúng với nguồn gốc của nó với cùng một lớp đệm mềm mại và có độ đàn hồi đã thay đổi lịch sử giày thể thao.`
});

listProducts.forEach((element, index) => {
    element.id = `SP00${index}`
});


export default {
    listProducts
}