import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatsChartProps {
  data: Array<{ month: string; [key: string]: number | string }>;
  dataKey: string;
  color: string;
}

export const StatsChart: React.FC<StatsChartProps> = ({ data, dataKey, color }) => (
  <div className="h-80 w-full bg-slate-900/50 rounded-lg p-4">
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '0.5rem',
          }}
        />
        <Line 
          type="monotone" 
          dataKey={dataKey} 
          stroke={color} 
          strokeWidth={2} 
          dot={{ fill: color }} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);