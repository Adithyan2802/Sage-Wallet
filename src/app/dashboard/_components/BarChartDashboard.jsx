import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarChartDashboard({ budgetList }) {
  return (
    <div className=" bg-neutral-900 rounded-xl p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <br />
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart data={budgetList} margin={{ top: 7 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSpend" stackId="a" fill="#5b21b6" opacity={0.4} />
          <Bar dataKey="amount" stackId="a" fill="#71717a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default BarChartDashboard;
