import './index.scss'

export const Button = ({title, className, onClick}) => {

  return (
    <button className='btn' onClick={onClick} >{title}</button>
  )
}