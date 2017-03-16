// JavaScript source code
var app = angular.module('app', []);
app.factory('productFactory', function ()
{
    var factory = {};
    var products = [];

    factory.getProducts = function (callback)
    {
        callback(products);
    }
    factory.delProduct = function (idx) 
    {
        products.splice(idx, 1);
    }
    factory.addProduct = function (data)
    {
        products.push(data);
    }
    factory.buyProduct = function(idx)
    {
        products[idx].pquantity -= 1;
    }
    return factory;
})

app.controller('productController', ['productFactory', function (productFactory)
{
    var self = this;
    this.productos = [];
   productFactory.getProducts(function (data)
   {
       self.sortType = 'pname';
       self.sortReverse = false;

       self.productos = data;
    })
    
    this.addPrdct = function()
    {
        this.newProduct.pquantity = 50;
        productFactory.addProduct(this.newProduct);
        this.newProduct = { pquantity: 50 };
    }

    this.delPrdct = function (idx)
    {
        productFactory.delProduct(idx);
    }
}])

app.controller('buyController', ['productFactory', function (productFactory)
{
    var self = this;
    this.productos = [];
    productFactory.getProducts(function (data)
    {
        self.sortType = 'pname';
        self.sortReverse = false;

        self.productos = data;
    })

    this.buyPrdct = function(idx)
    {
        console.log(idx);
        productFactory.buyProduct(idx);
    }
}])