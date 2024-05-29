import React from "react"

interface Icontainer{
    children : React.ReactNode
}


function Container({children}:Icontainer) {
  return (
    <div className="w-10/12 mx-auto h-auto max-w-[1330px] bg-bg">
      {children}
    </div>
  )
}

export default Container
