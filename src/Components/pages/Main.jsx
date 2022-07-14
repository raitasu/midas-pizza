import React from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaSkeleton from "../PizzaItem/PizzaSkeleton";
import PizzaItem from "../PizzaItem";

const Main = () => {

    const [items, setItems] = React.useState([])
    const [pizzaCategory, setPizzaCategory] = React.useState('All')
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'popularity',
        sortProperty: 'rating'
    })

    const onClickCategory = (i, category) => {
        setCategoryId(i)
        setPizzaCategory(category)

    }
    const onChangeSort = (sortValue) => {

        setSortType(sortValue)
    }

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62bf82520bc9b125616e79b6.mockapi.io/pizza/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}`)
            .then(response => response.json())
            .then(json => {
                (setItems(json))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType])


    return (
        <div className="container">

            <div className="content__top">
                <Categories activeIndex={categoryId}
                            onClickCategory={onClickCategory}/>
                <Sort value={sortType} onChangeSort={onChangeSort}/>
            </div>
            <h2 className="content__title">{pizzaCategory + ' pizzas'}</h2>
            <div className="content__items">
                {isLoading ? [...new Array(10)].map((_, index) => <PizzaSkeleton
                    key={index}/>) : items.map((el, index) => <PizzaItem
                    key={index} {...el} />)}
            </div>
        </div>
    );
};

export default Main;