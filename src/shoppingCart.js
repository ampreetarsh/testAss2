class shoppingCart {
    constructor(...products) {
        this.products = products;
    }
    scan(product) {
        if (this.products.length < 5) {
            this.products.push(product);
        } else {
            return `Your cart is full`;
        }
    }
    remove(product) {
            for (let item of this.products) {
                if (item  == product) {
                this.products.splice(item, 1)
            }
        }
        return this.products;
    }
    item() {
        return this.products;
    }
 }