import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-account" className="p-3">
      <div className="d-flex">
        <div className="d-none d-md-block me-5" style={{ minWidth: 180 }}>
          <AccountNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
