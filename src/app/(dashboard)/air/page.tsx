import { Droplet, Waves, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WaterConsumptionChart } from '@/components/charts/WaterConsumptionChart';

export default function AirPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <Droplet className="w-6 h-6 mr-2 text-blue-500" /> 
          Manajemen Air Bersih & Kotor
        </h2>
        <p className="text-muted-foreground mt-1">Pemantauan efisiensi penggunaan air PDAM/Deep Well dan sirkularitas air daur ulang (STP).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Waves className="w-4 h-4 mr-2 text-blue-500" /> Total Konsumsi Air Bersih
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-foreground">12,450</span>
              <span className="text-sm font-medium text-muted-foreground">m³ / bulan</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <RefreshCw className="w-4 h-4 mr-2 text-emerald-500" /> Total Air Daur Ulang (STP)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-foreground">3,112</span>
              <span className="text-sm font-medium text-muted-foreground">m³ / bulan (25% reuse)</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <WaterConsumptionChart />
      </div>
    </div>
  );
}
