"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MOCK_BILL_PREDICTIONS } from '@/lib/mock-data';

export function BillPredictionChart() {
  return (
    <Card className="border-border shadow-sm h-[400px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">Prediksi Tagihan Utilitas (Listrik)</CardTitle>
        <p className="text-xs text-muted-foreground">Aktual vs Prediksi berdasarkan tingkat hunian (Juta Rp)</p>
      </CardHeader>
      <CardContent className="flex-1 w-full h-full min-h-0 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOCK_BILL_PREDICTIONS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
              itemStyle={{ color: '#0f172a' }}
              cursor={{fill: '#f8fafc'}}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', color: '#64748b', paddingBottom: '10px' }}
            />
            <Bar dataKey="actual" name="Tagihan Aktual" fill="#0f172a" radius={[4, 4, 0, 0]} />
            <Bar dataKey="predicted" name="Prediksi AI" fill="#facc15" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
