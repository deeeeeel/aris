// src/lib/mock-data.ts

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface KPIOverview {
  eui: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
  wui: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
  wasteDiversion: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
  carbonEmission: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
  circularityScore: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
  savingOpportunity: { value: number; unit: string; trend: 'up' | 'down'; percentage: number };
}

export interface TimeSeriesData {
  month: string;
  energy: number;
  carbon: number;
  water?: number; // Added for water chart
}

export interface WasteComposition {
  name: string;
  value: number;
  color: string;
}

export interface AnomalyAlert {
  id: string;
  type: 'Energy' | 'Water' | 'Waste';
  severity: 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
  location: string;
  status: 'active' | 'resolved';
}

export interface QuickWinScenario {
  id: string;
  title: string;
  beforeCost: number;
  afterCost: number;
  roiPercentage: number;
  paybackPeriodMonths: number;
}

export interface ComplianceItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  category: 'BGH' | 'Green Key';
}

export interface HeatmapData {
  floor: string;
  zones: {
    name: string;
    consumption: number; // kWh
    status: 'normal' | 'warning' | 'critical';
  }[];
}

export interface VendorManifest {
  id: string;
  date: string;
  vendorName: string;
  wasteType: string;
  weightKg: number;
  status: 'Verified' | 'Pending';
}

export interface BillPrediction {
  month: string;
  actual: number;
  predicted: number;
}

// ==========================================
// MOCK DATA
// ==========================================

export const MOCK_KPI: KPIOverview = {
  eui: { value: 145, unit: 'kWh/m²/thn', trend: 'down', percentage: 12 },
  wui: { value: 0.8, unit: 'm³/tamu/malam', trend: 'down', percentage: 5 },
  wasteDiversion: { value: 45, unit: '%', trend: 'up', percentage: 8 },
  carbonEmission: { value: 210, unit: 'tCO₂e', trend: 'down', percentage: 10 },
  circularityScore: { value: 65, unit: '/100', trend: 'up', percentage: 15 },
  savingOpportunity: { value: 125000000, unit: 'Rp', trend: 'up', percentage: 20 },
};

export const MOCK_TREND: TimeSeriesData[] = [
  { month: 'Jan', energy: 45000, carbon: 35, water: 1200 },
  { month: 'Feb', energy: 43000, carbon: 33, water: 1150 },
  { month: 'Mar', energy: 48000, carbon: 38, water: 1300 },
  { month: 'Apr', energy: 46000, carbon: 36, water: 1250 },
  { month: 'May', energy: 41000, carbon: 31, water: 1100 },
  { month: 'Jun', energy: 39000, carbon: 29, water: 1050 },
];

// Renamed for backwards compatibility in existing chart
export const MOCK_ENERGY_TREND = MOCK_TREND;

export const MOCK_WASTE_COMPOSITION: WasteComposition[] = [
  { name: 'Organik (Kompos)', value: 45, color: '#16a34a' },
  { name: 'Anorganik (Daur Ulang)', value: 30, color: '#facc15' },
  { name: 'Residu (TPA)', value: 20, color: '#0f172a' },
  { name: 'B3', value: 5, color: '#dc2626' },
];

export const MOCK_ALERTS: AnomalyAlert[] = [
  {
    id: 'ALT-001',
    type: 'Water',
    severity: 'high',
    message: 'Anomali aliran air terdeteksi di luar jam operasional (Spike 40%). Kemungkinan kebocoran.',
    timestamp: '2026-06-18T02:00:00Z',
    location: 'Zona Pipa Basement 1',
    status: 'active'
  },
  {
    id: 'ALT-002',
    type: 'Energy',
    severity: 'medium',
    message: 'Chiller 2 beroperasi di bawah efisiensi standar (COP < 4.0).',
    timestamp: '2026-06-17T14:30:00Z',
    location: 'Rooftop HVAC',
    status: 'active'
  },
  {
    id: 'ALT-003',
    type: 'Energy',
    severity: 'low',
    message: 'Lampu Lantai 5 menyala padahal tingkat okupansi 0%.',
    timestamp: '2026-06-16T23:00:00Z',
    location: 'Lantai 5 Koridor',
    status: 'resolved'
  },
];

export const MOCK_QUICK_WINS: QuickWinScenario[] = [
  {
    id: 'QW-001',
    title: 'Retrofit Lampu LED Area Parkir',
    beforeCost: 15000000,
    afterCost: 6000000,
    roiPercentage: 120,
    paybackPeriodMonths: 8,
  },
  {
    id: 'QW-002',
    title: 'Pemasangan VSD pada Pompa Air Bersih',
    beforeCost: 22000000,
    afterCost: 14000000,
    roiPercentage: 85,
    paybackPeriodMonths: 14,
  },
];

export const MOCK_COMPLIANCE: ComplianceItem[] = [
  { id: 'C-001', title: 'SOP Efisiensi Energi', status: 'completed', category: 'BGH' },
  { id: 'C-002', title: 'Kebijakan Pengadaan Hijau', status: 'in-progress', category: 'BGH' },
  { id: 'C-003', title: 'Audit Kesesuaian Tata Udara', status: 'pending', category: 'BGH' },
  { id: 'C-004', title: 'Audit Manifest Limbah B3', status: 'completed', category: 'Green Key' },
  { id: 'C-005', title: 'Sertifikasi Operator STP', status: 'pending', category: 'Green Key' },
  { id: 'C-006', title: 'Pelatihan Staf F&B (Waste)', status: 'in-progress', category: 'Green Key' },
];

export const MOCK_HEATMAP: HeatmapData[] = [
  { floor: 'Lantai 10', zones: [{name: 'Kamar', consumption: 850, status: 'normal'}, {name: 'Koridor', consumption: 120, status: 'normal'}] },
  { floor: 'Lantai 9', zones: [{name: 'Kamar', consumption: 900, status: 'normal'}, {name: 'Koridor', consumption: 130, status: 'normal'}] },
  { floor: 'Lantai 8', zones: [{name: 'Kamar', consumption: 1400, status: 'critical'}, {name: 'Koridor', consumption: 250, status: 'warning'}] },
  { floor: 'Lantai 7', zones: [{name: 'Kamar', consumption: 800, status: 'normal'}, {name: 'Koridor', consumption: 110, status: 'normal'}] },
  { floor: 'Lantai 6', zones: [{name: 'Kamar', consumption: 820, status: 'normal'}, {name: 'Koridor', consumption: 115, status: 'normal'}] },
  { floor: 'Lantai 5', zones: [{name: 'Kamar', consumption: 1100, status: 'warning'}, {name: 'Koridor', consumption: 300, status: 'critical'}] },
  { floor: 'Lantai 4', zones: [{name: 'Kamar', consumption: 750, status: 'normal'}, {name: 'Koridor', consumption: 100, status: 'normal'}] },
  { floor: 'Lantai 3', zones: [{name: 'Ballroom', consumption: 2500, status: 'critical'}, {name: 'Meeting R.', consumption: 600, status: 'warning'}] },
  { floor: 'Lantai 2', zones: [{name: 'Restoran', consumption: 1800, status: 'warning'}, {name: 'Dapur', consumption: 2200, status: 'critical'}] },
  { floor: 'Lantai 1', zones: [{name: 'Lobby', consumption: 1500, status: 'warning'}, {name: 'Back Office', consumption: 400, status: 'normal'}] },
];

export const MOCK_VENDOR_MANIFEST: VendorManifest[] = [
  { id: 'VM-1029', date: '2026-06-15', vendorName: 'PT Hijau Lestari', wasteType: 'Organik', weightKg: 150, status: 'Verified' },
  { id: 'VM-1030', date: '2026-06-16', vendorName: 'EcoRecycle Corp', wasteType: 'Anorganik (Karton)', weightKg: 85, status: 'Verified' },
  { id: 'VM-1031', date: '2026-06-17', vendorName: 'B3 Safe Disposal', wasteType: 'Limbah B3 (Lampu TL)', weightKg: 12, status: 'Pending' },
  { id: 'VM-1032', date: '2026-06-18', vendorName: 'PT Hijau Lestari', wasteType: 'Organik', weightKg: 160, status: 'Pending' },
];

export const MOCK_BILL_PREDICTIONS: BillPrediction[] = [
  { month: 'Jan', actual: 45, predicted: 44 },
  { month: 'Feb', actual: 43, predicted: 42 },
  { month: 'Mar', actual: 48, predicted: 46 },
  { month: 'Apr', actual: 46, predicted: 45 },
  { month: 'May', actual: 41, predicted: 42 },
  { month: 'Jun', actual: 0, predicted: 39 }, // Current month, only predicted exists completely
];
