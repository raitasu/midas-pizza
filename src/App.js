import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaItem from "./Components/PizzaItem";

function App() {


    const [items, setItems] = React.useState([])
    const [pizzaCategory, setPizzaCategory] = React.useState('All')

    React.useEffect(() => {

        fetch('https://62bf82520bc9b125616e79b6.mockapi.io/pizza/items')
            .then(response =>response.json())
            .then(json => setItems(json) )

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
                        {items.map((el, index) => {
                            return <PizzaItem key={index} {...el} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
