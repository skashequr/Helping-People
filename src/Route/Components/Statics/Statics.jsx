
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Category A', value: 3 },
  { name: 'Category B', value: 3 },
];

const colors = ['#FF5733', '#33FF57']; // Define colors for each category

// Calculate total value
const totalValue = data.reduce((sum, item) => sum + item.value, 0);

// Calculate percentages and add them to the data
const dataWithPercentages = data.map((item, index) => ({
  ...item,
  percentage: (( 12 / totalValue) * 100).toFixed(2),

  fill: colors[index], // Assign colors
}));

const Statics = () => {
  return (
    <div className=' flex justify-center items-center'>
      <PieChart width={600} height={600}>
      <Pie
        data={dataWithPercentages}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        labelLine={false} // Hide label lines
        label={({ cx, cy, midAngle, percentage, name }) => {
          const radius = 60;
          const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
          const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
          return (
            <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${name} ${percentage}%`}
            </text>
          );
        }}
      >
        {dataWithPercentages.map((entry, index) => (
          <Cell key={index} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name, props) => `${value} (${props.payload.percentage}%)`} />
      <Legend />
    </PieChart>
    </div>
  );
};

export default Statics;