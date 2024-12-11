```javascript
// pages/index.js
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Current Path: {pathname}</h1>
        {/* Your dynamic data fetching and rendering here */}
      </div>
    </Suspense>
  );
}
```