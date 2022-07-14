import React from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaSkeleton from "../PizzaItem/PizzaSkeleton";
import PizzaItem from "../PizzaItem";
import sort from "../Sort";

const Main = () => {

    const [items, setItems] = React.useState([])
    const [pizzaCategory, setPizzaCategory] = React.useState('All')
    const [isLoading, setIsLoading] = React.useState(true)

    const [categoryId, setCategoryId] = React.useState(0);

    const [sortType, setSortType] = React.useState(sort[0])

    const onClickCategory = (value) => {
        setCategoryId(value)
    }
    const onClickSort = (value) => {
        setSortType(value)
    }
    React.useEffect(() => {

        fetch('https://62bf82520bc9b125616e79b6.mockapi.io/pizza/items')
            .then(response => response.json())
            .then(json => {
                (setItems(json))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container">

            <div className="content__top">
                <Categories setPizzaCategory={setPizzaCategory} activeIndex={categoryId}
                            onClickCategory={onClickCategory}/>
                {/*<Sort sortItem={sortType} onClickSort={onClickSort()}/>*/}
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