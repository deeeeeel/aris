import { FileCheck, CheckCircle2, Circle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { MOCK_COMPLIANCE } from '@/lib/mock-data';

export default function CompliancePage() {
  const bghItems = MOCK_COMPLIANCE.filter(item => item.category === 'BGH');
  const greenKeyItems = MOCK_COMPLIANCE.filter(item => item.category === 'Green Key');

  const calcProgress = (items: typeof MOCK_COMPLIANCE) => {
    if (items.length === 0) return 0;
    const completed = items.filter(i => i.status === 'completed').length;
    return Math.round((completed / items.length) * 100);
  };

  const bghProgress = calcProgress(bghItems);
  const greenKeyProgress = calcProgress(greenKeyItems);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-amber-500" />;
      default: return <Circle className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <FileCheck className="w-6 h-6 mr-2 text-indigo-500" /> 
          Compliance Tracker (BGH & Green Key)
        </h2>
        <p className="text-muted-foreground mt-1">Pemantauan progres kelengkapan dokumen administratif dan audit untuk sertifikasi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* BGH Detailed Card */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4 border-b border-border/50">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-lg font-semibold text-foreground">Bangunan Gedung Hijau (PUPR)</CardTitle>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none">
                Skor Sementara: Madya
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={bghProgress} className="flex-1 h-3 bg-muted" />
              <span className="text-sm font-bold text-indigo-600 w-10 text-right">{bghProgress}%</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {bghItems.map(item => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground/70">ID: {item.id}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={
                    item.status === 'completed' ? 'text-emerald-600 border-emerald-200 bg-emerald-50' :
                    item.status === 'in-progress' ? 'text-amber-600 border-amber-200 bg-amber-50' :
                    'text-muted-foreground border-border bg-muted/50'
                  }>
                    {item.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Green Key Detailed Card */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4 border-b border-border/50">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-lg font-semibold text-foreground">Sertifikasi Green Key</CardTitle>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none">
                Target: Q4 2026
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={greenKeyProgress} className="flex-1 h-3 bg-muted" />
              <span className="text-sm font-bold text-emerald-600 w-10 text-right">{greenKeyProgress}%</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {greenKeyItems.map(item => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground/70">ID: {item.id}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={
                    item.status === 'completed' ? 'text-emerald-600 border-emerald-200 bg-emerald-50' :
                    item.status === 'in-progress' ? 'text-amber-600 border-amber-200 bg-amber-50' :
                    'text-muted-foreground border-border bg-muted/50'
                  }>
                    {item.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
