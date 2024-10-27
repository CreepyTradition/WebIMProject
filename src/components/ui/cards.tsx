interface CardProps {
    image?: string;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({image, title, children}: CardProps) {
    return (
      <div className="flex flex-col gap-[1rem] justify-start items-center text-center p-[2rem] rounded-lg border-[1px] border-border bg-[#fff] shadow-md w-full h-full">
        {
          image && (
            <img src={image} alt={title} className="w-full h-auto" />
          )
        }
        <p className="font-medium text-regular uppercase">{title}</p>
        <p>{children}</p>
      </div>
    );
  }
  