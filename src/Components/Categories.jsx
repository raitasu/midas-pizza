import React from "react";

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

    const changeIndexValue = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={index}
                            className={activeIndex === index ? "active" : ""}
                            onClick={() => changeIndexValue(index)}
                        >
                            {category}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
