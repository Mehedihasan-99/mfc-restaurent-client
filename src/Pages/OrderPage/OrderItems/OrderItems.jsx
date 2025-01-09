import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

const OrderItems = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [ menu, loading ]  = useMenu()


    const dessert = menu.filter(item => item.category == "salad");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drink = menu.filter(item => item.category === "drink");

    const data = [salad, pizza, soup, dessert, drink];


    // Filter menu items by category
    console.log("data", menu )
    if (loading) {
        return <p>Loading menu .....</p>
    }

    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-4 md:mb-20'>
            { menu.length}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                {/* Tab Titles */}
                <TabList>
                    {categories.map((category, index) => (
                        <Tab key={index}>{category}</Tab>
                    ))}
                </TabList>


                {/* Tab Content */}
                {data.map((items, index) => (
                    <TabPanel key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {items.length > 0 ? (
                                items.map(item => (
                                    <FoodCard key={item.id} item={item} />
                                ))
                            ) : (
                                <p>No items available in this category.</p>
                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default OrderItems;
