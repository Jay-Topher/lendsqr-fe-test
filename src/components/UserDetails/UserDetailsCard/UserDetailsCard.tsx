import { COLORS } from "@/utils/constants";
import { Divider } from "@mui/material";
import classNames from "classnames";
import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}
const UserDetailsCard = ({ title, children }: Props) => {
  return (
    <>
      <div className="user-details-card mb-16">
        {title && (
          <h6 className="font-weight-500 font-size-16 text-brand mb-16">
            {title}
          </h6>
        )}
        <div className={classNames("user-details-body", { "mt-40": !title })}>
          {children}
        </div>
      </div>
      <Divider
        color={COLORS.primary}
        sx={{ opacity: 0.1, mb: 3 }}
        variant="fullWidth"
      />
    </>
  );
};

export default UserDetailsCard;
