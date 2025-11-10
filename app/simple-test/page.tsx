export default function SimpleTest() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1.5rem',
        padding: '3rem',
        maxWidth: '600px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Inline Styles Test
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '1.5rem'
        }}>
          If you can see this styled properly, React is working but Tailwind CSS is not loading.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div style={{ background: '#ef4444', height: '80px', borderRadius: '0.5rem' }}></div>
          <div style={{ background: '#10b981', height: '80px', borderRadius: '0.5rem' }}></div>
          <div style={{ background: '#3b82f6', height: '80px', borderRadius: '0.5rem' }}></div>
        </div>
        <a 
          href="/"
          style={{
            marginTop: '2rem',
            display: 'inline-block',
            background: 'linear-gradient(to right, #f97316, #ef4444)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
