const data = [
{ id: 1, name: 'Alya', text: 'Produk original, pengiriman cepat, recommended!', rating: 5 },
{ id: 2, name: 'Budi', text: 'Desain modern, kualitas mantap, worth it!', rating: 5 },
{ id: 3, name: 'Citra', text: 'CS responsif, proses gampang, mantap!', rating: 4 },
]


function Stars({ n }) {
return (
<div className="flex gap-1">
{Array.from({ length: 5 }).map((_, i) => (
<svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < n ? 'currentColor' : 'none'} stroke="currentColor" className={i < n ? 'text-yellow-500' : 'text-gray-300'}>
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
))}
</div>
)
}


export default function Testimonials() {
return (
<section className="section">
<div className="container-px">
<h2 className="text-2xl sm:text-3xl font-bold mb-6">What Customers Say</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{data.map(item => (
<div key={item.id} className="card p-5">
<Stars n={item.rating} />
<p className="mt-3 text-gray-700">“{item.text}”</p>
<div className="mt-4 text-sm text-gray-500">— {item.name}</div>
</div>
))}
</div>
</div>
</section>
)
}