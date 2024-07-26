"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function CoughChart() {
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
    { day: "Monday", high: 4, low: 2 },
    { day: "Tuesday", high: 2, low: 1 },
    { day: "Wednesday", high: 3, low: 1 },
    { day: "Thursday", high: 2, low: 3 },
    { day: "Friday", high: 1, low: 2 },
    { day: "Saturday", high: 1, low: 4 },
    { day: "Sunday", high: 3, low: 2 },
  ];
  const chartConfig = {
    high: {
      label: "High",
      color: "#26bd6c",
    },
    low: {
      label: "Low",
      color: "#924fe8",
    },
  };
  return (
    <div className="bg-white flex flex-col gap-3 py-5 px-5 rounded-lg border-[1px]">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/cough-solid.svg"}
            width={38}
            height={38}
            alt="Cough Logo Solid"
          />
          <h1 className="font-bold">CoughLog</h1>
        </div>
        <div className="flex">
          <CustomLegend text={"High"} color={"#fb3307"} />
          <CustomLegend text={"Low"} color={"#63abfd"} />
        </div>
      </div>
      <ChartContainer config={chartConfig} className="-ml-8">
        <BarChart accessibilityLayer data={chartData} barSize={10}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 8" // This makes the grid lines dashed
            verticalPoints={2}
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
            tickMargin={20}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="high" stackId="a" fill="#fb3307" radius={10} />
          <Bar dataKey="low" stackId="a" fill="#63abfd" radius={10} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
