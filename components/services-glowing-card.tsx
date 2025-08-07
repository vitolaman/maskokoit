"use client";

import { Globe, Monitor, Network, Settings, Wrench } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-card";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Globe className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Pembuatan Website Company Profile"
        description="Website profesional yang mencerminkan identitas perusahaan Anda dengan desain modern dan responsif."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Pembuatan Sistem IT."
        description="Solusi sistem informasi custom yang disesuaikan dengan kebutuhan bisnis dan workflow perusahaan Anda."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Network className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Instalasi Jaringan"
        description="Pemasangan dan konfigurasi jaringan komputer untuk kantor, warnet, atau rumah dengan performa optimal"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Monitor className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Rakit PC"
        description="Perakitan komputer custom sesuai kebutuhan dan budget, dari PC gaming hingga workstation profesional."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Wrench className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Reparasi Laptop"
        description="Layanan perbaikan laptop dengan diagnosa akurat dan penanganan cepat untuk berbagai jenis kerusakan."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="bg-stone-950 relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="bg-black fill-white drop-shadow-lg/50 drop-shadow-neutral-500/50 border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
