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

export interface FullUser extends User {
  teir: number;
  bank: {
    name: string;
    accountNumber: string;
    balance: string;
    bvn: string;
  };
  maritalStatus: string;
  children: number;
  residenceType: string;
  gender: string;
  employment: {
    educationLevel: string;
    employmentStatus: string;
    employmentSector: string;
    employmentDuration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
}