describe("My shopping cart", function () {
    it("should add an item in the cart", function () {
        let cart = new shoppingCart();
           let guava = {
                itemId: 3,
                price: 6.00,
            }

            let milk = {
                itemId: 24,
                price: 5.05,
            }

            let salt = {
                itemId: 12,
                price: 3.75,
            }
            let chocolate = {
                itemId: 14,
                price: 2.5,
            }
        cart.scan(guava,milk,salt);
        expect(cart.item()).toEqual([guava,milk,salt]);
        cart.scan(chocolate);
        expect(cart.item()).toEqual([guava,milk,salt,chocolate]);
        
    })
    it("should remove an item from cart", function () {
        let cart = new shoppingCart(
            guava = {
                itemId: 3,
                price: 6.00,
            },

            milk = {
                itemId: 24,
                price: 5.05,
            },

            salt = {
                itemId: 12,
                price: 3.75,
            },
            chocolate = {
                itemId: 14,
                price: 2.5,
            })
        expect(cart.remove(milk = {
            itemId: 42,
            price: 5.05,
        })).toEqual([guava = {
            itemId: 3,
            price: 6.00,
        },
        salt = {
            itemId: 12,
            price: 3.75,
        },
        chocolate = {
            itemId: 14,
            price: 2.5,
        }
        ])

    })
})