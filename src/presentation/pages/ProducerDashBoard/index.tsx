import { DashboardLayout } from './components/DashboardLayout';

import { AppSidebar } from './components/AppSidebar';
import { SiteHeader } from './components/SiteHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { type JSX } from 'react';
import { DataAnalytic } from './components/DataAnalytic';
import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';

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
