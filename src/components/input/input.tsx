import Context from "@/resources/contexts/form/form-contexts";
import { NextPage } from "next";
import { useContext } from "react";
import Styles from './input.module.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: NextPage<Props> = (props: Props) => {
   const { state, setState } = useContext(Context)
   const error = state[`${props.name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo'
  }

  return( 
    <div className={Styles.inputWrap}>
      <input {...props} onChange={handleChange} />
      <span title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input