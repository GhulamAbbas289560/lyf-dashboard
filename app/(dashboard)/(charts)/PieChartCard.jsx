"use client";
import { Circle } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function PieChartCard({
  chartData,
  backgroundColor,
  chartValue,
  chartSelector,
  icon,
  heading,
  subheading,
  showChart,
}) {
  const DashboardChart = ({ chartData, selector, value }) => {
    const chartConfig = {};
    return (
      <>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] min-h-[100px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey={value} nameKey={selector} />
          </PieChart>
        </ChartContainer>
      </>
    );
  };
  const CustomLegend = ({ data }) => {
    return (
      <div className="flex justify-between">
        {data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div className="flex items-center gap-1">
              <Circle fill={item.fill} stroke={false} size={15} />
              <h1 className="text-black/50 font-semibold text-sm">
                {item.disease}
              </h1>
            </div>
            <h1 className="font-semibold">{item.value}</h1>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      className={`rounded-xl p-4 flex flex-col justify-between`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`flex justify-between ${!showChart && "mt-7"}`}>
        <div className="flex items-center gap-2">
          {icon}
          <div className="flex flex-col">
            <h1 className="font-medium text-black/50">{heading}</h1>
            <p className="font-bold -mt-px">{subheading}</p>
          </div>
        </div>
        {showChart && (
          <div>
            <DashboardChart
              chartData={chartData}
              value={chartValue}
              selector={chartSelector}
            />
          </div>
        )}
      </div>
      <CustomLegend data={chartData} />
    </div>
  );
}
