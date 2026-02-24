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
