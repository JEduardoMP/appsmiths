export const deleteUser = async (id:number) => {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/licenses/${id}`, {
      method: 'DELETE'
    })
    const result = await res.json()
    console.log(result)
  } catch(error) {
    console.log(error)
  }

}