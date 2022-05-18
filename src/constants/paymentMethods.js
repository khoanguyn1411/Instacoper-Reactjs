const paymentMethod = [{
        name: 'Thanh toán khi nhận hàng',
        des: ' Thanh toán với người giao hàng khi nhận hàng'
    },
    {
        name: 'Thanh toán điện tử',
        des: 'Sử dụng các hình thức thanh toán điện tử như ví điện tử, thẻ ngân hàng',
        children: [{
                category: 'Ví điện tử',
                items: [{
                        name: 'MoMo',
                        icon: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png',
                        cate: 'Ví điện tử'
                    },
                    {
                        name: 'ZaloPay',
                        icon: 'https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png',
                        cate: 'Ví điện tử'

                    },
                    {
                        name: 'VNPay',
                        cate: 'Ví điện tử',
                        icon: 'data:image/png;base64,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'

                    },
                    {
                        cate: 'Ví điện tử',

                        name: 'ViettelPay',
                        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjaShdfKPMkC-svJITxlj8hz63I5IZ8wENV3UOAnHqqED_CBkhOvdwU2Add1GMBFNYQw&usqp=CAU'
                    },

                ]
            },
            {
                category: 'Thẻ ngân hàng',
                items: [{
                        cate: 'Thẻ ngân hàng',
                        name: 'Agribank',
                        icon: 'data:image/png;base64,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',
                    },
                    {
                        cate: 'Thẻ ngân hàng',
                        name: 'Vietcombank',
                        icon: 'https://miro.medium.com/max/1400/0*KzqxLvnc2k4tWGj0.jpg'
                    },
                    {
                        cate: 'Thẻ ngân hàng',
                        name: 'BIDV',
                        icon: 'http://2.bp.blogspot.com/--dYMSSvEF7k/UWjQYRmX-qI/AAAAAAAABHE/XVXD7ykYMoQ/s1600/BIDV.jpg'
                    },
                    {
                        cate: 'Thẻ ngân hàng',
                        name: 'Sacombank',
                        icon: 'https://hawacorp.vn/sacombank-la-ngan-hang-nao/imager_2_7991_700.jpg'
                    },
                    {
                        cate: 'Thẻ ngân hàng',
                        name: 'ACB',
                        icon: 'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-ACB-Ori.png'
                    }
                ]
            }
        ]
    },
    {
        name: 'Thanh toán bằng thẻ quốc tế',
        des: 'Sử dụng thẻ quốc tế để thanh toán',
        children: [{
                name: 'Thẻ VISA',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
                cate: 'Thẻ quốc tế',

            },
            {
                name: 'Thẻ Master',
                cate: 'Thẻ quốc tế',

                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/640px-MasterCard_logo.png'
            },
            {
                name: 'Thẻ JCB',
                cate: 'Thẻ quốc tế',

                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png'
            }
        ]
    },
]



export default {
    paymentMethod,
}