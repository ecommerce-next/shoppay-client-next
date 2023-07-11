import {v4 as uuidv4} from "uuid";

export const sidebarData = [
    {
        id: uuidv4(),
        heading: "My Account",
        links: [
            {
                name: "My Profile",
                link: "/profile",
            },
            {
                name: "Addresses",
                link: "/profile/address",
            },
            {
                name: "My Payment Options",
                link: "/profile/payment",
            },
            {
                name: "Account Security",
                link: "/profile/security",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "My Orders",
        links: [
            {
                name: "All Orders",
                link: "/profile/orders",
                filter: "",
            },
            {
                name: "Paid Orders",
                link: "/profile/orders",
                filter: "paid",
            },
            {
                name: "Unpaid Orders",
                link: "/profile/orders",
                filter: "unpaid",
            },

            {
                name: "Processing Orders",
                link: "/profile/orders",
                filter: "Processing",
            },
            {
                name: "Unprocessed Orders",
                link: "/profile/orders",
                filter: "Not Processed",
            },
            {
                name: "Dispatched Orders",
                link: "/profile/orders",
                filter: "Dispatched",
            },
            {
                name: "Delivered Orders",
                link: "/profile/orders",
                filter: "Completed",
            },
            {
                name: "Cancelled Orders",
                link: "/profile/orders",
                filter: "Cancelled",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "My Lists",
        links: [
            {
                name: "WishList",
                link: "/profile/wishlist",
            },
            {
                name: "Recently Viewed",
                link: "/profile/recent",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "Customer Service",
        links: [
            {
                name: "My Message",
                link: "/profile/messages",
            },
            {
                name: "Service Records",
                link: "/profile/services",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "Other Services",
        links: [
            {
                name: "Survey Center",
                link: "",
            },
            {
                name: "Contact Preferences",
                link: "",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "Policy",
        links: [
            {
                name: "Shipping Info",
                link: "",
            },
            {
                name: "Return Policy",
                link: "",
            },
            {
                name: "Privacy & Cookie Policy",
                link: "",
            },
        ],
    },

    {
        id: uuidv4(),
        heading: "Sign out",
        link: [],
    },
];

export const ordersLinks = [
    {
        id: uuidv4(),
        name: "All Orders",
        filter: "",
    },
    {
        id: uuidv4(),
        name: "Paid Orders",
        filter: "paid",
    },
    {
        id: uuidv4(),
        name: "Unpaid Orders",
        filter: "unpaid",
    },
    {
        id: uuidv4(),
        name: "Processing Orders",
        filter: "Processing",
    },
    {
        id: uuidv4(),
        name: "Unprocessed Orders",
        filter: "Not Processed",
    },
    {
        id: uuidv4(),
        name: "Dispatched Orders",
        filter: "Dispatched",
    },
    {
        id: uuidv4(),
        name: "Delivered Orders",
        filter: "Delivered",
    },
    {
        id: uuidv4(),
        name: "Cancelled Orders",
        filter: "Cancelled",
    },
];
