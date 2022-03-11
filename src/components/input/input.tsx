import { useAuth } from "@/resources/contexts/Auth/useAuth";
import { NextPage } from "next";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: NextPage<Props> = (props: Props) => {
  const {state, setState } = useAuth()

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