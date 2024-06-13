import './index.css'

export const Title = ({title}) => {
  const style = {}

  const lowerCaseTitle = title.toLowerCase();


  if (lowerCaseTitle === 'sing out') {
    style.color = 'rgb(70, 69, 68)';
    style.fontWeight = '400'
  }

  return (
    <>
    <h3 className="title" style={style}>{title}</h3>
    </>
  )
}