import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
// import Image from "next/image";
// import styles from '@/styles/Home.module.scss'


export default function Home({country}) {
    return (
        <div>
            <Header country={country}/>
            <Footer country={country}/>
        </div>
    )
}

export async function getServerSideProps() {
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

/*
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
            */

