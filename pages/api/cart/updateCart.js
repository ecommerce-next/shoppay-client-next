import {createRouter} from 'next-connect';
import Product from "../../../models/Product";
import db from "../../../utils/db";

const router = createRouter();

router.patch(async (req, res) => {
    try {
        await db.connectDb();
        const promises = req.body.products.map(async (p) => {
            let dbProduct = await Product.findById(p._id).lean();
            let originalPrice = dbProduct.subProducts[p.style].sizes.find(
                (s) => s.size == p.size
            ).price;
            let quantity = dbProduct.subProducts[p.style].sizes.find(
                (s) => s.size == p.size
            ).qty;
            let discount = dbProduct.subProducts[p.style].discount;
            return {
                ...p,
                priceBefore: Number(originalPrice),
                price: discount > 0 ? Number(originalPrice - originalPrice / discount).toFixed(2) : Number(originalPrice),
                discount,
                quantity,
                shippingFee: dbProduct.shipping,
            }
        });

        return res.json(await Promise.all(promises));

        await db.disconnectDb();

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default router.handler()
