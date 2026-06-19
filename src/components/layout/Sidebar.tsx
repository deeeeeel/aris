"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Droplets, Zap, Recycle, BrainCircuit, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Sidebar({ isOpen = true, setIsOpen }: { isOpen?: boolean, setIsOpen?: (v: boolean) => void }) {
  const pathname = usePathname();
  
  const navItems = [
    { icon: LayoutGrid, label: 'Executive Summary', href: '/dashboard' },
    { icon: Zap, label: 'Energi & Karbon', href: '/energi' },
    { icon: Droplets, label: 'Air Bersih & Kotor', href: '/air' },
    { icon: Recycle, label: 'Limbah & Sirkular', href: '/limbah' },
    { icon: BrainCircuit, label: 'AI Anomaly', href: '/anomali' },
    { icon: ShieldCheck, label: 'Compliance', href: '/compliance' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && setIsOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside className={`w-64 bg-sidebar/95 backdrop-blur-xl text-sidebar-foreground min-h-screen p-4 flex flex-col fixed left-0 top-0 h-full z-40 border-r border-sidebar-border transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="mb-8 px-2 flex items-center space-x-2">
        <motion.div 
          animate={{ rotate: [0, 15, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-8 h-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20"
        >
          <Zap className="w-5 h-5 text-primary-foreground" />
        </motion.div>
        <div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">EcoMonitor</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Novotel Cikini Pilot</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href} 
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all group ${isActive ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5' : 'hover:bg-sidebar-accent text-sidebar-foreground/70 hover:text-sidebar-foreground'}`}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-sidebar-foreground/50 group-hover:text-primary'}`} />
              </motion.div>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3 px-3 py-2 hover:bg-sidebar-accent rounded-lg transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-xs font-bold text-primary border border-sidebar-border shadow-sm">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Admin Novotel</p>
            <p className="text-xs text-sidebar-foreground/60">Asset Manager</p>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
