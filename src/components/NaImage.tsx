import naImage from '../img/na.jpg';

export const NaImage = ({ className = '' }: { className?: string }) => (
  <img 
    src={naImage} 
    alt="Na" 
    className={className} 
  />
);
