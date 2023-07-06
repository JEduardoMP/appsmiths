export const updateSuscription = async (id: number, months: number) => {
  const data = {
    update_to: months
  }
  try {
    const res = await fetch(`http://localhost:8000/api/v1/licenses/${id}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
  } catch(error) {
    console.log(error)
  }
}