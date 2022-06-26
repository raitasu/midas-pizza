import "./App.css";
import "./scss/app.scss";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaItem from "./Components/PizzaItem";
import pizza from "./assets/pizzaItems.json";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizza.map((el) => {
                            return <PizzaItem {...el} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
