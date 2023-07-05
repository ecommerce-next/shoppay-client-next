import {createRouter} from "next-connect";
import admin from "../../../middleware/admin";
import auth from "../../../middleware/auth";
import Category from "../../../models/Category";
import db from "../../../utils/db";
import slugify from "slugify";

const router = createRouter().use(auth).use(admin);

router.post(async (req, res) => {
    try {
        const {name} = req.body;
        await db.connectDb();
        const test = await Category.findOne({name});
        if (test) {
            return res
                .status(400)
                .json({message: "Category already exist, Try a different name"});
        }
        await new Category({name, slug: slugify(name)}).save();

        await db.disconnectDb();
        res.json({
            message: `Category ${name} has been created successfully.`,
            categories: await Category.find({}).sort({updatedAt: -1}),
        });
    } catch (error) {
        await db.disconnectDb();
        res.status(500).json({message: error.message});
    }
});

router.delete(async (req, res) => {
    try {
        const {id} = req.body;
        await db.connectDb();
        await Category.findByIdAndRemove(id);
        await db.disconnectDb();
        return res.json({
            message: "Category has been deleted successfully",
            categories: await Category.find({}).sort({updatedAt: -1}),
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.put(async (req, res) => {
    try {
        const {id, name} = req.body;
        await db.connectDb();
        await Category.findByIdAndUpdate(id, {name});
        await db.disconnectDb();
        return res.json({
            message: "Category has been updated successfully",
            categories: await Category.find({}).sort({createdAt: -1}),
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router.handler()
