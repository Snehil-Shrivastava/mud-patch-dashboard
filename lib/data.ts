export type ChartFormat = "units" | "percentage" | "number";

export interface MetricData {
  id: string;
  title: string;
  description: string;
  value: number;
  max: number;
  format: ChartFormat;
}

export interface MonthlyData {
  monthId: string;
  label: string;
  metrics: MetricData[];
}

// Dummy data for Current, Last Month, Two Months Ago, and All 3 Months Combined
export const mockDashboardData: MonthlyData[] = [
  {
    monthId: "current",
    label: "Current Month",
    metrics: [
      {
        id: "garments_sold",
        title: "Garments Sold",
        description: "on Mud Patch marketplace",
        value: 1260,
        max: 1260,
        format: "units",
      },
      {
        id: "collection_rate",
        title: "Collection Rate",
        description: "Post-use collections via Mud Patch marketplace",
        value: 68,
        max: 100,
        format: "percentage",
      },
      {
        id: "integrations",
        title: "Number of integrations",
        description: "Active Brand channels",
        value: 3,
        max: 5,
        format: "number",
      },
    ],
  },
  {
    monthId: "last-month",
    label: "Last Month",
    metrics: [
      {
        id: "garments_sold",
        title: "Garments Sold",
        description: "on Mud Patch marketplace",
        value: 950,
        max: 1260,
        format: "units",
      },
      {
        id: "collection_rate",
        title: "Collection Rate",
        description: "Post-use collections via Mud Patch marketplace",
        value: 52,
        max: 100,
        format: "percentage",
      },
      {
        id: "integrations",
        title: "Number of integrations",
        description: "Active Brand channels",
        value: 2,
        max: 5,
        format: "number",
      },
    ],
  },
  {
    monthId: "two-months-ago",
    label: "Two Months Ago",
    metrics: [
      {
        id: "garments_sold",
        title: "Garments Sold",
        description: "on Mud Patch marketplace",
        value: 1100,
        max: 1260,
        format: "units",
      },
      {
        id: "collection_rate",
        title: "Collection Rate",
        description: "Post-use collections via Mud Patch marketplace",
        value: 58,
        max: 100,
        format: "percentage",
      },
      {
        id: "integrations",
        title: "Number of integrations",
        description: "Active Brand channels",
        value: 2,
        max: 5,
        format: "number",
      },
    ],
  },
  {
    monthId: "last-3-months",
    label: "Last 3 Months",
    metrics: [
      // Total units: 1260 + 950 + 1100 = 3310
      {
        id: "garments_sold",
        title: "Garments Sold",
        description: "on Mud Patch marketplace",
        value: 3310,
        max: 3780,
        format: "units",
      },
      // Average rate: (68 + 52 + 58) / 3 = ~59%
      {
        id: "collection_rate",
        title: "Collection Rate",
        description: "Post-use collections via Mud Patch marketplace",
        value: 59,
        max: 100,
        format: "percentage",
      },
      // Max active integrations over the period
      {
        id: "integrations",
        title: "Number of integrations",
        description: "Active Brand channels",
        value: 3,
        max: 5,
        format: "number",
      },
    ],
  },
];

// Simulated DB fetch function
export const getDashboardData = async (monthId: string = "current") => {
  // Simulating network delay to mimic a real database call
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = mockDashboardData.find((d) => d.monthId === monthId);
  return data || mockDashboardData[0]; // Fallback to current if string doesn't match
};

// Add this to the bottom of lib/dashboard-data.ts

export interface VolumeData {
  month: string;
  greenBrand: number;
  peerIndex: number;
}

export interface YearlyVolumeData {
  yearId: string;
  label: string;
  data: VolumeData[];
}

export const mockYearlyVolumeData: YearlyVolumeData[] = [
  {
    yearId: "this-year",
    label: "2026 (This Year)",
    data: [
      { month: "January", greenBrand: 220, peerIndex: 150 },
      { month: "February", greenBrand: 340, peerIndex: 220 },
      { month: "March", greenBrand: 280, peerIndex: 180 },
      { month: "April", greenBrand: 210, peerIndex: 200 },
      { month: "May", greenBrand: 260, peerIndex: 170 },
      { month: "June", greenBrand: 290, peerIndex: 190 },
      { month: "July", greenBrand: 320, peerIndex: 210 },
      { month: "August", greenBrand: 360, peerIndex: 240 },
      { month: "September", greenBrand: 400, peerIndex: 270 },
      { month: "October", greenBrand: 450, peerIndex: 300 },
      { month: "November", greenBrand: 500, peerIndex: 350 },
      { month: "December", greenBrand: 550, peerIndex: 400 },
    ],
  },
  {
    yearId: "last-year",
    label: "2025 (Last Year)",
    data: [
      { month: "January", greenBrand: 186, peerIndex: 80 },
      { month: "February", greenBrand: 305, peerIndex: 200 },
      { month: "March", greenBrand: 237, peerIndex: 120 },
      { month: "April", greenBrand: 173, peerIndex: 190 },
      { month: "May", greenBrand: 209, peerIndex: 130 },
      { month: "June", greenBrand: 214, peerIndex: 140 },
      { month: "July", greenBrand: 250, peerIndex: 180 },
      { month: "August", greenBrand: 280, peerIndex: 210 },
      { month: "September", greenBrand: 310, peerIndex: 230 },
      { month: "October", greenBrand: 340, peerIndex: 260 },
      { month: "November", greenBrand: 380, peerIndex: 290 },
      { month: "December", greenBrand: 420, peerIndex: 310 },
    ],
  },
  {
    yearId: "two-years-ago",
    label: "2024 (Two Years Ago)",
    data: [
      { month: "January", greenBrand: 120, peerIndex: 100 },
      { month: "February", greenBrand: 150, peerIndex: 130 },
      { month: "March", greenBrand: 180, peerIndex: 140 },
      { month: "April", greenBrand: 160, peerIndex: 150 },
      { month: "May", greenBrand: 210, peerIndex: 160 },
      { month: "June", greenBrand: 230, peerIndex: 180 },
      { month: "July", greenBrand: 220, peerIndex: 170 },
      { month: "August", greenBrand: 250, peerIndex: 190 },
      { month: "September", greenBrand: 280, peerIndex: 200 },
      { month: "October", greenBrand: 300, peerIndex: 220 },
      { month: "November", greenBrand: 350, peerIndex: 250 },
      { month: "December", greenBrand: 400, peerIndex: 280 },
    ],
  },
  {
    yearId: "last-3-years",
    label: "Combined (3 Years)",
    // Sum of the 3 years for each month
    data: [
      { month: "January", greenBrand: 526, peerIndex: 330 },
      { month: "February", greenBrand: 795, peerIndex: 550 },
      { month: "March", greenBrand: 697, peerIndex: 440 },
      { month: "April", greenBrand: 543, peerIndex: 540 },
      { month: "May", greenBrand: 679, peerIndex: 460 },
      { month: "June", greenBrand: 734, peerIndex: 510 },
      { month: "July", greenBrand: 790, peerIndex: 560 },
      { month: "August", greenBrand: 890, peerIndex: 640 },
      { month: "September", greenBrand: 990, peerIndex: 700 },
      { month: "October", greenBrand: 1090, peerIndex: 780 },
      { month: "November", greenBrand: 1230, peerIndex: 890 },
      { month: "December", greenBrand: 1370, peerIndex: 990 },
    ],
  },
];

// Simulated DB fetch function for yearly data
export const getYearlyVolumeData = async (yearId: string = "this-year") => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const data = mockYearlyVolumeData.find((d) => d.yearId === yearId);
  return data || mockYearlyVolumeData[0];
};

// Add to the bottom of lib/dashboard-data.ts
export interface CollectionSourceData {
  id: string;
  source: string;
  units: number;
  kgs: number;
  percentage: number;
}

export const mockCollectionUnitsData: CollectionSourceData[] = [
  {
    id: "1",
    source: "Mud Patch Marketplace",
    units: 855,
    kgs: 250,
    percentage: 88,
  },
  {
    id: "2",
    source: "Brand Website",
    units: 160,
    kgs: 50,
    percentage: 70,
  },
  {
    id: "3",
    source: "Store-W1B - London Oxford St",
    units: 395,
    kgs: 155,
    percentage: 95,
  },
];

export interface CategoryVolumeData {
  id: string;
  label: string;
  percentage: number;
  kgs: number;
  iconSrc: string;
}

// Data perfectly matching your screenshot
export const mockCategoryVolumeData: CategoryVolumeData[] = [
  // Assuming rose.svg is your placeholder for the "Baby" category
  { id: "baby", label: "Baby", percentage: 29, kgs: 420, iconSrc: "/rose.svg" },
  { id: "teen", label: "Teen", percentage: 21, kgs: 300, iconSrc: "/teen.svg" },
  {
    id: "room",
    label: "Room Essentials",
    percentage: 17,
    kgs: 240,
    iconSrc: "/room-essentials.svg",
  },
  {
    id: "women",
    label: "Women",
    percentage: 12,
    kgs: 180,
    iconSrc: "/women.svg",
  },
  {
    id: "toddler",
    label: "Toddler",
    percentage: 9,
    kgs: 130,
    iconSrc: "/toddler.svg",
  },
  {
    id: "child",
    label: "Child",
    percentage: 6,
    kgs: 90,
    iconSrc: "/child.svg",
  },
  {
    id: "pre-teen",
    label: "Pre-Teen",
    percentage: 3,
    kgs: 50,
    iconSrc: "/pre-teen.svg",
  },
];
