"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, AlertTriangle, Clock, MapPin, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { MOCK_ALERTS } from '@/lib/mock-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function AlertPanel() {
  return (
    <Card className="border-border shadow-sm h-full flex flex-col">
      <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <AlertCircle className="w-5 h-5 text-rose-500" />
          </motion.div>
          <CardTitle className="text-base font-semibold text-foreground">AI Anomaly Alerts</CardTitle>
        </div>
        <Badge variant="destructive" className="bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/50 dark:text-rose-400">
          {MOCK_ALERTS.length} Active
        </Badge>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-auto">
        <div className="divide-y divide-border/50">
          {MOCK_ALERTS.map((alert) => (
            <Dialog key={alert.id}>
              <DialogTrigger asChild>
                <div className="p-4 hover:bg-muted/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      {alert.severity === 'high' ? (
                        <AlertCircle className="w-4 h-4 text-rose-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                      )}
                      <span className="text-sm font-semibold text-foreground">{alert.type} Anomaly</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground/70">{alert.id}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 mb-3 leading-snug">
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
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center font-semibold">
                      AI Resolve <ChevronRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-white/10 shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center text-rose-500">
                    {alert.severity === 'high' ? (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    )}
                    Anomaly Detail
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="font-bold text-lg">{alert.type} Anomaly</h3>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">AI Confidence</span>
                      <Badge className="bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30">94.5%</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm">Matikan AC lantai {alert.location} ke mode Auto-Eco.</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm">Kurangi frekuensi pompa air terkait sebesar 15%.</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm">Kirim notifikasi peringatan ke tim teknisi lapangan.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter className="sm:justify-end">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mr-2">Dismiss</Button>
                  </DialogTrigger>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Zap className="w-4 h-4 mr-2" /> Execute Fix
                    </Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
          {MOCK_ALERTS.length === 0 && (
            <div className="p-8 text-center text-muted-foreground text-sm">
              Tidak ada anomali terdeteksi. Sistem berjalan normal.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
