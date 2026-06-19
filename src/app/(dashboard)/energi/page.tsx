import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { EnergyConsumptionChart } from '@/components/charts/EnergyConsumptionChart';
import { MOCK_HEATMAP } from '@/lib/mock-data';
import { PageTransition } from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Manajemen Energi & Karbon | EcoMonitor',
  description: 'Pemantauan intensitas energi (EUI), estimasi emisi karbon, dan heatmap konsumsi per zona.',
};

export default function EnergiPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-rose-500 text-white';
      case 'warning': return 'bg-amber-400 text-slate-900';
      default: return 'bg-emerald-400 text-slate-900';
    }
  };

  return (
    <PageTransition className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500" /> 
          Manajemen Energi & Karbon
        </h2>
        <p className="text-muted-foreground mt-1">Pemantauan intensitas energi (EUI), estimasi emisi karbon, dan heatmap konsumsi per zona.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <EnergyConsumptionChart />
        </div>

        <Card className="border-border shadow-sm lg:col-span-2 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between relative z-10">
            <div>
              <CardTitle className="text-base font-semibold text-foreground">Heatmap Penggunaan Energi</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Distribusi konsumsi listrik (kWh) per lantai berdasarkan sensor pintar.</p>
            </div>
            <div className="flex space-x-3 text-xs font-medium text-muted-foreground">
              <div className="flex items-center"><div className="w-3 h-3 bg-emerald-400 rounded-sm mr-1.5"></div> Normal</div>
              <div className="flex items-center"><div className="w-3 h-3 bg-amber-400 rounded-sm mr-1.5"></div> Warning</div>
              <div className="flex items-center"><div className="w-3 h-3 bg-rose-500 rounded-sm mr-1.5"></div> Critical</div>
            </div>
          </CardHeader>
          <CardContent className="p-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {MOCK_HEATMAP.map((floor) => (
                <div key={floor.floor} className="border border-border rounded-lg p-3 bg-muted/50 hover:bg-muted transition-colors">
                  <h4 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border">{floor.floor}</h4>
                  <div className="space-y-2">
                    {floor.zones.map((zone, idx) => (
                      <div 
                        key={idx} 
                        className={`p-2 rounded flex justify-between items-center transition-all hover:opacity-80 hover:scale-[1.02] cursor-default ${getStatusColor(zone.status)}`}
                      >
                        <span className="text-xs font-semibold">{zone.name}</span>
                        <span className="text-xs font-bold">{zone.consumption} <span className="font-normal opacity-80">kWh</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
