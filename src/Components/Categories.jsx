import React from 'react';

const Categories = () => {

    const [activeIndex, setActiveIndex] = React.useState(0)


    const changeIndexValue = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeIndex === 0 ? 'active' : ''} onClick={() => changeIndexValue(0)}>Все
                </li>
                <li className={activeIndex === 1 ? 'active' : ''} onClick={() => changeIndexValue(1)}>Мясные
                </li>
                <li className={activeIndex === 2 ? 'active' : ''} onClick={() => changeIndexValue(2)}>Вегетарианская
                </li>
                <li className={activeIndex === 3 ? 'active' : ''} onClick={() => changeIndexValue(3)}>Гриль
                </li>
                <li className={activeIndex === 4 ? 'active' : ''} onClick={() => changeIndexValue(4)}>Острые
                </li>
                <li className={activeIndex === 5 ? 'active' : ''} onClick={() => changeIndexValue(5)}>Закрытые
                </li>
            </ul>
        </div>

    );
};

export default Categories;