import React from 'react';

export default () => {
  return (
    <div className="error-container">
      
       <h1>Esta página no se encuentra</h1>
      
      <p>Disculpe, no hay publicaciones que coincidan con tu búsqueda.</p>

    <style jsx="true">{`
    .error-container {
      text-align: center;
      padding: 30px;
      min-height: 600px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      margin-bottom: 20px;
    }
    `}</style>
    </div>
  );
};
