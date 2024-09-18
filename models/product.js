const path = require("path");
const fs = require("fs");

const products = [];

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    console.log(cb);
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Products{
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save(){ 
        getProductsFromFile( products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        console.log(this.imageUrl);
        getProductsFromFile(cb);
    }
}