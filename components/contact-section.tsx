"use client";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hubungi <span className="text-white">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Siap membantu kebutuhan teknologi Anda. Konsultasi gratis untuk
            solusi terbaik.
          </p>
        </motion.div>

        <div className="flex gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Informasi Kontak
            </h3>

            <div className="w-full flex justify-between space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Telepon</h4>
                  <p className="text-neutral-300">+62 812-3252-8421</p>
                  <p className="text-neutral-300">+62 851-5657-0225</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-neutral-300">info@maskokoit.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Alamat</h4>
                  <p className="text-neutral-300">
                    Jl. Siwalankerto Permai I No.B-21,<br /> Kec.
                    Wonocolo
                    <br />
                    Surabaya, Jawa Timur 60115
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Jam Operasional
                  </h4>
                  <p className="text-neutral-300">
                    Senin - Jumat: 08:00 - 17:00
                  </p>
                  <p className="text-neutral-300">Sabtu: 08:00 - 15:00</p>
                  <p className="text-neutral-300">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
