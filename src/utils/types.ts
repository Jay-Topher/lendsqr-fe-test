import React from "react";

export interface DrawerMenuLinks {
  category: string;
  routes: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href: string;
    title: string;
  }[];
}

export type Status = 'active' | 'inactive' | 'pending' | 'blacklisted';

export interface User {
  status: Status;
  name: {
    first: string;
    middle: string;
    last: string;
  };
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  organization: { name: string; iataCode: string };
  id: string;
}
