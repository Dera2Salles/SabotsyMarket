import { DashboardLayout } from "./components/dashboardLayout";
import { NavBar } from "./components/navBar";
import { DashboardProvider } from "./context/useDashboardProvider";

export const ProducerDashboardPage = () => {
  return (
    <>
      <NavBar />
      <DashboardProvider>
        <DashboardLayout />
      </DashboardProvider>
    </>
  );
};
