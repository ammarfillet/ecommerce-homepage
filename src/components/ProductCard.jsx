const idr = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)


export default function ProductCard({ p }) {
return (
<a href="#" className="card overflow-hidden group">
<div className="aspect-square bg-gray-100 overflow-hidden">
<img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition"/>
</div>
<div className="p-4">
<div className="text-sm text-accent">{p.badge}</div>
<div className="font-semibold leading-snug">{p.name}</div>
<div className="mt-1 text-sm text-gray-600 line-clamp-2">{p.subtitle}</div>
<div className="mt-3 flex items-center justify-between">
<div className="font-bold">{idr(p.price)}
{p.compareAt && (
<span className="ml-2 text-xs text-gray-400 line-through">{idr(p.compareAt)}</span>
)}
</div>
<button className="btn-primary text-sm">Tambah ke keranjang</button>
</div>
</div>
</a>
)
}