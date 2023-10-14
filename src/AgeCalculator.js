import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="AgeCalculator" style={styles.container}>
      <h2 style={styles.title}>Age Calculator</h2>
      <label style={styles.label}>Enter your birthdate:</label>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculateAge} style={styles.button}>Calculate Age</button>
      {age && <p style={styles.result}>You are {age} years old.</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    color: 'blue',
    fontSize: '24px',
  },
  label: {
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  result: {
    fontSize: '18px',
    marginTop: '16px',
  },
};

export default AgeCalculator;