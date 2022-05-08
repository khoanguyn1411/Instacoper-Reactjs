import {
    imgsProducts
} from "."

const thumb = imgsProducts.shoes
const bestseller = 'Bestseller'
const newProduct = 'Sản phẩm mới'
const listProducts = [{
        id: 0,
        name: 'Nike Air Force 1 Low',
        isMaleShoes: true,
        price: 2649000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Nike',
        thumb: thumb[0],
        stars: 4,
        sizeAvailable: [35,36,37,40,42,43]
    },
    {
        id: 1,
        name: 'Nike Air Max 90',
        isMaleShoes: true,
        price: 4109000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[1],
        stars: 3.5,
        sizeAvailable: [34,38,39,40,41]
        
    },
    {
        id: 2,
        name: 'Nike Air Max 95',
        isMaleShoes: false,
        price: 4751000,
        saleOff: 10, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[2],
        stars: 5,
        sizeAvailable: [32,33,40,41]
    },
    {
        id: 3,
        name: 'Jordan Zoom Separate PF',
        isMaleShoes: true,
        price: 4275000,
        saleOff: 10, //(%)
        status: '',
        brand: 'Jordan',
        thumb: thumb[3],
        stars: 4,
        sizeAvailable: [35,36,37,40,42,43]
    },
    {
        id: 4,
        name: 'Nike Air Zoom Pegasus 38',
        isMaleShoes: false,
        price: 3519000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Nike',
        thumb: thumb[4],
        stars: 3.5,
        sizeAvailable: [32,33,40,41]
    },
    {
        id: 5,
        name: 'Adidas Continental 80',
        isMaleShoes: true,
        price: 2699000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Adidas',
        thumb: thumb[5],
        stars: 3.5,
        sizeAvailable: [35,36,37,40,42,43]

    },
    {
        id: 6,
        name: 'Adidas NMD R1',
        isMaleShoes: true,
        price: 3330000,
        saleOff: 10, //(%)
        status: bestseller,
        brand: 'Adidas',
        thumb: thumb[6],
        stars: 4,
        sizeAvailable: [34,38,39,40,41]

    },
    {
        id: 7,
        name: 'Adidas Forum Exhibit Low',
        isMaleShoes: false,
        price: 2450000,
        saleOff: 10, //(%)
        status: '',
        brand: 'Adidas',
        thumb: thumb[7],
        stars: 4.5,
        sizeAvailable: [40,41]
    },

    {
        id: 8,
        name: 'Adidas ZX 2K Boost Pure',
        isMaleShoes: false,
        price: 3700000,
        saleOff: 15, //(%)
        status: newProduct,
        brand: 'Adidas',
        thumb: thumb[8],
        stars: 4.5,
        sizeAvailable: [35,37,38,43]
    },

    {
        id: 9,
        name: 'Adidas Ultraboost 21',
        isMaleShoes: true,
        price: 4999000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'Adidas',
        thumb: thumb[9],
        stars: 4.5,
        sizeAvailable: [35,37,38,43]
    },
    {
        id: 10,
        name: 'Converse Chuck Taylor Classic',
        isMaleShoes: true,
        price: 1450000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'Converse',
        thumb: thumb[10],
        stars: 5,
        sizeAvailable: [35,40,42,43]
    },
    {
        id: 11,
        name: 'Converse Chuck 70 Vintage Canvas Hi',
        isMaleShoes: true,
        price: 1900000,
        saleOff: 30, //(%)
        status: '',
        brand: 'Converse',
        thumb: thumb[11],
        stars: 4.5,
        sizeAvailable: [34,38,39,40,41]

    },
    {
        id: 12,
        name: 'Converse x Keith Haring Run Star Hike High-Top',
        isMaleShoes: false,
        price: 2500000,
        saleOff: 0, //(%)
        status: '',
        brand: 'Converse',
        thumb: thumb[12],
        stars: 4.5,
        sizeAvailable: [37,38,40,41]
    },
    {
        id: 13,
        name: 'Puma Chuck 70 Pride',
        isMaleShoes: false,
        price: 3700000,
        saleOff: 15, //(%)
        status: newProduct,
        brand: 'Puma',
        thumb: thumb[13],
        stars: 4.5,
        sizeAvailable: [40,42]
    },
    {
        id: 14,
        name: 'Chuck VANS All Star Renew Canvas',
        isMaleShoes: true,
        price: 4999000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'VANS',
        thumb: thumb[14],
        stars: 3.5,
        sizeAvailable: [40,41,42]
    },
    {
        id: 15,
        name: 'VANS Old Skool Classic',
        isMaleShoes: true,
        price: 1490000,
        saleOff: 0, //(%)
        status: bestseller,
        brand: 'VANS',
        thumb: thumb[15],
        stars: 4,
        sizeAvailable: [34,38,39,40,41]
    },
    {
        id: 16,
        name: 'VANS Vault OG Classic Slip On Checkerboard/Off White',
        isMaleShoes: true,
        price: 2600000,
        saleOff: 10, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[16],
        stars: 4,
        sizeAvailable: [35,36,37,40,42,43]
    },
    {
        id: 17,
        name: 'VANS Vault OG Authentic LX Chili Pepper Red',
        isMaleShoes: false,
        price: 2450000,
        saleOff: 0, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[17],
        stars: 4,
        sizeAvailable: [40,41,42]

    },
    {
        id: 18,
        name: 'VANS Flame SK8-HI Reissue',
        isMaleShoes: true,
        price: 1800000,
        saleOff: 0, //(%)
        status: newProduct,
        brand: 'VANS',
        thumb: thumb[18],
        stars: 5,
        sizeAvailable: [40,41,42]
    },
    {
        id: 19,
        name: 'VANS Era Packing Tape Black',
        isMaleShoes: true,
        price: 1900000,
        saleOff: 0, //(%)
        status: '',
        brand: 'VANS',
        thumb: thumb[19],
        stars: 5,
        sizeAvailable: [37,38,40,41,42,43]

    },
]

export default {
    listProducts
}