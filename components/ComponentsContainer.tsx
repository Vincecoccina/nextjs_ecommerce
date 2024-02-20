export default function ComponentsContainer({children} : {children : React.ReactNode}) {
    return (
      <div className="mx-auto w-full max-w-[1400px]">
        {children}
      </div>
    )
  }
  