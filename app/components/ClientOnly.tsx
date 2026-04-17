/** if Hydration errors happen, use this component to wrap the part of your app that should only be rendered on the client side.
'use client';

Beginning of Auth UI, 34:31

import { useState, useEffect } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <>{children}</>;
}

**/