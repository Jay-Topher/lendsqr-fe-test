import { Box, Divider, Link as MuiLink, Rating, Stack } from "@mui/material";
import BackArrow from "@/assets/icons/back-arrow.svg?react";
import Avatar from "@/assets/icons/avatar.svg?react";
import StarOutline from "@/assets/icons/star-outline.svg?react";
import Star from "@/assets/icons/star.svg?react";
import { Link } from "react-router-dom";
import { APP_ROUTES, COLORS } from "@/utils/constants";
import Button from "../Button";
import TabHeader from "../TabHeader";
import React from "react";
import TabPanel from "../TabPanel";
import UserDetailsCard from "./UserDetailsCard";
import InfoStrip from "../InfoStrip";
import { useQuery } from "@tanstack/react-query";
import { getSavedUser } from "@/utils";

const UserDetails = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const {
    data: sampleUser,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryFn: getSavedUser,
    queryKey: ["users", "grace"],
  });

  return (
    <div className="user-details">
      <div>
        <MuiLink
          component={Link}
          to={APP_ROUTES.home}
          className="back-link"
          color="text.primary"
          underline="none"
        >
          <BackArrow />
          <span className="back-link-text font-size-16">Back to Users</span>
        </MuiLink>
      </div>
      <div className="header-row mb-32">
        <h2 className="font-weight-500 font-size-24">User Details</h2>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            borderColor={COLORS.danger}
            color={COLORS.danger}
            bgColor={COLORS.white}
          >
            Blacklist User
          </Button>
          <Button
            variant="outlined"
            borderColor={COLORS.btnPrimary}
            color={COLORS.btnPrimary}
            bgColor={COLORS.white}
            disabled
          >
            Activate User
          </Button>
        </Stack>
      </div>
      {isLoading && <p>Fetching user...</p>}
      {isError && <p>Failed to fetch user</p>}
      {isSuccess && sampleUser && (
        <>
          <div className="box-shadow user-details-header mb-32">
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Stack spacing={2} direction="row" alignItems="center" pr={2}>
                <Avatar />
                <div>
                  <p className="font-size-22 font-weight-500 user-name text-brand">
                    {sampleUser.name.first} {sampleUser.name.last}
                  </p>
                  <p className="font-size-14">{sampleUser.id}</p>
                </div>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                color={COLORS.primary}
                sx={{ opacity: 0.2 }}
              />
              <div className="user-tier-container px-16">
                <p className="mb-5">User's tier</p>
                <Rating
                  max={3}
                  name="user tier"
                  value={sampleUser.teir}
                  readOnly
                  color="#e9b201"
                  emptyIcon={<StarOutline />}
                  icon={<Star />}
                />
              </div>
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                color={COLORS.primary}
                sx={{ opacity: 0.2 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: 2,
                }}
              >
                <p className="font-size-22 text-brand font-weight-500">
                  {sampleUser.bank.balance}
                </p>
                <p className="font-size-12">{`${sampleUser.bank.accountNumber}/${sampleUser.bank.name}`}</p>
              </Box>
            </Stack>
            <TabHeader value={value} handleChange={handleChange} />
          </div>
          <div className="p-16 box-shadow bg-white">
            <TabPanel value={value} index={0}>
              <UserDetailsCard title="Personal Information">
                <InfoStrip
                  label="Full name"
                  value={`${sampleUser.name.first} ${sampleUser.name.last}`}
                />
                <InfoStrip
                  label="Phone number"
                  value={sampleUser.phoneNumber}
                />
                <InfoStrip label="Email address" value={sampleUser.email} />
                <InfoStrip label="BVN" value={sampleUser.bank.bvn} />
                <InfoStrip label="Gender" value={sampleUser.gender} />
                <InfoStrip
                  label="Marital status"
                  value={sampleUser.maritalStatus}
                />
                <InfoStrip
                  label="Children"
                  value={sampleUser.children ? sampleUser.children : "None"}
                />
                <InfoStrip
                  label="Residence type"
                  value={sampleUser.residenceType}
                />
              </UserDetailsCard>
              <UserDetailsCard title="Education and Employment">
                <InfoStrip
                  label="level of education"
                  value={sampleUser.employment.educationLevel}
                />
                <InfoStrip
                  label="Employment status"
                  value={sampleUser.employment.employmentStatus}
                />
                <InfoStrip
                  label="sector of employment"
                  value={sampleUser.employment.employmentSector}
                />
                <InfoStrip
                  label="Duration of employment"
                  value={sampleUser.employment.employmentDuration}
                />
                <InfoStrip
                  label="office email"
                  value={sampleUser.employment.officeEmail}
                />
                <InfoStrip
                  label="Monthly income"
                  value={sampleUser.employment.monthlyIncome}
                />
                <InfoStrip
                  label="Loan repayment"
                  value={sampleUser.employment.loanRepayment}
                />
              </UserDetailsCard>
              <UserDetailsCard title="Socials">
                <InfoStrip label="Twitter" value={sampleUser.socials.twitter} />
                <InfoStrip
                  label="Facebook"
                  value={sampleUser.socials.facebook}
                />
                <InfoStrip
                  label="Instagram"
                  value={sampleUser.socials.instagram}
                />
              </UserDetailsCard>
              <UserDetailsCard title="Guarantor">
                <InfoStrip
                  label="Full name"
                  value={sampleUser.guarantors[0].fullName}
                />
                <InfoStrip
                  label="Phone number"
                  value={sampleUser.guarantors[0].phoneNumber}
                />
                <InfoStrip
                  label="Email address"
                  value={sampleUser.guarantors[0].email}
                />
                <InfoStrip
                  label="Relationship"
                  value={sampleUser.guarantors[0].relationship}
                />
              </UserDetailsCard>
              <UserDetailsCard>
                <InfoStrip
                  label="Full name"
                  value={sampleUser.guarantors[1].fullName}
                />
                <InfoStrip
                  label="Phone number"
                  value={sampleUser.guarantors[1].phoneNumber}
                />
                <InfoStrip
                  label="Email address"
                  value={sampleUser.guarantors[1].email}
                />
                <InfoStrip
                  label="Relationship"
                  value={sampleUser.guarantors[1].relationship}
                />
              </UserDetailsCard>
            </TabPanel>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
