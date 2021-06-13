<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        $product = new Product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');
        $product->typeofbook=$req->input('typeofbook');
        $product->countInstock=$req->input('countInstock');
        $product->imageUrl=$req->file('file')->store('products');
        $product->save();

        return $product;
    }
    function getAllProducts()
    {
        return Product::all();
    }
    function getAllProductById($id)
    {
        $product = Product::all();
        return $product->find($id);
    }
}
