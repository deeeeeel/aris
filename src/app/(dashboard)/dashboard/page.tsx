import { Metadata } from 'next';
import { KPICards } from '@/components/dashboard/KPICards';
import { AlertPanel } from '@/components/dashboard/AlertPanel';
import { EnergyConsumptionChart } from '@/components/charts/EnergyConsumptionChart';
import { WasteCompositionChart } from '@/components/charts/WasteCompositionChart';
import { QuickWinsSimulator } from '@/components/widgets/QuickWinsSimulator';
import { ComplianceTracker } from '@/components/compliance/ComplianceTracker';

export const metadata: Metadata = {
  title: 'Executive Summary | EcoMonitor',
  description: 'Overview kinerja keberlanjutan dan peringatan anomali operasional.',
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
        <p className="text-muted-foreground mt-1">Overview kinerja keberlanjutan dan peringatan anomali operasional.</p>
      </div>

      {/* Top Section: KPI Cards & Alert Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <KPICards />
        </div>
        <div className="xl:col-span-1">
          <AlertPanel />
        </div>
      </div>

      {/* Middle Section: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnergyConsumptionChart />
        <WasteCompositionChart />
      </div>
        
      {/* Bottom Section: Quick Wins & Compliance */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <QuickWinsSimulator />
        </div>
        <div className="xl:col-span-1">
          <ComplianceTracker />
        </div>
      </div>
    </div>
  );
}
