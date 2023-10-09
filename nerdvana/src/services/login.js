export async function login(username, password) {
    const LOGIN_URL = "http://127.0.0.1:8000/api/token";
    const formData = new FormData();

    formData.append('email', username);
    formData.append('password', password);

    try {
        const response = await fetch(LOGIN_URL, {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();    
        return data;
      } catch (error) {
        throw error;
      }
}