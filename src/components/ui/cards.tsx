
import { Icon } from "@iconify/react";
interface CardProps {
  onClick?: () => void;
  icon: string;
  title: string;
  children: React.ReactNode;
  href: string;
  iconSize: string;
}

export default function Card({ icon, title, children, href, onClick, iconSize }: CardProps) {
  return (
    <a href={href} target="_blank" rel="noopener" title={title}>
      <div onClick={onClick} className="flex flex-col gap-[1rem] hover:scale-105 justify-start items-center text-center p-[2rem] rounded-lg border-[1px] border-border bg-[#fff] shadow-md w-[250px] h-auto transition-all ease-linear">
        {
          icon && (
            <Icon icon={icon} className={`${iconSize}`} />
          )
        }
        <p className="font-medium text-regular uppercase">{title}</p>
        <p>{children}</p>
      </div>
    </a>
  );
}
