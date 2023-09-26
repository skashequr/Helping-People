import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const Statics = () => {
  const fixedDataCount = 12; 
  const COLORS = ['#FF444A', '#00C49F'];

  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const data = JSON.parse(localStorage.getItem("donation")) || [];
    setLocalStorageData(data);
  }, []);


  // const totalLocalStorageValue = localStorageData.reduce((total, item) => total + item.value, 0);

  const localStoragePercentage = (localStorageData.length / fixedDataCount) * 100;

  const fixedDataPercentage = ((fixedDataCount - localStorageData.length) / fixedDataCount) * 100;

  return (
    <div>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            dataKey="value"
            data={[
              { name: 'Fixed Data', value: fixedDataPercentage },
              { name: 'Local Storage Data', value: localStoragePercentage },
            ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={200}
            fill="#FF444A"
            
          
          >
            {[
              { name: 'Fixed Data', value: fixedDataPercentage },
              { name: 'Local Storage Data', value: localStoragePercentage },
            ].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
              
              value={`${localStoragePercentage.toFixed(1)}%`}
              position="center"
              fill="#FFFFFF"
              fontSize={25}
            />
            <Label
              value={`${fixedDataPercentage.toFixed(1)}%`}
              position="top"
              fill="#FFFFFF"
              fontSize={25}
              
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className=' flex justify-center items-center'>
      <div className=' flex justify-center items-center'>
        <p>Your Donation</p>
        <div className=' bg-[#00C49F] p-2 w-24 m-2'>  </div>
      </div>
      <div className=' flex justify-center items-center m-3'>
        <p>Total Donation</p>
        <div className=' bg-[#FF444A] p-2 w-24 m-2'>  </div>
      </div>
      </div>
    </div>
  );
};

export default Statics;
