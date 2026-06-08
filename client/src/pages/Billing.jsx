import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import StatCard from "../components/ui/StatCard";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard } from "./_shared";

export default function Billing() {
  const { data, loading, error } = useApi(studentApi.billing, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;

  const installmentColumns = [
    { key: "sl", label: "SL. No" },
    { key: "installment", label: "Installment Number" },
    { key: "dueDate", label: "Due Date" },
    { key: "amount", label: "Installment Amount" },
    { key: "payable", label: "Payable" },
    { key: "paid", label: "Paid Fee" }
  ];
  const ledgerColumns = [
    { key: "sl", label: "SL" },
    { key: "feeType", label: "Fee Type" },
    { key: "courseCode", label: "Course Code" },
    { key: "credit", label: "Credit" },
    { key: "amount", label: "Amount" },
    { key: "discount", label: "Discount" },
    { key: "payment", label: "Payment" },
    { key: "date", label: "Date" },
    { key: "term", label: "Term" },
    { key: "remarks", label: "Remarks" }
  ];

  return (
    <>
      <PageHeader title="Bill History" subtitle="Semester payments, installment status and ledger activity." />
      <div className="stats-grid four-soft">
        <StatCard label="Total Fee" value={`৳${data.summary.totalFee}`} hint={`Discount: ৳${data.summary.totalDiscount}`} tone="blue" />
        <StatCard label="Total Bill" value={`৳${data.summary.totalBill}`} hint={`Paid: ৳${data.summary.totalPaid}`} tone="green" />
        <StatCard label="Balance" value={`৳${data.summary.balance}`} hint="Due or advance" tone="amber" />
        <StatCard label="Amount to Pay" value={`৳${data.summary.amountToPay}`} hint="Minimum payment" tone="violet" />
      </div>
      <PortalCard title="Installment Status">
        <DataTable columns={installmentColumns} rows={data.installments} />
      </PortalCard>
      <div className="search-line"><button>Search</button><input placeholder="Search here..." /></div>
      <PortalCard title="Ledger Details">
        <DataTable columns={ledgerColumns} rows={data.ledger} />
      </PortalCard>
    </>
  );
}
