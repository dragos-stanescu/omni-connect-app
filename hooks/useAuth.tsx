import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "expo-router";

// Mock user data
const MOCK_USERS = [
  { email: "user@gmail.com", password: "123456", role: "user" },
  { email: "admin@gmail.com", password: "123456", role: "admin" },
];

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const signIn = useCallback(async (email: string, password: string) => {
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser({ email: foundUser.email, role: foundUser.role });
      return true;
    }

    return false;
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    router.replace("/auth/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
