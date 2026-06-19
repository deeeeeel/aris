import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Lightbulb, TrendingDown, ArrowRight } from 'lucide-react';
import { MOCK_QUICK_WINS } from '@/lib/mock-data';

export function QuickWinsSimulator() {
  return (
    <Card className="border-border shadow-sm col-span-full">
      <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <div>
            <CardTitle className="text-base font-semibold text-foreground">Quick Wins & ROI Simulator</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Rekomendasi investasi efisiensi berdasarkan deteksi anomali.</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[300px]">Rekomendasi Intervensi</TableHead>
              <TableHead>Biaya Awal (Bulanan)</TableHead>
              <TableHead>Estimasi Baru</TableHead>
              <TableHead>Penghematan</TableHead>
              <TableHead className="text-center">ROI</TableHead>
              <TableHead className="text-right">Payback Period</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_QUICK_WINS.map((qw) => {
              const saving = qw.beforeCost - qw.afterCost;
              return (
                <TableRow key={qw.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{qw.title}</TableCell>
                  <TableCell className="text-muted-foreground">Rp {(qw.beforeCost / 1000000).toFixed(1)} Jt</TableCell>
                  <TableCell className="flex items-center space-x-2 text-foreground">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                    <span>Rp {(qw.afterCost / 1000000).toFixed(1)} Jt</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-emerald-600 font-semibold">
                      <TrendingDown className="w-4 h-4" />
                      <span>Rp {(saving / 1000000).toFixed(1)} Jt</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">
                      {qw.roiPercentage}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium text-foreground">
                    {qw.paybackPeriodMonths} Bulan
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
