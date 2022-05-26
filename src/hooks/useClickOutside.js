import { useEffect } from "react";
const useClickOutside = ( ref, callback ) => {
  let isMounted = false
  const handleClick = e => {
    if ( isMounted === false ) return isMounted = true
    if (ref.current && !ref.current.contains(e.target)) callback();
  };
  useEffect(() => {
    if ( ref.current ) {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
export default useClickOutside;