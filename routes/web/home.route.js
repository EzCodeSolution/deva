const express=require('express')
const router=express.Router()
const homecontroller=require("../../controllers/web/home.controller")

router.get("/",homecontroller.gethome)
router.get("/product",homecontroller.getProduct)
router.get("/register",homecontroller.getregister)
router.get("/wishlist",homecontroller.getwishlist)
router.get("/viewproduct",homecontroller.getViewProduct)
router.get("/cart",homecontroller.getCart)
module.exports=router;