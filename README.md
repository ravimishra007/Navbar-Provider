# NavbarProvider

A dynamic Navbar visibility controller for React/Next.js applications that allows you to show or hide the Navbar from anywhere in your app.

## Features
- 🎯 Dynamic navbar visibility control
- 🛡️ Automatic hiding on admin routes
- 🔄 Programmatic toggling support
- 📱 Perfect for full-screen experiences

## Implementation Guide


# Step-by-Step: NavbarProvider Implementation
### 1. Create the Context & Provider


Create a new file `app/NavbarProvider.tsx`:

```tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavbarContextType = {
  showNavbar: boolean;
  setShowNavbar: (show: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}
```

### 2. Wrap RootLayout with NavbarProvider
# Update Root Layout

Modify your `app/layout.tsx`:

```tsx
<html lang="en" suppressHydrationWarning>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 box-border`}>
    <NavbarProvider>
      <NavbarController />
      <div className="overflow-hidden flex flex-col">
        {children}
      </div>
    </NavbarProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </body>
</html>
```

### 3. Create NavbarController
This will read from context and conditionally render the Navbar:

Create `app/NavbarController.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavbar } from "./NavbarProvider";
import Navbar from "@/components/shared/Navbar";

export default function NavbarController() {
  const pathname = usePathname();
  const { showNavbar, setShowNavbar } = useNavbar();

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname, setShowNavbar]);

  return showNavbar ? <Navbar /> : null;
}
```

## Usage Examples

### Toggle Navbar in a Specific Page
# Now You Can Also Toggle Navbar Anywhere
For example, if you want to hide the Navbar in a specific page or layout:


```tsx
"use client";

import { useEffect } from "react";
import { useNavbar } from "../NavbarProvider";

export default function SomePage() {
  const { setShowNavbar } = useNavbar();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true); // Cleanup on unmount
  }, []);

  return <div>Full-screen experience here</div>;
}
```


## Uses & Benefits

### Common Use Cases
- 🖼️ Full-screen image galleries or slideshows
- 🎮 Interactive game interfaces
- 📊 Data visualization dashboards
- 🎥 Video players and media viewers
- 📱 Mobile-first immersive experiences
- 🔒 Admin panels and protected routes

### Key Benefits
- 🚀 **Better User Experience**: Toggle navigation when needed for distraction-free viewing
- 🛠️ **Easy Integration**: Simple context-based implementation
- 🔄 **State Persistence**: Maintains navbar state across route changes
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- ⚡ **Performance Optimized**: Minimal re-renders with React Context
- 🎯 **Route-Based Control**: Automatic hiding on specified routes
