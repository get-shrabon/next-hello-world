export default function ProductId({ params }: { params: { productId: string } }) {
	return (
		<div>
			<h1>Product {params.productId} Details</h1>
		</div>
	);
}
