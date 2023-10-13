import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "store";
import { SelectComponent } from 'components';

export const ChartComponent: React.FC = (props) => {
  const { employees } = useSelector((root: RootState) => root.employee);
  const [chartType, setChartType] = useState<string>('salary');

  const onChangeChartType = () => {
    if(chartType === 'salary') {
      setChartType('age');
    } else {
      setChartType('salary');
    }
  }

  return (
    <div>
      <SelectComponent 
        value={chartType} 
        name="chart" 
        width="200px"
        margin="40px 0"
        onChange={onChangeChartType}
      >
        <option value="salary">Salary</option>
        <option value="age">Age</option>
      </SelectComponent>
      
      <BarChart width={500} height={300} data={employees}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey={chartType} />
        <Tooltip />
        <Legend />
        <Bar dataKey={chartType} fill="#8884d8" />
      </BarChart>
    </div>
  );
}