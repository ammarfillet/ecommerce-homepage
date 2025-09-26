export default function PromoBanner() {
return (
<section id="deals" className="section">
<div className="container-px">
<div className="card p-6 lg:p-10 grid lg:grid-cols-2 gap-6 items-center">
<div>
<div className="badge mb-3">Minggu Ini</div>
<h3 className="text-2xl sm:text-3xl font-bold">Panen Mingguan: hemat s/d 40%</h3>
<p className="mt-2 text-gray-600">Paket combo sayur hemat + gratis ongkir min. belanja Rp50.000.</p>
<a href="#" className="btn-primary mt-4">Cek Semua Promo</a>
</div>
<img className="w-full rounded-xl object-cover h-56 lg:h-72" src="https:/public/images.unsplash.com/photo-1505252778478-2f7a95b6c399?q=80&w=1600&auto=format&fit=crop" alt="Promo sayur" />
</div>
</div>
</section>
)
}