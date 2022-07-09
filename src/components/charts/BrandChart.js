import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Zomato', value: 400 },
  { name: 'Swiggy', value: 300 },
  { name: 'Amazon', value: 300 },
  { name: 'EatFit', value: 200 },
];

const data02 = [
  { name: 'Zomato', value: 2400 },
  { name: 'Swiggy', value: 4567 },
  { name: 'Amazon', value: 1398 },
  { name: 'EatFit', value: 9800 },
];

export default class BrandChart extends PureComponent {
 
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
