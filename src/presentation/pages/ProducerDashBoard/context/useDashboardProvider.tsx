import { useDashboard } from "../hooks/useDashboard";
import { DashboardContext } from "./useDashboardContext";

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const dashboard = useDashboard();
    return (
        <DashboardContext.Provider value={dashboard}>
            {children}
        </DashboardContext.Provider>
    )
}
