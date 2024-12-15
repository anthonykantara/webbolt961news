"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  role: string;
}

// Mock current user data - in a real app this would come from your auth system
const MOCK_CURRENT_USER: User = {
  id: "1",
  name: "John Smith",
  username: "johnsmith",
  role: "editor"
};

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get current user
    const loadUser = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setUser(MOCK_CURRENT_USER);
      setIsLoading(false);
    };

    loadUser();
  }, []);

  return { user, isLoading };
}