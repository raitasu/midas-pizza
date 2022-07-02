import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaItem from "./Components/PizzaItem/";
import PizzaSkeleton from "./Components/PizzaItem/PizzaSkeleton";

function App() {


    const [items, setItems] = React.useState([])
    const [pizzaCategory, setPizzaCategory] = React.useState('All')
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {

        fetch('https://62bf82520bc9b125616e79b6.mockapi.io/pizza/items')
            .then(response => response.json())
            .then(json => {
                (setItems(json))
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories setPizzaCategory={setPizzaCategory}/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">{pizzaCategory + ' pizzas'}</h2>
                    <div className="content__items">
                        {isLoading ? [...new Array(6)].map((_, index) => <PizzaSkeleton
                            key={index}/>) : items.map((el, index) => <PizzaItem
                            key={index} {...el} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
