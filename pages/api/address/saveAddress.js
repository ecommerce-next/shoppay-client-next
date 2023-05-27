import { createRouter } from 'next-connect';
import User from "../../../models/User";
import db from "../../../utils/db";
import auth from "../../../middleware/auth";
const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    await db.connectDb();
    const { address } = req.body;
    console.log(address, 'address')
    const user = User.findById(req.user);
    await user.updateOne({
      $push: {
        address: address,
      },
    });
    await db.disconnectDb();
    return res.json({ addresses: user.address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler()
