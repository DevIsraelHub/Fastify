import React from 'react'

const useToggle = (value) => {
  const [done, setDone] = useState(value)
  
  const onChanged = () => {
    setDone(prev => !prev)
  } 
  onChanged()

}

export default useToggle
