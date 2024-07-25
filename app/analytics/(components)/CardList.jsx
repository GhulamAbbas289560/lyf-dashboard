import Image from "next/image";
const Card = ({ image, heading, description, color, banner }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-t-2xl bg-white py-6 relative"
      style={{ borderBottom: `1px solid ${color}` }}
    >
      <Image src={image} width={60} height={60} alt={heading} />
      <h1 className="text-slate-600 font-medium">{heading}</h1>
      {description}
      <h1 className="absolute top-4 right-4 bg-black/5 text-xs font-semibold px-3 py-1 rounded">
        {banner}
      </h1>
    </div>
  );
};
export default function CardList() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card
        image={"/inhaler.svg"}
        heading={"Inhale Mate"}
        description={<h1 className="font-semibold text-lg">04/06</h1>}
        color={"orange"}
        banner={"Last 24 hr's"}
      />
      <Card
        image={"/lungs.svg"}
        heading={"Cough Log"}
        description={<h1 className="font-semibold text-lg">12</h1>}
        banner={"Last 24 hr's"}
        color={"rgba(var(--primary) / 0.7)"}
      />
      <Card
        image={"/waterlog.svg"}
        heading={"Water Log"}
        color={"rgba(var(--primary))"}
        description={
          <h1 className="font-semibold text-lg">
            01/02 <span className="text-sm text-slate-600">liter</span>
          </h1>
        }
        banner={"Last 24 hr's"}
      />
    </div>
  );
}
