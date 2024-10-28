interface CardProps {
    onClick?:() => void;
    image?: string;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({image, title, children, onClick}: CardProps) {
    return (
      <div onClick={ onClick } className="flex flex-col gap-[1rem] hover:scale-105 justify-start items-center text-center p-[2rem] rounded-lg border-[1px] border-border bg-[#fff] shadow-md w-[350px] h-auto">
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
  