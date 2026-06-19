import { Bell, Search, Calendar as CalendarIcon, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentMonth = searchParams.get('month') || 'juni-2026';
  
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('month', newMonth);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="h-16 bg-card/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-border dark:border-slate-800 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center space-x-3">
        <button 
          onClick={onMenuClick}
          className="p-2 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <div className="hidden sm:flex items-center w-72 lg:w-96 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
        <Search className="w-4 h-4 text-muted-foreground/70 mr-2" />
        <input 
          type="text" 
          placeholder="Cari data atau modul..." 
          className="bg-transparent border-none outline-none text-sm w-full text-foreground dark:text-slate-200 placeholder:text-muted-foreground/70"
        />
      </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm text-muted-foreground dark:text-slate-300 bg-card dark:bg-slate-800/50 border border-border dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-sm">
          <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground/70" />
          <select 
            value={currentMonth}
            onChange={handleMonthChange}
            className="bg-transparent border-none outline-none text-foreground dark:text-slate-200 cursor-pointer text-sm font-medium"
          >
            <option value="mei-2026">Mei 2026</option>
            <option value="juni-2026">Juni 2026</option>
            <option value="juli-2026">Juli 2026</option>
            <option value="agustus-2026">Agustus 2026</option>
          </select>
        </div>
        
        <ThemeToggle />
        
        <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95">
          <Bell className="w-5 h-5 text-muted-foreground dark:text-slate-300" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
      </div>
    </header>
  );
}
