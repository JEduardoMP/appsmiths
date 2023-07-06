import { Inputs } from "../types"

export const createUser =  async (data: Inputs) => {
  try {
    const res = await fetch('http://localhost:8000/api/v1/licenses/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
  } catch(error) {
    console.log(error)
  }
} 