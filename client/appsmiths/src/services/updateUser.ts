import { Inputs } from "../types"

export const updateUser =  async (data: Inputs, id: number) => {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/licenses/${id}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
  } catch(error) {
    console.log(error)
  }
} 