const getItemsOrder = () => {
    const keysOrder = 'keyOrder'
    const itemsOrder = JSON.parse(localStorage.getItem(keysOrder) || '[]')
    return {
        key: keysOrder,
        items: itemsOrder
    }
}

const getItemsAddress = () => {
    const keysAddress = 'keyAddress'
    const itemsAddress = JSON.parse(localStorage.getItem(keysAddress) || '[]')
    return {
        key: keysAddress,
        items: itemsAddress
    }
}


const getCurrentAddress = () => {
    const keysAddressCurrent = 'keysAddressCurrent'
    const itemsAddress = JSON.parse(localStorage.getItem(keysAddressCurrent) || '[]')
    return {
        key: keysAddressCurrent,
        items: itemsAddress
    }
}


const getCurrentDelivery = () => {
    const keyDelivery = 'keyDelivery'
    const itemsDelivery = JSON.parse(localStorage.getItem(keyDelivery) || '[]')
    return {
        key: keyDelivery,
        items: itemsDelivery
    }
}




export default {
    getItemsOrder, getItemsAddress, getCurrentAddress, getCurrentDelivery
}