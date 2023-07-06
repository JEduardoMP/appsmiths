export const getUserById = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/licenses/${id}/`)
    const result = await res.json()
    return result
  } catch(error) {
    console.log(error)
  }

}