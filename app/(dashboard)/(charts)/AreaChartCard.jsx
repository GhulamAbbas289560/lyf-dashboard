"use client";
import { Area, AreaChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function AreaChartCard({
  backgroundColor,
  heading,
  subheading,
  icon,
  iconFooter,
  chartData,
  chartColor,
}) {
  const chartConfig = {};
  return (
    <div
      className={`rounded-xl p-4 flex flex-col justify-center`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`flex flex-col`}>
        <div className="flex items-center gap-2">
          {icon}
          <div className="flex flex-col">
            <h1 className="font-medium text-black/50">{heading}</h1>
            <p className="font-bold -mt-px">{subheading}</p>
          </div>
        </div>
        <div className="flex justify-between">
          {iconFooter}
          <ChartContainer config={chartConfig} className="min-h-20">
            <AreaChart accessibilityLayer data={chartData}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id={subheading} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="registrations"
                type="natural"
                fill={`url(#${subheading})`}
                fillOpacity={0.4}
                stroke={chartColor}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
