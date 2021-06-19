<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    function addOrder(Request $req)
    {
        $product = new Order;
        $product->name=$req->input('name');
        $product->user_id=$req->input('user_id');
        $product->product_id=$req->input('product_id');
        $product->price=$req->input('price');
        $product->countInstock=$req->input('countInstock');        
        $product->imageUrl=$req->input('imageUrl');
        $product->count=$req->input('count');
        $product->save();
        return $product;
    }
    function orderbyuser($key)
    {
        return Order::where('user_id','Like', "%$key%")->get();
    }
}
