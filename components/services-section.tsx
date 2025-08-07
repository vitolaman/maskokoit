"use client"
import { motion } from "motion/react"
import { Globe, Settings, Network, Monitor, Wrench, Download } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Pembuatan Website Company Profile",
    description: "Website profesional yang mencerminkan identitas perusahaan Anda dengan desain modern dan responsif.",
    features: ["Desain Responsif", "SEO Optimized", "Content Management", "Mobile Friendly"],
  },
  {
    icon: Settings,
    title: "Pembuatan Sistem IT",
    description:
      "Solusi sistem informasi custom yang disesuaikan dengan kebutuhan bisnis dan workflow perusahaan Anda.",
    features: ["Custom Development", "Database Design", "API Integration", "User Management"],
  },
  {
    icon: Network,
    title: "Instalasi Jaringan",
    description:
      "Pemasangan dan konfigurasi jaringan komputer untuk kantor, warnet, atau rumah dengan performa optimal.",
    features: ["Network Setup", "WiFi Configuration", "Security Setup", "Maintenance"],
  },
  {
    icon: Monitor,
    title: "Rakit PC",
    description:
      "Perakitan komputer custom sesuai kebutuhan dan budget, dari PC gaming hingga workstation profesional.",
    features: ["Custom Build", "Gaming PC", "Office PC", "Workstation"],
  },
  {
    icon: Wrench,
    title: "Reparasi Laptop",
    description: "Layanan perbaikan laptop dengan diagnosa akurat dan penanganan cepat untuk berbagai jenis kerusakan.",
    features: ["Hardware Repair", "Software Troubleshooting", "Data Recovery", "Upgrade Components"],
  },
  {
    icon: Download,
    title: "Instalasi Software",
    description: "Instalasi dan konfigurasi software aplikasi, sistem operasi, dan program khusus sesuai kebutuhan.",
    features: ["OS Installation", "Software Setup", "License Management", "Configuration"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-black pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-white">Services</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Solusi teknologi komprehensif untuk semua kebutuhan IT Anda
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-neutral-800 rounded-xl p-8 hover:border-white transition-colors duration-300 group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-neutral-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
