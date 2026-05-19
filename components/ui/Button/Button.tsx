import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  target,
  rel,
  style,
}: ButtonProps) {
  const baseStyles =
    'h-[44px] px-8 rounded-[12px] flex items-center justify-center';
  const variants = {
    primary: 'bg-button hover:bg-button-hover text-white',
    outline: 'border border-button text-main hover:border-button-hover',
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
