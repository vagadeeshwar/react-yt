const Date = (props) => {
  return (
    <div className="flex w-24 flex-col rounded-2xl border-2 border-slate-200 bg-zinc-800 p-2 text-center font-semibold text-white">
          <div className="text-sm">{props.month}</div>
          <div className="text-sm font-light">{props.year}</div>
      <div className="pt-1 text-3xl">{props.day}</div>
    </div>
  );
};

export default Date;
