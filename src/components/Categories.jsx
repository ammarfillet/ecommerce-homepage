import categories from '../data/categories.json'


export default function Categories() {
return (
<section id="categories" className="section">
<div className="container-px">
<div className="flex items-end justify-between mb-6">
<h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
<a href="#" className="text-sm text-accent hover:underline">View all</a>
</div>


<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
{categories.map((c) => (
<a key={c.id} href="#" className="card overflow-hidden group">
<div className="aspect-[4/3] bg-gray-100 overflow-hidden">
<img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition"/>
</div>
<div className="p-3">
<div className="font-medium">{c.name}</div>
<div className="text-xs text-gray-500">{c.items} items</div>
</div>
</a>
))}
</div>
</div>
</section>
)
}