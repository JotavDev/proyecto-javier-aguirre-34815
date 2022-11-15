import products from "./Products"

function getItems(idCategory){
    return new Promise((resolve) => {
        if(idCategory === undefined){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(products);
                }, 250);
            })
        } else {
            setTimeout(() => {
                let itemsRequested = products.filter(( item ) => item.category === idCategory)
                resolve(itemsRequested);
            }, 250);
        }
    })
}

export function getSingleItem(idParam){
    return new Promise ((resolve, reject) => {
        let itemRequested = products.find(( item ) => item.id === Number(idParam))

        if (itemRequested === undefined) reject("Item no encontrado")

        setTimeout(() => {
            resolve(itemRequested);
        }, 250);
    })
}

export default getItems;