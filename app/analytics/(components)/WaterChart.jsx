"use client";
import Image from "next/image";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function WaterChart() {
  const chartData = [
    { day: "Monday", water: 1.5 },
    { day: "Tuesday", water: 2.0 },
    { day: "Wednesday", water: 2 },
    { day: "Thursday", water: 1.8 },
    { day: "Friday", water: 2.1 },
    { day: "Saturday", water: 1 },
    { day: "Sunday", water: 1.5 },
  ];
  const chartConfig = {
    water: {
      label: "Water",
      color: "#59acd9",
    },
  };
  return (
    <div className="bg-white flex flex-col gap-3 py-5 px-5 rounded-lg border-[1px]">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/waterlog-solid.svg"}
            width={38}
            height={38}
            alt="WaterLog Logo Solid"
          />
          <h1 className="font-bold">WaterLog</h1>
        </div>
        <div className="flex"></div>
      </div>
      <ChartContainer config={chartConfig} className="-ml-10 mt-2 min-h-20">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 8" // This makes the grid lines dashed
            verticalPoints={2}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          {/* <YAxis
                tickLine={false}
                tickMargin={0}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
            /> */}
          <YAxis
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            ticks={[0, 0.5, 1, 1.5, 2, 2.5]} // Use custom ticks here
            domain={[0, 2]} // Set the domain to match your ticks
          />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent />}
            formatter={(value) => `${value} Liters`}
          />
          <defs>
            <linearGradient id="fillWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#59acd9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#59acd9" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="water"
            type="natural"
            fill="url(#fillWater)"
            fillOpacity={0.4}
            stroke="#59acd9"
            stackId="a"
            strokeWidth={4} // Increase stroke width here
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
