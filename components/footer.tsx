export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              MASKOKO<span className="text-white">IT</span>
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Solusi IT terlengkap di Surabaya. Kami menyediakan layanan teknologi komprehensif untuk membantu bisnis
              dan individu mencapai tujuan mereka.
            </p>
            <p className="text-white font-semibold">Solusi IT Terlengkap di Surabaya</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>Website Company Profile</li>
              <li>Sistem IT Custom</li>
              <li>Instalasi Jaringan</li>
              <li>Rakit PC</li>
              <li>Reparasi Laptop</li>
              <li>Instalasi Software</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>+62 812-3456-7890</li>
              <li>info@maskokoit.com</li>
              <li>Surabaya, Jawa Timur</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">© 2024 MaskokoIT. All rights reserved. | Solusi IT Terlengkap di Surabaya</p>
        </div>
      </div>
    </footer>
  )
}
