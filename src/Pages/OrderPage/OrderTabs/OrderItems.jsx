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
    const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
    const [menu] = useMenu()


    const dessert = menu.filter(item => item.category == "salad");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drink = menu.filter(item => item.category === "drinks");

    const data = [salad, pizza, soup, dessert, drink];

    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-4 md:mb-20'>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                {/* Tab Titles */}
                <TabList>
                    <div className='text-center space-x-5 '>
                        {categories.map((category, index) => (
                            <Tab key={index}>{category}</Tab>
                        ))}
                    </div>
                </TabList>


                {/* Tab Content */}
                {data.map((items, index) => (
                    <TabPanel key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-10">
                            {items.length > 0 ? (
                                items.map(item => (
                                    <FoodCard key={item._id} item={item} />
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
