import { style } from '@mui/system'
import React from 'react'
import * as FaIcon from "react-icons/md"
export const SidebarData = [
    {
        title: "Dashboard",
        icon: <FaIcon.MdDashboardCustomize/>,
        link: "/dashboard",
        cName  : 'nav-text'
    },
    {
        title: "User Access",
        icon: <FaIcon.MdAccountCircle/>,
        link: "/user-access",
        cName  : 'nav-text'
    }
]