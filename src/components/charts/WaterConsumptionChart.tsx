"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_TREND } from '@/lib/mock-data';

export function WaterConsumptionChart() {
  return (
    <Card className="border-border shadow-sm h-[400px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">Water Use Intensity (WUI) Trend</CardTitle>
        <p className="text-xs text-muted-foreground">Konsumsi Air Bersih (m³) per Tamu per Malam</p>
      </CardHeader>
      <CardContent className="flex-1 w-full h-full min-h-0 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MOCK_TREND} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
            />
            <Line 
              type="monotone" 
              dataKey="water" 
              stroke="#3b82f6" 
              strokeWidth={4}
              dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Air Bersih (m³)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
