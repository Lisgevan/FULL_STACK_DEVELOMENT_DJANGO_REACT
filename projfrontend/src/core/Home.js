import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls.js";
import Base from "./Base.js";
import Card from "./Card.js";
import "../styles.css";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	const loadAllProducts = () => {
		getProducts().then(data => {
			if (data.error) {
				setError(data.error);
				console.log(error);
			} else {
				setProducts(data);
			}
		});
		// .catch( err => console.log( err ) )
	};

	useEffect(() => {
		loadAllProducts();
	}, []);

	return (
		<Base title="Home Page" description="Welcome to Tshirt store">
			<h1>Home component</h1>
			<div className="row">
				{products.map((product, index) => {
					return (
						<div key={index} className="col-4 mb-4">
							<Card product={product} />
						</div>
					);
				})}
			</div>
		</Base>
	);
}
