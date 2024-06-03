import './BalanceWheel.css';
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Header from '../Header/Header';
import { InputsSection } from '../InputsSection/InputsSection';
import { ResultTextarea } from '../ResultFooter/ResultTextarea';

const initialValues = {
  health: 5,
  career: 5,
  relationships: 5,
  finances: 5,
  personalGrowth: 5,
  environment: 5,
  leisure: 5,
  spirituality: 5,
};

const aspectLabels = {
  health: 'Здоровье',
  career: 'Карьера',
  relationships: 'Отношения',
  finances: 'Финансы',
  personalGrowth: 'Личностный рост',
  environment: 'Окружение',
  leisure: 'Досуг',
  spirituality: 'Духовность',
};

const BalanceWheel = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    let { name, value } = e;
    if (value <= 0) { value = 1 }
    if (value >= 10) { value = 10 }

    setValues({...values,[name]: value,})
  }

  const data = Object.keys(values).map((key) => ({
    subject: aspectLabels[key],
    A: values[key],
    fullMark: 10,
  }));

  return (
    <div className="container">
      <Header/>
      <InputsSection values={values} handleChange={handleChange} aspectLabels={aspectLabels}/>
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={420} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          id='radar'
          name="Satisfaction"
          dataKey="A"
          stroke="#067c91bf"
          fill="#510606"
          fillOpacity={.7}
          dot
        />
      </RadarChart>
      <ResultTextarea />
    </div>
  );
};

export default BalanceWheel;
