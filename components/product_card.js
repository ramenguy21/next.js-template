export default function ProductCard() {
    return (
        <div className="m-2 max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src='/placeholder_product.jpg'></img>
            <div className="p-2">
                <h1 className="text-lg font-bold">Sample Product Card</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}