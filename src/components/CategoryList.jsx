export default function CategoryList() {
  const categories = [
    'Beras dan biji-bijian',
    'Minyak dan Bumbu Dapur',
    'Protein Hewani',
    'Sayur-sayuran',
    'Buah-buahan',
    'Minuman dan Susu'
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-4">Kategori Belanja</h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className="block text-left font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}