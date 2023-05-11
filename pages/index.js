import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import db from "../utils/db";
import { useSession } from "next-auth/react";
import styles from "../styles/home.module.scss";
import Main from "../components/home/main";
import FlashDeals from "../components/home/flashDeals";
import { useMediaQuery } from "react-responsive";
import Category from "../components/home/category";
import {
    women_accessories,
    women_dresses,
    women_shoes,
    women_swiper,
    gamingSwiper,
    homeImprovSwiper,
} from "../data/home";
import ProductsSwiper from "../components/productsSwiper";
import Product from "../models/Product";
import ProductCard from "../components/productCard";

export default function Home({country, products}) {
    console.log("products", products);
    const { data: session } = useSession()
    const isMedium = useMediaQuery({ query: "(max-width:850px)" });
    const isMobile = useMediaQuery({ query: "(max-width:550px)" });

    return (
        <>
            <Header country={country} />
            <div className={styles.home}>
                <div className={styles.container}>
                    <Main />
                    <FlashDeals />

                    <div className={styles.home__category}>
                        <Category
                            header="Dresses"
                            products={women_dresses}
                            background="#5a31f4"
                        />
                        {!isMedium && (
                            <Category
                                header="Shoes"
                                products={women_shoes}
                                background="#3c811f"
                            />
                        )}
                        {isMobile && (
                            <Category
                                header="Shoes"
                                products={women_shoes}
                                background="#3c811f"
                            />
                        )}
                        <Category
                            header="Accessories"
                            products={women_accessories}
                            background="#000"
                        />
                    </div>

                    <ProductsSwiper products={women_swiper} />
                    <ProductsSwiper
                        products={gamingSwiper}
                        header="For Gamers"
                        bg="#2f82ff"
                    />
                    <ProductsSwiper
                        products={homeImprovSwiper}
                        header="House Improvements"
                        bg="#5a31f4"
                    />


                    <div className={styles.products}>
                        {products.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer country={country} />
        </>
    )
}

export async function getServerSideProps() {
    await db.connectDb();
    let products = await Product.find().sort({ createdAt: -1 }).lean();

    let data = await axios
        .get(`https://api.ipregistry.co/?key=${process.env.GEOLOCATION_KEY}`)
        .then((res) => {
            return res.data.location.country;
        })
        .catch((err) => {
            console.log(err);
        });

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),

            //TODO dont use it in dev mode, will change for prod
            // country: {
            //     name: data.name,
            //     flag: data.flag.emojitwo
            // },
            country: {
                name: "United State",
                flag: "https://www.seekpng.com/png/full/3-34817_picture-download-american-flag-clipart-no-background-transparent.png",
            },
        }
    }
}
