import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 1',
    MetabaseFileData: 4000,
    ChannelFileData: 2400,
    amt: 2400,
  },
  {
  
    MetabaseFileData: 3000,
  ChannelFileData: 1398,
    amt: 2210,
  },
  {
    
 MetabaseFileData: 2000,
   ChannelFileData: 9800,
    amt: 2290,
  },
  {
   name:"jan 4",
   MetabaseFileData: 2780,
   ChannelFileData: 3908,
    amt: 2000,
  },
  {
   
   MetabaseFileData: 1890,
   ChannelFileData: 4800,
    amt: 2181,
  },
  {
    
    MetabaseFileData: 2390,
   ChannelFileData: 3800,
    amt: 2500,
  },
  {
    name:"jan 7",
    MetabaseFileData: 3490,
    ChannelFileData: 4300,
    amt: 2100,
  },
];

export default class TrendChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
       
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Legend />
          <Bar dataKey="MetabaseFileData" fill="#2171B5" />
          <Bar dataKey="ChannelFileData" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
