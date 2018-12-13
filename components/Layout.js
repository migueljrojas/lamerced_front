import Head from "./Head";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = props => (
    <div>
        <Head />
        <Menu data={props.menu}/>
        {props.children}
        <Footer />
    </div>
);

export default Layout;
