import nc, {createRouter} from "next-connect";
import auth from "../../../../middleware/auth";
import Order from "../../../../models/Order";
import db from "../../../../utils/db";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    await db.connectDb();
    console.log(req.body);
    const { amount, id } = req.body;
    const order_id = req.query.id;
    const payment = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "USD",
      description: "Ir Store",
      payment_method: id,
      confirm: true,
    });

    const order = await Order.findById(order_id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.status = payment.status,
      order.paymentResult = {
        id: payment.id,
        status: payment.status,
        email_address: payment.email_address,
      };
      await order.save();
      res.json({
        success: true,
      });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
    await db.disconnectDb();
  } catch (error) {
    console.log(error);
    await db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default router.handler();
