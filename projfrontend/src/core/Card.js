import React from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

//TODO: Deal with this later
const isAuhenticated = true;

const Card = ({ product, addtoCart = true, removeFromCart = true }) => {
	const cartTitle = product ? product.name : "A photo from pexels";
	const cartDescription = product ? product.description : "Default description";
	const cartPrice = product ? product.price : "Default";

	const addToCart = () => {
		if (isAuhenticated) {
			addItemToCart(product, () => {});
			console.log("Added to cart");
		} else {
			console.log("Login Please!");
		}
	};

	const getAredirect = redirect => {
		if (redirect) {
			return <Redirect to="/cart" />;
		}
	};

	const showAddToCart = addToCart => {
		return (
			addToCart && (
				<button onClick={addToCart} className="btn btn-block btn-outline-success mt-2 mb-2">
					Add to Cart
				</button>
			)
		);
	};

	const showRemoveFromCart = addToCart => {
		return (
			addToCart && (
				<button
					onClick={() => {
						//TODO: handle this too
						removeItemFromCart(product.id);
						console.log("Product removed from cart");
					}}
					className="btn btn-block btn-outline-danger mt-2 mb-2">
					Remove from cart
				</button>
			)
		);
	};

	return (
		<div className="card text-white bg-transparent border border-info ">
			<div className="card-header lead">{cartTitle}</div>
			<div className="card-body">
				<ImageHelper product={product} />
				<p className="lead bg-success font-weight-normal text-wrap">{cartDescription}</p>
				<p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
				<div className="row">
					<div className="d-grid col-12">{showAddToCart(addToCart)}</div>
					<div className="d-grid col-12">{showRemoveFromCart(removeFromCart)}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
