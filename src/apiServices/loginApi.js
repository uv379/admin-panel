// Dummy user login function
export const loginApi = async (username, password) => {
   
    // Dummy implementation, replace with actual  logic
    const response = await fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    // if (response.status === 200) {
    //   const userData = await response.json();
    //   return userData;
    // } else {
    //   throw new Error('Authentication failed');
    // }
    return username
  };