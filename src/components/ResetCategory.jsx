
export const ResetCategory = ({onReset}) => {

    // const [first, setfirst] = useState(second)

    const onResetCategory = () =>{
        onReset(['Mina de Twice'])
      //  setCategories(categories.splice(0, categories.length-1))
      //  console.log(categories)
      console.log(onReset)
      
      }
    return (
    <button 
        className="reset"
        onClick={onResetCategory}>
            Reset All
    </button>
  )
}
