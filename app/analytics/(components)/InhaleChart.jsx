"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function InhaleChart() {
  const CustomLegend = ({ text, color }) => {
    return (
      <div className="flex gap-2 items-center bg-gray-100/50 px-2 rounded">
        <div
          className="w-3 h-3 rounded"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-sm">{text}</p>
      </div>
    );
  };
  const chartData = [
    { day: "Monday", meter: 4, nebulizer: 2 },
    { day: "Tuesday", meter: 2, nebulizer: 1 },
    { day: "Wednesday", meter: 3, nebulizer: 1 },
    { day: "Thursday", meter: 2, nebulizer: 3 },
    { day: "Friday", meter: 1, nebulizer: 2 },
    { day: "Saturday", meter: 1, nebulizer: 4 },
    { day: "Sunday", meter: 3, nebulizer: 2 },
  ];
  const chartConfig = {
    meter: {
      label: "Meter Dose",
      color: "#26bd6c",
    },
    nebulizer: {
      label: "Nebulizer",
      color: "#924fe8",
    },
  };
  return (
    <div className="bg-white flex flex-col gap-3 py-5 px-5 rounded-lg border-[1px]">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/inhale-solid.svg"}
            width={38}
            height={38}
            alt="Inhale Logo Solid"
          />
          <h1 className="font-bold">InhaleMate</h1>
        </div>
        <div className="flex">
          <CustomLegend text={"Meter Dose"} color={"#26bd6c"} />
          <CustomLegend text={"Nebulizer"} color={"#924fe8"} />
        </div>
      </div>
      <ChartContainer config={chartConfig} className="-ml-2 min-h-40">
        <BarChart accessibilityLayer data={chartData} barSize={10}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 8" // This makes the grid lines dashed
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => `${value} doses`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="nebulizer" fill="#924fe8" radius={2} />
          <Bar dataKey="meter" fill="#26bd6c" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
