import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasIntersected) {
                    setIsIntersecting(true);
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: options.rootMargin || '50px',
                threshold: options.threshold || 0.1,
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [hasIntersected, options]);

    return [elementRef, isIntersecting];
}; 