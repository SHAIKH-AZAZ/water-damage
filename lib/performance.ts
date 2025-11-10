// Performance optimization utilities

// Lazy load images with Intersection Observer
export const lazyLoadImage = (img: HTMLImageElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      }
    });
  });

  observer.observe(img);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    
    // Preload critical images
    const criticalImages = ['/og-image.jpg', '/logo.png'];
    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

// Defer non-critical scripts
export const deferScript = (src: string, callback?: () => void) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    if (callback) {
      script.onload = callback;
    }
    document.body.appendChild(script);
  }
};

// Web Vitals tracking
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics
    console.log(metric);
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};

declare global {
  interface Window {
    gtag: any;
  }
}
