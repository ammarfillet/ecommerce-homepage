export default function Newsletter() {
return (
<section className="section">
<div className="container-px">
<div className="card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<h3 className="text-xl sm:text-2xl font-bold">Get 10% off your first order</h3>
<p className="text-gray-600 mt-1">Join our newsletter for updates and special offers.</p>
</div>
<form className="flex w-full sm:w-auto gap-2">
<input type="email" placeholder="Enter your email" required className="flex-1 sm:w-72 rounded-xl bg-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200" />
<button className="btn-primary">Subscribe</button>
</form>
</div>
</div>
</section>
)
}