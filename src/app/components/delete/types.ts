export interface DeleteProps {
  title: string;
  children: React.ReactNode;
  badgeSize?: 'sm' | 'md' | 'lg';
  onConfirm: () => void;
}