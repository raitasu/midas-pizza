import React from "react";

const Categories = (props) => {

    const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

    const changeIndexValue = (index, category) => {
        props.onClickCategory(index,category);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={index}
                            className={props.activeIndex === index ? "active" : ""}
                            onClick={() => changeIndexValue(index, category)}
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
