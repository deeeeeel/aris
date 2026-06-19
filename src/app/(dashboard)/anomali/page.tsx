import { AlertTriangle, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_ALERTS } from '@/lib/mock-data';
import { BillPredictionChart } from '@/components/charts/BillPredictionChart';

export default function AnomaliPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-rose-500" /> 
          AI Anomaly & Predictive Analytics
        </h2>
        <p className="text-muted-foreground mt-1">Deteksi pola operasional abnormal dan prediksi dampak finansial berbasis *Machine Learning*.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BillPredictionChart />

        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold text-foreground">Daftar Anomali (Real-time)</CardTitle>
            <Badge variant="outline" className="bg-muted/50">Filter: Semua</Badge>
          </CardHeader>
          <CardContent className="p-0 overflow-auto max-h-[400px]">
            <div className="divide-y divide-border/50">
              {MOCK_ALERTS.map((alert) => (
                <div key={alert.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={
                        alert.severity === 'high' ? 'border-rose-200 bg-rose-50 text-rose-700' : 
                        alert.severity === 'medium' ? 'border-amber-200 bg-amber-50 text-amber-700' : 
                        'border-border bg-muted/50 text-foreground'
                      }>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="text-sm font-semibold text-foreground">{alert.type} Anomaly</span>
                    </div>
                    <Badge variant="outline" className={
                        alert.status === 'active' ? 'border-amber-200 text-amber-600' : 'border-emerald-200 text-emerald-600'
                      }>
                        {alert.status === 'active' ? 'Membutuhkan Tindakan' : 'Telah Diatasi'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 mb-3 leading-snug">
                    {alert.message}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground/70">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{new Date(alert.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        <span>{alert.location}</span>
                      </div>
                    </div>
                    <span className="font-medium text-muted-foreground">{alert.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
