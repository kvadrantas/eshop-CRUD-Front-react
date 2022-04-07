import moment from "moment-timezone";

function fixDate(data) {
    // console.log('DUOMENYS ', data)
    return data.map((e, i) =>  {
        return({
            id: e.id,
            product: e.product,
            type: e.type,
            quantity: e.quantity,
            price: e.price,
            instock: e.instock,
            lastorder: moment.tz(e.lastorder, "Europe/Vilnius").format('YYYY-MM-DD'),
            waranty: e.waranty,
            forsale: e.forsale,
            description: e.description
        })
    })
}

export default fixDate;