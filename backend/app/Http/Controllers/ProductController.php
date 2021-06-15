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
        $product->author=$req->input('author');
        $product->isbn=$req->input('isbn');
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
    function searchAll($key)
    {
        return Product::where('name','Like', "%$key%")
        ->orwhere('author','Like', "%$key%")
        ->orwhere('isbn','Like', "%$key%")
        ->orwhere('price','Like', "%$key%")
        ->get();
    }
    function searchbyName($key)
    {
        return Product::where('name','Like', "%$key%")->get();
    }
    function searchbyAuthor($key)
    {
        return Product::where('author','Like', "%$key%")->get();
    }
    function searchbyISBN($key)
    {
        return Product::where('isbn','Like', "%$key%")->get();
    }
    function searchbyPrice($key)
    {
        return Product::where('price','Like', "%$key%")->get();
    }
}
