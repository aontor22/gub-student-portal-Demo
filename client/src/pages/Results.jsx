import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard } from "./_shared";

export default function Results() {
  const { data, loading, error } = useApi(studentApi.results, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;

  const termColumns = [
    { key: "sl", label: "SL" },
    { key: "trimester", label: "Trimester" },
    { key: "probationCredit", label: "Credit(Probation)" },
    { key: "probationGpa", label: "Term GPA(Probation)" },
    { key: "probationCgpa", label: "CGPA(Probation)" },
    { key: "transcriptCredit", label: "Credit(Transcript)" },
    { key: "transcriptGpa", label: "GPA(Transcript)" },
    { key: "transcriptCgpa", label: "CGPA(Transcript)" }
  ];
  const courseColumns = [
    { key: "semester", label: "Semester/Trimester" },
    { key: "code", label: "Course Code" },
    { key: "title", label: "Course Title" },
    { key: "credit", label: "Credit" },
    { key: "grade", label: "Grade" },
    { key: "point", label: "Point" },
    { key: "status", label: "Course Status" }
  ];

  return (
    <>
      <PageHeader title="Result History" subtitle="Trimester wise GPA and CGPA with complete course details." />
      <PortalCard title="Trimester wise GPA and CGPA">
        <DataTable columns={termColumns} rows={data.semesters} />
      </PortalCard>
      <div className="search-line"><button>Search</button><input placeholder="Search here..." /></div>
      <PortalCard>
        <DataTable columns={courseColumns} rows={data.courses} />
      </PortalCard>
    </>
  );
}
