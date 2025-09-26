const AUTH_KEY = 'auth.session';

const VALID_CREDENTIALS = {
  email: 'user@admin.com',
  password: 'admin1',
  name: 'Admin',
  role: 'admin'
};

export const login = (email, password) => {
  if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
    const session = {
      email: VALID_CREDENTIALS.email,
      name: VALID_CREDENTIALS.name,
      role: VALID_CREDENTIALS.role,
      loggedInAt: new Date().toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true };
  }
  return { success: false, error: 'Email atau password salah' };
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getCurrentUser = () => {
  const session = localStorage.getItem(AUTH_KEY);
  return session ? JSON.parse(session) : null;
};

export const isAuthenticated = () => {
  return getCurrentUser() !== null;
};