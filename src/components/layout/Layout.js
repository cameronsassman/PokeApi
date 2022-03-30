import { Fragment } from "react";

import Types from '../ui/Types'
import classes from './Layout.module.css'
import Navbar from "./Navbar";

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {/* <Types /> */}
                <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout