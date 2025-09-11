import { AuthUser, CreateUserData } from '@/types';

// Mock authentication service - replace with real implementation
class AuthService {
  private users: AuthUser[] = [
    {
      id: '1',
      email: 'john@example.com',
      username: 'johndoe',
      displayName: 'John Doe',
      profilePicture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isProfileComplete: true,
    },
    {
      id: '2',
      email: 'jane@example.com',
      username: 'janesmith',
      displayName: 'Jane Smith',
      isProfileComplete: false,
    }
  ];

  private currentUser: AuthUser | null = null;

  async signIn(email: string, password: string): Promise<AuthUser | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = this.users.find(u => u.email === email);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('ugandaconnect_user', JSON.stringify(user));
      return user;
    }
    return null;
  }

  async signInWithPhone(phone: string, password: string): Promise<AuthUser | null> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = this.users.find(u => u.phone === phone);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('ugandaconnect_user', JSON.stringify(user));
      return user;
    }
    return null;
  }

  async signUp(userData: CreateUserData): Promise<AuthUser | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: AuthUser = {
      id: Date.now().toString(),
      email: userData.email,
      phone: userData.phone,
      username: userData.username,
      displayName: userData.displayName,
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender,
      district: userData.district,
      isProfileComplete: false,
    };
    
    this.users.push(newUser);
    this.currentUser = newUser;
    localStorage.setItem('ugandaconnect_user', JSON.stringify(newUser));
    return newUser;
  }

  async signInWithGoogle(): Promise<AuthUser | null> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate Google OAuth
    const googleUser: AuthUser = {
      id: 'google_' + Date.now(),
      email: 'google.user@gmail.com',
      username: 'googleuser',
      displayName: 'Google User',
      profilePicture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isProfileComplete: false,
    };
    
    this.users.push(googleUser);
    this.currentUser = googleUser;
    localStorage.setItem('ugandaconnect_user', JSON.stringify(googleUser));
    return googleUser;
  }

  getCurrentUser(): AuthUser | null {
    if (this.currentUser) return this.currentUser;
    
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ugandaconnect_user');
      if (stored) {
        this.currentUser = JSON.parse(stored);
        return this.currentUser;
      }
    }
    return null;
  }

  signOut(): void {
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ugandaconnect_user');
    }
  }

  async updateProfile(updates: Partial<AuthUser>): Promise<AuthUser | null> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, ...updates };
      localStorage.setItem('ugandaconnect_user', JSON.stringify(this.currentUser));
      return this.currentUser;
    }
    return null;
  }
}

export const authService = new AuthService();