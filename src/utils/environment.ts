export const isLineDApp = () => {
  if (typeof window === 'undefined') return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (
    userAgent.includes('line') && 
    (userAgent.includes('android') || userAgent.includes('iphone') || userAgent.includes('ipad'))
  );
};

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
};

export const isLineBrowser = () => {
  if (typeof window === 'undefined') return false;
  return window.navigator.userAgent.toLowerCase().includes('line');
}; 