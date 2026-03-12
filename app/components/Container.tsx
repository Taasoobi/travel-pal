'use client'; // This is a client component only Not server component.


interface ContainerProps {
  // Define props for Container component here
  children: React.ReactNode;

}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-630 mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
}

export default Container;