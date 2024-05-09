import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import classNames from "classnames";

interface Props {
  direction: "previous" | "next";
}

const PaginationBtn = ({ direction }: Props) => {
  return (
    <span
      className={classNames("pagination-btn", {
        "is-next": direction === "next",
      })}
    >
      <ChevronLeft />
    </span>
  );
};

export default PaginationBtn;
