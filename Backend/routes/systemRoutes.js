import { Router } from 'express';
const router = Router();

import { getProduct, addToCart } from '../controller/ProductDetailsController';

import { createCustomer, LoginUser, getSeller, verifyToken, updateUser, setAsSeller } from '../controller/AdminUserController';
import { getCategory, addProduct, getAllProductsFromSeller, updateProduct, deleteProduct, getTopSellingProducts, getNewlyAddedProducts, getProductsByCategory, getproductcount, getProductsByMainCategory } from '../controller/ProductController';
import { getCart, getCartDetails, deleteCartItem, changeQty, checkCart, cartSize } from '../controller/CartController';
import { getCustomerOrders, getSalesAmount, getOrders, getOrderItems, updateTracking, updateStatus, deleteOrder, getcustomerinfo, putOrder } from '../controller/OrderController';
import { getReccomnederProduct } from '../controller/RecomenderSystemComtroller';

//const apriory = require('../controller/RecomenderSystemComtroller')

router.post('/registerUser', createCustomer);
router.post('/loginUser', LoginUser);
router.get('/getSeller', getSeller);
router.get('/verifyToken', verifyToken);

router.get('/getCategory',getCategory);
router.post('/addProduct',addProduct);
router.get('/getAllProductsFromSeller',getAllProductsFromSeller)
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)

router.get('/getCustomerOrders',getCustomerOrders)

router.get('/sales',getSalesAmount)

router.get('/getOrders',getOrders)
router.get('/getOrderItems',getOrderItems)
router.put('/updateTracking',updateTracking)
router.put('/updateOrderStatus',updateStatus)
router.delete('/deleteOrder/:id',deleteOrder)
router.post('/customer',getcustomerinfo)
router.post('/putorder',putOrder)

router.put('/updateCustomer/:id',updateUser)
router.post('/setAsSeller/:id',setAsSeller)

router.get('/top-selling-products', getTopSellingProducts); 
router.get('/newly-added-products', getNewlyAddedProducts);
router.get('/products/:categoryId/:subcategoryId', getProductsByCategory) 
router.get('/categoryCount/:categoryId',getproductcount);

router.get('/:categoryName/:categoryID/:count',getProductsByMainCategory);

router.get('/product/:id', getProduct); 
router.post('/product', addToCart)

router.post('/cart', getCart);
router.get('/cart/:id', getCartDetails);
router.delete('/cart', deleteCartItem);
router.put('/cart/:id', changeQty);
router.post('/checkcart', checkCart);
router.get('/cartsize/:id',cartSize)

router.get('/productRCMND/:id', getReccomnederProduct)



export default router;
