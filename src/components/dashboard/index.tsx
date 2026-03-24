export function CashFlowChart(props: any) { return <div className="p-4 text-muted-foreground">Gráfico de Fluxo de Caixa</div>; }
export function PaymentMethodChart(props: any) { return <div className="p-4 text-muted-foreground">Gráfico de Métodos de Pagamento</div>; }
export function RevenueEvolutionChart(props: any) { return <div className="p-4 text-muted-foreground">Evolução de Receita</div>; }
export function CompanyHealthCard(props: any) { return <div className="p-4 text-muted-foreground">Saúde da Empresa</div>; }
export function DashboardSection({ children, ...props }: any) { return <div {...props}>{children}</div>; }
