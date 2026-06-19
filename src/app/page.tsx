"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LayoutGrid, Droplets, Zap, Recycle, BrainCircuit, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function PortalPage() {
  const modules = [
    {
      title: "Executive Summary",
      description: "Konsolidasi performa & KPI",
      href: "/dashboard",
      icon: LayoutGrid,
      color: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      title: "Energi & Karbon",
      description: "Pemantauan EUI & Emisi",
      href: "/energi",
      icon: Zap,
      color: "bg-orange-500",
      iconColor: "text-white"
    },
    {
      title: "Air Bersih & Kotor",
      description: "Pemantauan WUI & Kualitas",
      href: "/air",
      icon: Droplets,
      color: "bg-cyan-500",
      iconColor: "text-white"
    },
    {
      title: "Limbah & Sirkular",
      description: "Diversion Rate & Manifest",
      href: "/limbah",
      icon: Recycle,
      color: "bg-green-600",
      iconColor: "text-white"
    },
    {
      title: "AI Anomaly",
      description: "Peringatan & Prediksi AI",
      href: "/anomali",
      icon: BrainCircuit,
      color: "bg-rose-500",
      iconColor: "text-white"
    },
    {
      title: "Compliance",
      description: "Sertifikasi & Regulasi",
      href: "/compliance",
      icon: ShieldCheck,
      color: "bg-purple-500",
      iconColor: "text-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start md:justify-center p-6 py-12 md:py-6 relative overflow-x-hidden overflow-y-auto">
      {/* Theme Toggle at Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20 mr-4">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            EcoMonitor <span className="text-primary">System</span>
          </h1>
        </div>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Pilih modul portal akses (Role) untuk memantau sistem Green Building & Circular Economy dengan integrasi Real-Time.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full z-10"
      >
        {modules.map((module, idx) => {
          const Icon = module.icon;
          return (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
              <Link href={module.href} className="block h-full">
                <div className="h-full bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-colors rounded-2xl p-6 flex flex-col items-center text-center group shadow-xl">
                  <div className={`w-16 h-16 rounded-2xl ${module.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex-1 mb-6">
                    {module.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs font-semibold text-muted-foreground group-hover:text-primary uppercase tracking-wider transition-colors">
                    ENTER MODULE <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center text-xs text-muted-foreground/60 max-w-2xl z-10"
      >
        Perumda Pembangunan Sarana Jaya • Novotel Cikini Pilot Project <br />
        Integrasi Sistem Monitoring Green Building & Circular Economy © 2026
      </motion.div>
    </div>
  );
}
