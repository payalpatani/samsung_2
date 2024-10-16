import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Thank() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to right, #e3ffe7, #d9e7ff)',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
      }}
    >
      {/* Thank You Heading */}
      <h2
        className="display-2 text-success mb-4 text-center"
        style={{
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      >
        Thank You!
      </h2>

      {/* Subtext */}
      <p
        className="fs-4 text-dark mb-5 text-center"
        style={{
          maxWidth: '600px',
          lineHeight: '1.6',
          animation: 'fadeIn 3s ease-in-out',
        }}
      >
        Your payment has been processed successfully. We appreciate your trust in us!
      </p>

      {/* Button with hover effects */}
      <button
        className="btn btn-primary btn-lg px-4 py-2 rounded-3 shadow-sm fw-bold text-uppercase"
        style={{
          background: 'linear-gradient(135deg, #007BFF, #0056b3)',
          border: 'none',
          color: '#fff',
          transition: 'all 0.3s ease',
        }}
        onClick={() => window.location.href = '/'}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0056b3, #004494)';
          e.target.style.boxShadow = '0px 12px 20px rgba(0, 123, 255, 0.5)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #007BFF, #0056b3)';
          e.target.style.boxShadow = '0px 8px 15px rgba(0, 123, 255, 0.3)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Go to Home
      </button>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
