import products from '../data/products.json'
import ProductCard from './ProductCard'


export default function ProductGrid() {
const featured = products.filter(p => p.featured)
return (
<section id="products" className="section">
<div className="container-px">
<div className="flex items-end justify-between mb-6">
<h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
<div className="text-sm text-gray-600">{featured.length} items</div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
{featured.map(p => (
<ProductCard key={p.id} p={p} />
))}
</div>
</div>
</section>
)
}