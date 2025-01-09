import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../Components/Button/Button';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, img, title, description }) => {
    return (
        <div>
            {title && <Cover
                img={img}
                title={title}
                description={description}
            />}
            <div className='flex flex-col items-center w-11/12 md:w-10/12 mx-auto mb-4 md:mb-20'>
                <div className='grid lg:grid-cols-2 gap-4 mb-4 md:mb-10'>
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        />)
                    }
                </div>
                <Button text="order ypur favourite food" />
            </div>
        </div>
    );
};

export default MenuCategory;