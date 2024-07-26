// import React, { useState } from 'react';

// const ClientProfileForm = ({ onSave }) => {
//   const [preferences, setPreferences] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Add the logic to save the client profile
//     onSave({ preferences });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Client Profile</h2>
//       <div>
//         <label>Preferences:</label>
//         <textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} required />
//       </div>
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default ClientProfileForm;
