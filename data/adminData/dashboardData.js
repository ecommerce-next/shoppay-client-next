import {v4 as uuidv4} from "uuid";
import {MdOutlineCategory, MdSpaceDashboard,} from "react-icons/md";
import {FcSalesPerformance} from "react-icons/fc";
import {IoListCircleSharp, IoNotificationsSharp} from "react-icons/io5";
import {ImUsers} from "react-icons/im";
import {AiFillMessage} from "react-icons/ai";
import {FaRegUserCircle, FaThList} from "react-icons/fa";
import {BsPatchPlus} from "react-icons/bs";
import {RiCoupon3Fill, RiSettingsLine,} from "react-icons/ri";
import {VscHome} from "react-icons/vsc";
export const dropdownList = [
    {
        id: uuidv4(),
        path: "/admin/dashboard",
        icon: <MdSpaceDashboard/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/sales",
        icon: <FcSalesPerformance/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/orders",
        icon: <IoListCircleSharp/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/users",
        icon: <ImUsers/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/messages",
        icon: <AiFillMessage/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/product/all",
        icon: <FaThList/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/product/create",
        icon: <BsPatchPlus/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/categories",
        icon: <MdOutlineCategory />
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/subCategories",
        icon: <MdOutlineCategory />
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/product/coupons",
        icon: <RiCoupon3Fill/>
    }
];

export const dropdownList2 = [
    {
        id: uuidv4(),
        path: "/admin/dashboard",
        icon: <VscHome/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/users",
        icon: <FaRegUserCircle/>
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/notification",
        icon:  <IoNotificationsSharp />
    },
    {
        id: uuidv4(),
        path: "/admin/dashboard/settings",
        icon: <RiSettingsLine />
    }
];
