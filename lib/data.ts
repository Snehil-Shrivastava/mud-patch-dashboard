export const tabs = [
  {
    label: "Post-use garment collections",
    href: "/post-use-collections",
    icon: "/post-use-collection.svg",
    color: "#3F5E3E",
  },
  {
    label: "Garment life-cycle metrics",
    href: "/garment-lifecycle-metrics",
    icon: "/life-cycle-metrics.svg",
    color: "#CF9645",
  },
  {
    label: "EPR compliance tracker",
    href: "/epr-compliance-tracker",
    icon: "/epr-compliance-tracker.svg",
    color: "#2C4152",
  },
  {
    label: "Activity Maps",
    href: "/activity-maps",
    icon: "/activity-maps.svg",
    color: "#584B42",
  },
];

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
  label1: string;
  label2: string;
  year: string;
  data: VolumeData[];
}

export const mockYearlyVolumeData: YearlyVolumeData[] = [
  {
    yearId: "this-year",
    year: "2026 (This Year)",
    label1: "Green brand",
    label2: "Peer Index",
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
    year: "2025 (Last Year)",
    label1: "Green brand",
    label2: "Peer Index",
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
    year: "2024 (Two Years Ago)",
    label1: "Green brand",
    label2: "Peer Index",
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
    year: "Combined (3 Years)",
    label1: "Green brand",
    label2: "Peer Index",
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

export const mockCategoryVolumeSegmentData: CategoryVolumeData[] = [
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

export const mockCategoryVolumeProductData: CategoryVolumeData[] = [
  // Assuming rose.svg is your placeholder for the "Baby" category
  {
    id: "bodysuit",
    label: "Bodysuit",
    percentage: 29,
    kgs: 420,
    iconSrc: "/bodysuit.svg",
  },
  {
    id: "tshirts",
    label: "T-shirts",
    percentage: 21,
    kgs: 300,
    iconSrc: "/tshirts.svg",
  },
  {
    id: "shirts",
    label: "Shirts",
    percentage: 17,
    kgs: 240,
    iconSrc: "/shirts.svg",
  },
  {
    id: "dresses",
    label: "Dresses",
    percentage: 12,
    kgs: 180,
    iconSrc: "/dresses.svg",
  },
  {
    id: "dungaress",
    label: "Dungaress",
    percentage: 9,
    kgs: 130,
    iconSrc: "/dungaress.svg",
  },
  {
    id: "pjs",
    label: "PJs",
    percentage: 6,
    kgs: 90,
    iconSrc: "/pjs.svg",
  },
  {
    id: "blankets",
    label: "Blankets",
    percentage: 3,
    kgs: 50,
    iconSrc: "/blankets.svg",
  },
];

// Define the interface for the Usage Cards
export interface UsageMetricData {
  id: string;
  title: string;
  description: string;
  value: number;
  max: number;
  unit: string;
  iconSrc: string; // The path to the SVG icon in your public folder

  // Optional fields specific to the YOY comparison card
  trend?: "up" | "down";
  footerLabel?: string; // e.g., "Product Longevity:"
  footerStatus?: string; // e.g., "Increase"
}

// Dummy data matching the screenshot
export const mockUsageMetricsData: UsageMetricData[] = [
  {
    id: "avg-usage-period",
    title: "Avg usage period",
    description: "Aggregated within brand's product portfolio",
    value: 56,
    max: 56,
    unit: "days",
    iconSrc: "/avg-usage-period.svg", // Replace with your actual SVG filename
  },
  {
    id: "yoy-usage-comparison",
    title: "YOY usage comparison",
    description: "Change in product usage (days)",
    value: 3,
    max: 3,
    unit: "days",
    iconSrc: "/usage-comparison.svg", // Replace with your actual SVG filename
    trend: "up", // This will tell your component to render the green ↑ arrow
    footerLabel: "Product Longevity:",
    footerStatus: "Increase", // This will be styled in green text
  },
  {
    id: "usage-comparison-against-peers",
    title: "Usage comparison against peers",
    description: "Usage relative to peer group (days)",
    value: 6,
    max: 6,
    unit: "days",
    iconSrc: "/usage-coparison-against-peers.svg", // Replace with your actual SVG filename
    trend: "down", // This will tell your component to render the green ↑ arrow
    footerLabel: "Usage performance:",
    footerStatus: "Lower than Peers", // This will be styled in green text
  },
];

// Define the interface for the Usage Comparison Chart
export interface UsageComparisonData {
  month: string;
  greenBrand: number;
  peerIndex: number;
}

// Dummy data structured to mimic the exact curves in the screenshot
export const mockUsageComparisonData: UsageComparisonData[] = [
  { month: "Jan", greenBrand: 25, peerIndex: 15 },
  { month: "Feb", greenBrand: 40, peerIndex: 28 },
  { month: "Mar", greenBrand: 60, peerIndex: 45 },
  { month: "Apr", greenBrand: 40, peerIndex: 15 }, // Noticeable dip
  { month: "May", greenBrand: 45, peerIndex: 40 },
  { month: "Jun", greenBrand: 55, peerIndex: 48 },
  { month: "Jul", greenBrand: 56, peerIndex: 35 },
  { month: "Aug", greenBrand: 52, peerIndex: 25 }, // Another dip
  { month: "Sep", greenBrand: 55, peerIndex: 45 },
  { month: "Oct", greenBrand: 95, peerIndex: 75 }, // Highest peak
  { month: "Nov", greenBrand: 75, peerIndex: 60 },
  { month: "Dec", greenBrand: 60, peerIndex: 50 },
];

export interface ReusabilityBySegmentData {
  id: string;
  label: string;
  reusablePercent: number;
  iconSrc: string;
}

export const mockReusabilityBySegmentData: ReusabilityBySegmentData[] = [
  { id: "baby", label: "Baby", reusablePercent: 80, iconSrc: "/rose.svg" },
  { id: "teen", label: "Teen", reusablePercent: 60, iconSrc: "/teen.svg" },
  {
    id: "room",
    label: "Room Essentials",
    reusablePercent: 55,

    iconSrc: "/room-essentials.svg",
  },
  {
    id: "women",
    label: "Women",
    reusablePercent: 50,

    iconSrc: "/women.svg",
  },
  {
    id: "toddler",
    label: "Toddler",
    reusablePercent: 40,

    iconSrc: "/toddler.svg",
  },
  {
    id: "child",
    label: "Child",
    reusablePercent: 30,

    iconSrc: "/child.svg",
  },
  {
    id: "pre-teen",
    label: "Pre-Teen",
    reusablePercent: 75,

    iconSrc: "/pre-teen.svg",
  },
];

export const mockReusabilityByProductData: ReusabilityBySegmentData[] = [
  {
    id: "bodysuit",
    label: "Bodysuit",
    reusablePercent: 80,

    iconSrc: "/bodysuit.svg",
  },
  {
    id: "tshirts",
    label: "T-shirts",
    reusablePercent: 60,

    iconSrc: "/tshirts.svg",
  },
  {
    id: "shirts",
    label: "Shirts",
    reusablePercent: 55,

    iconSrc: "/shirts.svg",
  },
  {
    id: "dresses",
    label: "Dresses",
    reusablePercent: 50,

    iconSrc: "/dresses.svg",
  },
  {
    id: "dungaress",
    label: "Dungaress",
    reusablePercent: 40,

    iconSrc: "/dungaress.svg",
  },
  {
    id: "pjs",
    label: "PJs",
    reusablePercent: 30,

    iconSrc: "/pjs.svg",
  },
  {
    id: "blankets",
    label: "Blankets",
    reusablePercent: 45,

    iconSrc: "/blankets.svg",
  },
];

export interface EPRComplianceRadialChartData {
  bigRadialChartData: {
    label: string;
    description: string;
    ps: string;
    value: number;
    max: number;
    unit: string;
    footerLable: string;
  };
  SmallRadialChartDart: {
    label: string;
    description: string;
    value: number;
  }[];
}

export const GarmentDiversionData: EPRComplianceRadialChartData = {
  bigRadialChartData: {
    label: "Garment Diversion",
    description: "Units/Kgs",
    ps: "*Accross all sources",
    value: 1410,
    max: 1410,
    unit: "units",
    footerLable: "423 Kgs",
  },
  SmallRadialChartDart: [
    {
      label: "Reusable quantity",
      description: "493 units/148 Kgs",
      value: 35,
    },
    {
      label: "Non-Reusable quantity",
      description: "917 units/284 Kgs",
      value: 65,
    },
  ],
};

export const ReusePathwaysData: EPRComplianceRadialChartData = {
  bigRadialChartData: {
    label: "Reusable volume",
    description: "",
    ps: "",
    value: 493,
    max: 493,
    unit: "units",
    footerLable: "148 Kgs",
  },
  SmallRadialChartDart: [
    {
      label: "'As new' to preloved",
      description: "197 units/60 Kgs",
      value: 40,
    },
    {
      label: "Mend/repair",
      description: "296 units/88 Kgs",
      value: 60,
    },
  ],
};

export const EPRSpendRadialChartData = [
  {
    value: 970,
    max: 970,
    unit: "£",
    footerLable: "Collections",
  },
  {
    value: 450,
    max: 970,
    unit: "£",
    footerLable: "Textile pre-processing",
  },
  {
    value: 200,
    max: 970,
    unit: "£",
    footerLable: "Customer take-back incentives",
  },
];

export interface DisposalLabelDataType {
  color: string;
  label: string;
}

export interface DisposalDataType {
  id: string;
  label: string;
  iconSrc: string;
  outgrownPercent: {
    value: number;
    color: string;
    label?: string;
  };
  repairPercent: {
    value: number;
    color: string;
    label?: string;
  };
  stainedPercent: {
    value: number;
    color: string;
    label?: string;
  };
  resalePercent: {
    value: number;
    color: string;
    label?: string;
  };
  wornPercent: {
    value: number;
    color: string;
    label?: string;
  };
  uncomfortablePercent: {
    value: number;
    color: string;
    label?: string;
  };
  stretchedPercent: {
    value: number;
    color: string;
    label?: string;
  };
  otherPercent: {
    value: number;
    color: string;
    label?: string;
  };
}

export const DisposalBySegmentLabelData: DisposalLabelDataType[] = [
  {
    color: "#84D0D6",
    label: "Outgrown",
  },
  { color: "#2F868D", label: "Repair" },
  { color: "#1A4A4E", label: "Stained" },
  { color: "#F6D279", label: "Resale" },
  { color: "#F1B51F", label: "Worn repeatedly" },
  {
    color: "#F89970",
    label: "Uncomfortable",
  },
  {
    color: "#C75B39",
    label: "Lost shape/Stretched",
  },
  { color: "#595959", label: "Other" },
];

export const DisposalBySegmentData: DisposalDataType[] = [
  {
    id: "baby",
    label: "Baby",
    iconSrc: "/rose.svg",
    outgrownPercent: { value: 10, color: "#84D0D6", label: "Outgrown" },
    repairPercent: { value: 20, color: "#2F868D", label: "Repair" },
    stainedPercent: { value: 5, color: "#1A4A4E", label: "Stained" },
    resalePercent: { value: 15, color: "#F6D279", label: "Resale" },
    wornPercent: { value: 18, color: "#F1B51F", label: "Worn repeatedly" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
      label: "Uncomfortable",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
      label: "Lost shape/Stretched",
    },
    otherPercent: { value: 10, color: "#595959", label: "Other" },
  },
  {
    id: "teen",
    label: "Teen",
    iconSrc: "/teen.svg",
    outgrownPercent: { value: 10, color: "#84D0D6", label: "Outgrown" },
    repairPercent: { value: 20, color: "#2F868D", label: "Repair" },
    stainedPercent: { value: 5, color: "#1A4A4E", label: "Stained" },
    resalePercent: { value: 15, color: "#F6D279", label: "Resale" },
    wornPercent: { value: 18, color: "#F1B51F", label: "Worn repeatedly" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
      label: "Uncomfortable",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
      label: "Lost shape/Stretched",
    },
    otherPercent: { value: 10, color: "#595959", label: "Other" },
  },
  {
    id: "room",
    label: "Room Essentials",
    iconSrc: "/room-essentials.svg",
    outgrownPercent: { value: 10, color: "#84D0D6", label: "Outgrown" },
    repairPercent: { value: 20, color: "#2F868D", label: "Repair" },
    stainedPercent: { value: 5, color: "#1A4A4E", label: "Stained" },
    resalePercent: { value: 15, color: "#F6D279", label: "Resale" },
    wornPercent: { value: 18, color: "#F1B51F", label: "Worn repeatedly" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
      label: "Uncomfortable",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
      label: "Lost shape/Stretched",
    },
    otherPercent: { value: 10, color: "#595959", label: "Other" },
  },
];

export const DisposalByProductLabelData = [
  {
    color: "#84D0D6",
    label: "Outgrown",
  },
  { color: "#2F868D", label: "Repair" },
  { color: "#1A4A4E", label: "Stained" },
  { color: "#F6D279", label: "Resale" },
  { color: "#F1B51F", label: "Worn repeatedly" },
  {
    color: "#F89970",
    label: "Uncomfortable",
  },
  {
    color: "#C75B39",
    label: "Lost shape/Stretched",
  },
  { color: "#595959", label: "Other" },
];

export const DisposalByProductData = [
  {
    id: "bodysuit",
    label: "Bodysuit",
    iconSrc: "/bodysuit.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
  {
    id: "tshirts",
    label: "T-shirts",
    iconSrc: "/tshirts.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
  {
    id: "shirts",
    label: "Shirts",
    iconSrc: "/shirts.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
  {
    id: "dresses",
    label: "Dresses",
    iconSrc: "/dresses.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
  {
    id: "dungaress",
    label: "Dungaress",
    iconSrc: "/dungaress.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
  {
    id: "pjs",
    label: "PJs",
    iconSrc: "/pjs.svg",
    outgrownPercent: { value: 10, color: "#84D0D6" },
    repairPercent: { value: 20, color: "#2F868D" },
    stainedPercent: { value: 5, color: "#1A4A4E" },
    resalePercent: { value: 15, color: "#F6D279" },
    wornPercent: { value: 18, color: "#F1B51F" },
    uncomfortablePercent: {
      value: 20,
      color: "#F89970",
    },
    stretchedPercent: {
      value: 5,
      color: "#C75B39",
    },
    otherPercent: { value: 10, color: "#595959" },
  },
];
