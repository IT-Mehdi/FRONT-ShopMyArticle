import product from './img/product.png';
import Form from "./components/form/Form";
import './index.css';


function Shop() {

    return (
        <div className="container">
            <h1>Shop my article</h1>
            <h2>Shop our brand new product</h2>
            <img src={product} alt="produit"></img>
            <p>Avec ce pdf tu sauras écrire ton propre programme de sport pour atteindre tes objectifs !</p>
            <p className="price">Price : 99.99€</p>
            <Form></Form>
        </div>
    );
}

export default Shop;
