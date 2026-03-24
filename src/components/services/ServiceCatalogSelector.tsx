export interface ServiceItemLocal {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  unit_price: number;
  total: number;
  discount?: number;
  discount_type?: string;
  [key: string]: any;
}

export function ServiceCatalogSelector(props: any) { return null; }
