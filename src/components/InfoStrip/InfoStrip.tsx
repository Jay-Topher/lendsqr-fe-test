interface Props {
  label: string;
  value: string | number;
}

const InfoStrip = ({ label, value }: Props) => {
  const id = `info-strip-${label}`;
  return (
    <div>
      <p
        aria-describedby={id}
        className="uppercase font-size-12 text-primary mb-10"
      >
        {label}
      </p>
      <p id={id} className="font-size-16 font-weight-500 text-primary">
        {value}
      </p>
    </div>
  );
};

export default InfoStrip;
