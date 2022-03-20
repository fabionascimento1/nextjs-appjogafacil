import { NextPage } from "next"
import { useEffect, useState } from "react"

type Props = {
  time: number
  message?: string | undefined
  visible: boolean
  style: string
}

const Toastiy: NextPage<Props> = (props: Props) => {
  const [showElement, setShowElement] = useState(false)
  
  useEffect(() => {
    setShowElement(true)
    setTimeout(function() { setShowElement(false)}, props.time);
  }, [props.time])

  return(
    <>
      { 
        showElement && 
          <div className={props.style}>
            <span>{props.message}</span>
          </div> 
      }
    </>
  )
}

export default Toastiy

