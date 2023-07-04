import {FcSalesPerformance} from "react-icons/fc";
import {IoListCircleSharp, IoNotificationsSharp} from "react-icons/io5";
import {ImUsers} from "react-icons/im";
import {AiFillMessage} from "react-icons/ai";
import {FaThList} from "react-icons/fa";
import {BsPatchPlus} from "react-icons/bs";
import {RiCoupon3Fill, RiLogoutCircleFill, RiSettingsLine} from "react-icons/ri";
import {MdOutlineCategory, MdSpaceDashboard} from "react-icons/md";
import {v4 as uuidv4} from 'uuid';

export const sidebarIconsMain = [
    {
        id: uuidv4(),
        link: "/admin/dashboard",
        icon: <MdSpaceDashboard/>,
        data: "Dashboard"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/sales",
        icon: <FcSalesPerformance/>,
        data: "Sales"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/orders",
        icon: <IoListCircleSharp/>,
        data: "Orders"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/users",
        icon: <ImUsers/>,
        data: "Users"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/messages",
        icon: <AiFillMessage/>,
        data: "Messages"
    }
];

export const sidebarDropdown = {
    product: {
        title: "Product",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/product/all",
                route: "product/all",
                icon: <FaThList/>,
                data: "All Products"
            },
            {
                id: uuidv4(),
                link: "/admin/dashboard/product/create",
                route: "product/create",
                icon: <BsPatchPlus/>,
                data: "Create Product"
            }
        ],
    },

    category: {
        title: "Categories / Subs",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/categories",
                route: "categories",
                icon: <MdOutlineCategory/>,
                data: "Categories"
            },
            {
                id: uuidv4(),
                link: "/admin/dashboard/subCategories",
                route: "subCategories",
                icon: <MdOutlineCategory/>,
                data: "Sub Categories"
            }
        ]
    },
    coupon: {
        title: "Coupons",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/coupon",
                route: "coupon",
                icon: <RiCoupon3Fill/>,
                data: "Coupons"
            }
        ]
    }
};

export const sidebarIconsBottom = [
    {
        id: uuidv4(),
        icon: <RiSettingsLine/>
    },
    {
        id: uuidv4(),
        icon: <IoNotificationsSharp/>
    },
    {
        id: uuidv4(),
        icon: <AiFillMessage/>
    },
    {
        id: uuidv4(),
        icon: <RiLogoutCircleFill/>
    }
]

