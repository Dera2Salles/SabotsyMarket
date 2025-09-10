import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { NavBar } from "./navBar"

export function SiteHeader() {
  return (
    <header className=" group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-15 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-green-700 hover:text-green-700" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <NavBar/>
      </div>
    </header>
  )
}
