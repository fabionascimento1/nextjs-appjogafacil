import Context from "@/resources/contexts/form/form-contexts";
import { NextPage } from "next";
import { useContext } from "react";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: NextPage<Props> = (props: Props) => {
   const { state, setState } = useContext(Context)

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return( 
    <>
      <input {...props} onChange={handleChange} />
    </>
  )
}

export default Input