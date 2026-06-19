import { Trash2, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { WasteCompositionChart } from '@/components/charts/WasteCompositionChart';
import { MOCK_VENDOR_MANIFEST } from '@/lib/mock-data';

export default function LimbahPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <Trash2 className="w-6 h-6 mr-2 text-emerald-600" /> 
          Manajemen Limbah & Ekonomi Sirkular
        </h2>
        <p className="text-muted-foreground mt-1">Pemantauan log limbah harian, rasio daur ulang, dan bukti angkut (manifest) vendor.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WasteCompositionChart />
        </div>

        <Card className="border-border shadow-sm lg:col-span-2">
          <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-base font-semibold text-foreground">Log Digital Bukti Angkut Vendor (Manifest)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>No. Manifest</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Jenis Limbah</TableHead>
                  <TableHead className="text-right">Berat</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_VENDOR_MANIFEST.map((manifest) => (
                  <TableRow key={manifest.id} className="hover:bg-muted/50">
                    <TableCell className="text-muted-foreground">{new Date(manifest.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</TableCell>
                    <TableCell className="font-medium text-foreground">{manifest.id}</TableCell>
                    <TableCell className="text-muted-foreground">{manifest.vendorName}</TableCell>
                    <TableCell className="text-muted-foreground">{manifest.wasteType}</TableCell>
                    <TableCell className="text-right font-medium text-foreground">{manifest.weightKg} Kg</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={
                        manifest.status === 'Verified' 
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700' 
                          : 'border-amber-200 bg-amber-50 text-amber-700'
                      }>
                        {manifest.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
