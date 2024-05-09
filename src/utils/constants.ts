/// <reference types="vite-plugin-svgr/client" />
import { DrawerMenuLinks } from "./types";
import Users from "@/assets/icons/users.svg?react";
import UsersCard from "@/assets/icons/users-card.svg?react";
import Guarantors from "@/assets/icons/guarantors.svg?react";
import Loans from "@/assets/icons/loans.svg?react";
import DecisionModels from "@/assets/icons/decision-models.svg?react";
import Savings from "@/assets/icons/savings.svg?react";
import LoanRequests from "@/assets/icons/loan-requests.svg?react";
import WhiteList from "@/assets/icons/whitelist.svg?react";
import Karma from "@/assets/icons/karma.svg?react";
import Organization from "@/assets/icons/organization.svg?react";
import SavingsProducts from "@/assets/icons/savings-products.svg?react";
import Fees from "@/assets/icons/fees.svg?react";
import Transactions from "@/assets/icons/transactions.svg?react";
import Services from "@/assets/icons/services.svg?react";
import ServiceAccount from "@/assets/icons/service-account.svg?react";
import Settlements from "@/assets/icons/settlements.svg?react";
import Reports from "@/assets/icons/reports.svg?react";
import Preferences from "@/assets/icons/preferences.svg?react";
import Percentage from "@/assets/icons/percentage.svg?react";
import AuditLogs from "@/assets/icons/audit-logs.svg?react";
import ActiveUsers from "@/assets/icons/active-users.svg?react";
import LoanUsers from "@/assets/icons/loan-users.svg?react";
import SavingsUsers from "@/assets/icons/savings-users.svg?react";

export const APP_ROUTES = {
  dashboard: "/dashboard",
  home: "/dashboard/users",
  userDetails: (id: string) => `/dashboard/users/${id}`,
  login: "/login",
};

export const COLORS = {
  white: "#ffffff",
  primary: "#545f7d",
  btnPrimary: "#39cdcc",
  brand: "#213f7d",
};

export const DRAWER_WIDTH = 283;
export const APP_BAR_HEIGHT = 100;

export const drawerMenuLinks: DrawerMenuLinks[] = [
  {
    category: "Customers",
    routes: [
      {
        title: "Users",
        href: "/dashboard/users",
        icon: Users,
      },
      {
        title: "Guarantors",
        href: "#",
        icon: Guarantors,
      },
      {
        title: "Loans",
        href: "#",
        icon: Loans,
      },
      {
        title: "Decision Models",
        href: "#",
        icon: DecisionModels,
      },
      {
        title: "Savings",
        href: "#",
        icon: Savings,
      },
      {
        title: "Loan Requests",
        href: "#",
        icon: LoanRequests,
      },
      {
        title: "Whitelist",
        href: "#",
        icon: WhiteList,
      },
      {
        title: "Karma",
        href: "#",
        icon: Karma,
      },
    ],
  },
  {
    category: "Businesses",
    routes: [
      {
        title: "Organization",
        href: "#",
        icon: Organization,
      },
      {
        title: "Loan Products",
        href: "#",
        icon: LoanRequests,
      },
      {
        title: "Savings Products",
        href: "#",
        icon: SavingsProducts,
      },
      {
        title: "Fees and Charges",
        href: "#",
        icon: Fees,
      },
      {
        title: "Transactions",
        href: "#",
        icon: Transactions,
      },
      {
        title: "Services",
        href: "#",
        icon: Services,
      },
      {
        title: "Service Account",
        href: "#",
        icon: ServiceAccount,
      },
      {
        title: "Settlements",
        href: "#",
        icon: Settlements,
      },
      {
        title: "Reports",
        href: "#",
        icon: Reports,
      },
    ],
  },
  {
    category: "Settings",
    routes: [
      { title: "Preferences", href: "#", icon: Preferences },
      { title: "Fees and Pricing", href: "#", icon: Percentage },
      { title: "Audit Logs", href: "#", icon: AuditLogs },
    ],
  },
];

export const cardAnalytics = [
  { title: "Users", figure: "2,453", Icon: UsersCard },
  { title: "Active users", figure: "2,453", Icon: ActiveUsers },
  { title: "Users with loans", figure: "12,453", Icon: LoanUsers },
  { title: "Users with savings", figure: "12,453", Icon: SavingsUsers },
];

export const userStatus = ["Active", "Inactive", "Pending", "Blacklisted"];
export const sampleOrganizations = [
  "LOT Polish Airlines",
  "Air France-KLM",
  "Etihad Airways",
  "Qatar Airways",
];
