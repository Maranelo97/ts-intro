interface Product {
    description: string;
    price: number
}

const phone: Product = {
    description: 'Samsung Galaxy A02',
    price: 70
}

const tablet: Product = {
    description: 'Nest Hub',
    price: 170
}

const mp3: Product = {
    description: 'Samsung',
    price: 50
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

function calculateTax ( options:TaxCalculationOptions ): number[]{

    let total = 0;

    options.products.forEach(product => {
        total += product.price
    });

    return [total, total * options.tax]

}



const shoppingCart = [phone, tablet, mp3];
const tax = 0.15

const result = calculateTax({
    products: shoppingCart,
    tax
})


console.log('Total', result[0])
console.log('Tax', result[1])
export {}