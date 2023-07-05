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
        route: '/admin/dashboard',
        data: "Dashboard"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/sales",
        icon: <FcSalesPerformance/>,
        route: '/admin/dashboard/sales',
        data: "Sales"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/orders",
        icon: <IoListCircleSharp/>,
        route: '/admin/dashboard/orders',
        data: "Orders"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/users",
        icon: <ImUsers/>,
        route: '/admin/dashboard/users',
        data: "Users"
    },
    {
        id: uuidv4(),
        link: "/admin/dashboard/messages",
        icon: <AiFillMessage/>,
        route: '/admin/dashboard/messages',
        data: "Messages"
    }
];

export const sidebarDropdown = {
    product: {
        id: uuidv4(),
        title: "Product",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/product/all",
                route: "/admin/dashboard/product/all",
                icon: <FaThList/>,
                data: "All Products"
            },
            {
                id: uuidv4(),
                link: "/admin/dashboard/product/create",
                route: "/admin/dashboard/product/create",
                icon: <BsPatchPlus/>,
                data: "Create Product"
            }
        ],
    },

    category: {
        id: uuidv4(),
        title: "Categories / Subs",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/categories",
                route: "/admin/dashboard/categories",
                icon: <MdOutlineCategory/>,
                data: "Categories"
            },
            {
                id: uuidv4(),
                link: "/admin/dashboard/subCategories",
                route: "/admin/dashboard/subCategories",
                icon: <MdOutlineCategory/>,
                data: "Sub Categories"
            }
        ]
    },
    coupon: {
        id: uuidv4(),
        title: "Coupons",
        list: [
            {
                id: uuidv4(),
                link: "/admin/dashboard/coupon",
                route: "/admin/dashboard/coupon",
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

