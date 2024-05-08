import React from "react";

export interface DrawerMenuLinks {
  category: string;
  routes: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href: string;
    title: string;
  }[];
}
