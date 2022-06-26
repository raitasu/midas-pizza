import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaItem from "./Components/PizzaItem";
import pizza from "./assets/pizzaItems.json";

function App() {
    const [pizzaCategory, setPizzaCategory] = React.useState('All')
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
                        {pizza.map((el, index) => {
                            return <PizzaItem key={index} {...el} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
