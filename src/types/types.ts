export type FactPlanData = {
  income: number;
  activePartners: number;
};

export type MonthlyData = {
  income: number;
  activePartners: number;
  plan: FactPlanData;
  fact: FactPlanData;
};

export type TableEntry = {
  id: number;
  adminId: number;
  adminName: string;
  months: (MonthlyData | null)[];
  year: number;
};

export type TotalEntry = {
  fact: FactPlanData;
  plan: FactPlanData;
};

export type Data = {
  total: TotalEntry[];
  table: TableEntry[];
};

export type ApiResponseWrapper = {
  success: boolean;
  data: Data;
};
