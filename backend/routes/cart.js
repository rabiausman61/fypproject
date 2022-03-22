const express = require("express");
const router = express.Router();
const userlogin = require("../routes/auth");
const middleware = require("../middleware/fetchuser");
const Cart = require("../models/Cart");

router.post("/createitems", userlogin, middleware, (req, res) => {
  Cart.findOne({ user: req.user.id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    //if cart is existing update by quantity
    if (cart) {
      const productexists = cart.items.find(
        (c) => c.productId == req.body.items.productId
      );
// if item exists capture item and then increase the quantity
      if (productexists) {
        Cart.findOneAndUpdate(
          { 'user': req.user.id,"items.productId": req.body.items.productId},
          {
            $set: {
              "items.$": {
                ...req.body.items,
                quantity: productexists.quantity+req.body.items.quantity,
              }
            },
          }
        ).exec((error, c) => {
          if (error) return res.status(400).json({ error });

          if (c) return res.status(200).json({ cart: c });
        });
      } else {
        Cart.findOneAndUpdate(
          { user: req.user.id },
          {
            $push: {
              items: req.body.items
            },
          }
        ).exec((error, c) => {
          if (error) return res.status(400).json({ error });

          if (c) return res.status(200).json({ cart: c });
        });
      }
    }

    //// if not existing create a cart
    else {
      const cart = new Cart({
        user: req.user.id,
        items: [req.body.items],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });

        if (cart) {
          return res.status(200).json({ cart });
        }
      });
    }
  });
});

module.exports = router;
