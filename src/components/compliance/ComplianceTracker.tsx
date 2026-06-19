import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileCheck, CheckCircle2, Circle, Clock } from 'lucide-react';
import { MOCK_COMPLIANCE } from '@/lib/mock-data';

export function ComplianceTracker() {
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
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-amber-500" />;
      default: return <Circle className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <Card className="border-border shadow-sm col-span-full xl:col-span-1">
      <CardHeader className="pb-3 border-b border-border/50">
        <div className="flex items-center space-x-2">
          <FileCheck className="w-5 h-5 text-indigo-500" />
          <CardTitle className="text-base font-semibold text-foreground">Compliance Tracker</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        
        {/* BGH Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-foreground">Bangunan Gedung Hijau (PUPR)</h4>
            <span className="text-xs font-bold text-indigo-600">{bghProgress}%</span>
          </div>
          <Progress value={bghProgress} className="h-2 mb-3 bg-muted" />
          <div className="space-y-2">
            {bghItems.map(item => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(item.status)}
                  <span className="text-muted-foreground truncate max-w-[180px]">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Key Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-foreground">Sertifikasi Green Key</h4>
            <span className="text-xs font-bold text-emerald-600">{greenKeyProgress}%</span>
          </div>
          <Progress value={greenKeyProgress} className="h-2 mb-3 bg-muted" />
          <div className="space-y-2">
            {greenKeyItems.map(item => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(item.status)}
                  <span className="text-muted-foreground truncate max-w-[180px]">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
