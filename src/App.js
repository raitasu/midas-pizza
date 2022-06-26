import './App.css';
import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaItem from "./Components/PizzaItem";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/4aec6cc08719404e94262698eb014cba_584x584.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/1b7bccc8aa744d7daf8da8b799c5fbec_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/736df54c94c44518a90a3ccffe7febdd_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/9c266b8abec94fbea60cd33df77144bf_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/b874c264095743d1afecf577e6690cea_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/dd79285be26a40fbbc5041f04e0f8d9d_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/2cf85a1db20b475296f4862ef6debdb5_292x292.jpeg'}/>
                        <PizzaItem title={'Гавайская'} pizza={'https://dodopizza-a.akamaihd.net/static/Img/Products/9ab9494fb4c84dc2a545e82e719230a4_292x292.jpeg'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
