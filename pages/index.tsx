import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
// import Image from "next/image";
// import styles from '@/styles/Home.module.scss'


export default function Home({country}) {
    console.log(country, 'country')
    return (
        <div>
            <Header country={country}/>
            <Footer country={country}/>
        </div>
    )
}

export async function getServerSideProps() {
    let data = await axios
        .get("https://api.ipregistry.co/?key=8jt8fpwida8u907n")
        .then((res) => {
            return res.data.location.country;
        })
        .catch((err) => {
            console.log(err);
        });

    return {
        props: {
            country: {
                name: data.name,
                flag: data.flag.emojitwo
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

