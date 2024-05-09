import { Status } from "@/utils/types";
import classNames from "classnames";

interface Props {
  status: Status;
}
const StatusChip = ({ status }: Props) => {
  return (
    <span className={classNames("status-chip font-size-14", status)}>
      {status === "active" && "Active"}
      {status === "inactive" && "Inactive"}
      {status === "pending" && "Pending"}
      {status === "blacklisted" && "Blacklisted"}
    </span>
  );
};

export default StatusChip;
