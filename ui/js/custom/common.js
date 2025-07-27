
var productListApiUrl = 'http://127.0.0.1:5000/getProducts';
var uomListApiUrl = 'http://127.0.0.1:5000/getUOM';
var productSaveApiUrl = 'http://127.0.0.1:5000/insertProduct';
var productDeleteApiUrl = 'http://127.0.0.1:5000/deleteProduct';
var orderListApiUrl = 'http://127.0.0.1:5000/getAllOrders';
var orderSaveApiUrl = 'http://127.0.0.1:5000/insertOrder';
var productsApiUrl = 'https://fakestoreapi.com/products';

function callApi(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data
    }).done(function( msg ) {
        window.location.reload();
    });
}

function calculateValue() {
    var total = 0;
    $(".product-item").each(function( index ) {
        var qty = parseFloat($(this).find('.product-qty').val());
        var price = parseFloat($(this).find('#product_price').val());
        price = price*qty;
        $(this).find('#item_total').val(price.toFixed(2));
        total += price;
    });
    $("#product_grand_total").val(total.toFixed(2));
}


function orderParser(order) {
    return {
        id: order.order_id,                     
        date: order.datetime,                   
        orderNo: `ORD-${order.order_id}`,       
        customerName: order.customer_name,     
        cost: parseFloat(order.total)           
                  
    };
}



function productParser(product) {
    return {
        id: product.product_id,         
        name: product.name,             
        unit: product.uom_name,         
        price: parseFloat(product.price_per_unit)  
    };
}


function productDropParser(product) {
    return {
        id : product.id,
        name : product.title
    }
}

