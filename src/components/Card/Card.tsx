import React from "react";

interface Props {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  figure: string;
}

const Card = ({ title, Icon, figure }: Props) => {
  return (
    <div className="card box-shadow">
      <span className="card-icon">
        <Icon />
      </span>
      <h6 className="card-title font-size-14 font-weight-500 uppercase">{title}</h6>
      <p className="card-figure font-size-24 font-weight-600">{figure}</p>
    </div>
  );
};

export default Card;
