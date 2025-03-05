import TaskItems from "@/components/TaskItems";

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="text-2xl text-center">Lista de tarefas</h1>

      <TaskItems/>
    </div>
  );
}
