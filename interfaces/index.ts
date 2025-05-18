export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
