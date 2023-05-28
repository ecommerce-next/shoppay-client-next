import {createRouter} from 'next-connect';
import User from "../../../../models/User";
import db from "../../../../utils/db";
import auth from "../../../../middleware/auth";

const router = createRouter().use(auth);

router.delete(async (req, res) => {
    try {
        await db.connectDb();
        const id = req.query.id;
        const user = await User.findById(req.user);
        await user.updateOne({$pull: {address: {_id: id}},}, {new: true});

        await db.disconnectDb();


       return res.json({
            addresses: user.address.filter((a) => {
                console.log(a._id, id)
                    return a._id !== id
                }
            )
        });

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default router.handler()
