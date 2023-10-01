import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi"

type Props = {
    categorys: string[];
    selectedCategory: string;
    handleCategory: (category: string) => void;
}

const Category = ({ categorys, selectedCategory, handleCategory }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className=' max-md:bg-slate-200 mb-2 p-2 rounded-2xl'>
            <div className="md:hidden " onClick={handleMenuClick}>
                <button
                    className="block text-gray-700 hover:text-blue-500 focus:outline-none"
                >
                    <HiMenuAlt1 size={30} />
                </button>
            </div>
            <div className={`md:flex md:flex-wrap ${isOpen ? 'block' : 'hidden'} pt-2 flex max-md:flex-col justify-center items-center `}>
                {categorys.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            handleCategory(category);
                            handleLinkClick();
                        }}
                        className={`${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-700'
                            } px-4 py-2 mx-3 mb-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 max-md:w-36`}
                    >
                        {category === "all" ? "All" : category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;
