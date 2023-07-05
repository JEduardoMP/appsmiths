interface User {
  id: number;
  company_name: string;
  email: string
  expiration_date: Date;
  full_name: string;
  job_title: string;
  software_username: string;
  version: string;
}
export const getAllUsers = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/v1/licenses/')
    const result: User[] = await res.json()
    return result
  } catch(error) {
    console.log(error)
  }

}