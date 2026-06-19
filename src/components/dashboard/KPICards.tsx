"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDownIcon, ArrowUpIcon, Zap, Droplet, Recycle, Cloud, Wallet, Activity } from 'lucide-react';
import { MOCK_KPI } from '@/lib/mock-data';

import { motion, Variants } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export function KPICards() {
  const searchParams = useSearchParams();
  const month = searchParams.get('month') || 'juni-2026';
  
  // Simple deterministic hash based on month string to create mock fluctuations
  const hash = month.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const modifier = 0.8 + ((hash % 40) / 100); // Modifier between 0.8 and 1.2
  
  const getModifiedValue = (baseValue: string | number) => {
    const num = typeof baseValue === 'string' ? parseFloat(baseValue.replace(/,/g, '')) : baseValue;
    if (isNaN(num)) return baseValue;
    return (num * modifier).toLocaleString('id-ID', { maximumFractionDigits: 1 });
  };

  const kpis = [
    {
      title: 'Energy Use Intensity (EUI)',
      data: { ...MOCK_KPI.eui, value: getModifiedValue(MOCK_KPI.eui.value) },
      icon: Zap,
      description: 'Konsumsi per m² luas lantai',
      color: 'text-orange-500',
      bg: 'bg-orange-100 dark:bg-orange-900/30',
    },
    {
      title: 'Water Use Intensity (WUI)',
      data: { ...MOCK_KPI.wui, value: getModifiedValue(MOCK_KPI.wui.value) },
      icon: Droplet,
      description: 'Konsumsi air per tamu',
      color: 'text-cyan-500',
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    },
    {
      title: 'Waste Diversion Rate',
      data: { ...MOCK_KPI.wasteDiversion, value: getModifiedValue(MOCK_KPI.wasteDiversion.value) },
      icon: Recycle,
      description: 'Limbah dialihkan dari TPA',
      color: 'text-emerald-500',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
    {
      title: 'Emisi Karbon (Scope 2)',
      data: { ...MOCK_KPI.carbonEmission, value: getModifiedValue(MOCK_KPI.carbonEmission.value) },
      icon: Cloud,
      description: 'Estimasi jejak karbon',
      color: 'text-rose-500',
      bg: 'bg-rose-100 dark:bg-rose-900/30',
    },
    {
      title: 'Efisiensi Biaya',
      data: { ...MOCK_KPI.savingOpportunity, value: getModifiedValue(MOCK_KPI.savingOpportunity.value) },
      icon: Wallet,
      description: 'Penghematan bulan ini',
      color: 'text-green-600',
      bg: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      title: 'Overall Sustainability Score',
      data: { ...MOCK_KPI.circularityScore, value: getModifiedValue(MOCK_KPI.circularityScore.value) },
      icon: Activity,
      description: 'Indeks performa ESG',
      color: 'text-purple-500',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        const isTrendGood = 
          (kpi.data.trend === 'down' && kpi.title !== 'Waste Diversion Rate' && kpi.title !== 'Circularity Score' && kpi.title !== 'Saving Opportunity') ||
          (kpi.data.trend === 'up' && (kpi.title === 'Waste Diversion Rate' || kpi.title === 'Circularity Score' || kpi.title === 'Saving Opportunity'));
        
        return (
          <motion.div key={index} variants={item} whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="h-full shadow-sm hover:shadow-lg transition-all border-border/50 dark:border-white/5 hover:border-primary/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <motion.div 
                  className={`p-2 rounded-lg ${kpi.bg}`}
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className={`w-4 h-4 ${kpi.color}`} />
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-foreground">
                    {kpi.title === 'Efisiensi Biaya' || kpi.title === 'Saving Opportunity' ? 
                      (parseFloat(kpi.data.value.toString().replace(/,/g, '').replace(/\./g, '')) / 1000000).toFixed(1) + ' Jt' : 
                      kpi.data.value}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{kpi.data.unit}</span>
                </div>
                <div className="flex items-center mt-3 space-x-2">
                  <Badge variant={isTrendGood ? 'default' : 'destructive'} className={isTrendGood ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400' : ''}>
                    {kpi.data.trend === 'up' ? <ArrowUpIcon className="w-3 h-3 mr-1" /> : <ArrowDownIcon className="w-3 h-3 mr-1" />}
                    {kpi.data.percentage}%
                  </Badge>
                  <span className="text-xs text-muted-foreground">{kpi.description}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
