"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_ENERGY_TREND } from '@/lib/mock-data';

export function EnergyConsumptionChart() {
  return (
    <Card className="border-border shadow-sm h-[400px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">Tren Konsumsi Energi & Karbon</CardTitle>
        <p className="text-xs text-muted-foreground">Pemakaian Listrik (kWh) vs Emisi (tCO₂e) - 6 Bulan Terakhir</p>
      </CardHeader>
      <CardContent className="flex-1 w-full h-full min-h-0 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_ENERGY_TREND} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
              itemStyle={{ color: '#0f172a' }}
            />
            <Area 
              type="monotone" 
              dataKey="energy" 
              stroke="#eab308" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorEnergy)" 
              name="Konsumsi (kWh)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
