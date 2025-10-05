const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ color: 'blue', margin: '0 0 8px 0', fontSize: '1.5rem' }}>{props.name}</h2>
      <p style={{ margin: '4px 0', color: '#374151' }}>Age: <span style={{ fontWeight: 'bold', color: '#111827' }}>{props.age}</span></p>
      <p style={{ margin: '4px 0', color: '#4b5563' }}>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
};

export default UserProfile;