import { Icon } from "@iconify/react";

interface CardProps {
  onClick?: () => void;
  icon: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  iconSize: string;
}

export default function Card({ icon, title, children, href, onClick, iconSize }: CardProps) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener" : undefined}
      title={title}
      onClick={onClick}
      className="flex flex-col gap-[1rem] hover:scale-105 justify-start items-center text-center p-[2rem] rounded-lg border-[1px] border-border bg-[#fff] shadow-md w-[250px] h-auto transition-all ease-linear"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {icon && <Icon icon={icon} className={`${iconSize}`} />}
      <p className="font-medium text-regular uppercase">{title}</p>
      <p>{children}</p>
    </Wrapper>
  );
}
