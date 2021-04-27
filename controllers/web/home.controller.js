const gethome=(req, res)=>{
    res.render("web/index")
}
const getregister=(req,res)=>{
    res.send("register")
}
const getwishlist=(req, res)=>{
    res.render("web/wishlist")
}

const getProduct =(req,res)=>{
    res.render("web/product")
}

const getViewProduct = (req,res) => {
    res.render("web/viewproduct")
}

const getCart = (req,res) =>{
    res.render("web/cart")
}

 module.exports={
     gethome : gethome,
     getregister : getregister,
     getwishlist : getwishlist,
     getProduct : getProduct,
     getViewProduct : getViewProduct,
     getCart : getCart
 }