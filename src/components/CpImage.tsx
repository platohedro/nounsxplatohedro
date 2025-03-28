import cpImage from '../img/cp.webp';

export const CpImage = ({ className = '' }: { className?: string }) => (
  <img 
    src={cpImage} 
    alt="Cp" 
    className={className} 
  />
);
