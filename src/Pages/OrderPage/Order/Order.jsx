import { Helmet } from "react-helmet-async";
import orderImg from "../../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import OrderItems from "../OrderTabs/OrderItems";


const Order = () => {
    return (
        <div>
            <Helmet>
                <title> MFC Restaurant | Order Food </title>
            </Helmet>
            <Cover img={orderImg} title="our shop" description="WOULD YOU LIKE TO TRY A DISH ?" />
            <OrderItems />
        </div>
    );
};

export default Order;