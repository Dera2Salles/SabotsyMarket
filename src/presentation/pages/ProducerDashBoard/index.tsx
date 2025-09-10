import { DashboardLayout } from "./components/dashboardLayout";

import { AppSidebar } from "./components/app-sidebar";
import { SiteHeader } from "./components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { type JSX } from "react";
import { DataAnalytic } from "./components/otherPage";
import { useProductContext } from "@/presentation/hooks/useProduct";

export const ProducerDashboardPage = () => {
  const page: JSX.Element[] = [<DashboardLayout />, <DataAnalytic />];
  const { index } = useProductContext();

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className=" overflow-hidden ">
        <SiteHeader />
        {page[index]}
      </SidebarInset>
    </SidebarProvider>
  );
};
