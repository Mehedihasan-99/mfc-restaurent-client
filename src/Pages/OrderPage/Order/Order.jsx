import orderImg from "../../../assets/shop/banner2.jpg" 
import useMenu from "../../../Hooks/useMenu";
import Cover from '../../Shared/Cover/Cover';
import OrderItems from "../OrderItems/OrderItems";

const Order = () => {
    const [ menu ] = useMenu()

    console.log("menu:" , menu.length)
    
    return (
        <div>
            <Cover img={orderImg} title="our shop" description="WOULD YOU LIKE TO TRY A DISH ?"  />
            <OrderItems />
        </div>
    );
};

export default Order;