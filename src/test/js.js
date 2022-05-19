// const createStorage = (key) => {
//     const store = JSON.parse(localStorage.getItem(key)) ? ? []
//     const save = (item) => {
//         localStorage.setItem(key, JSON.stringify(item))
//     }

//     const configure = {
//         set(item) {
//             save()
//         },
//         get() {
//             return store
//         }

//     }
//     return configure
// }


document.querySelector('#btnAdd').addEventListener('click', () => {

    const store = JSON.parse(localStorage.getItem('A123')) ?? []
    const save = (item) => {
        localStorage.setItem('A123', JSON.stringify([...store, item]))
    }

    save(Math.random())
})