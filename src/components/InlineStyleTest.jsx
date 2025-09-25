import React from 'react';

const InlineStyleTest = () => {
  const styles = {
    container: {
      backgroundColor: 'purple',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Inline Style Test</h2>
      <p>If this box has a purple background with white text, React styling is working!</p>
    </div>
  );
};

export default InlineStyleTest;