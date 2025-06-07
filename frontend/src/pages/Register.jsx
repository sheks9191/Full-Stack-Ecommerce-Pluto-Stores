import { Form, redirect } from "react-router-dom"
import { FormBtn, FormInput } from "../components"
import { customAPI } from "../utils/utils";
import { toast } from "react-toastify";


export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customAPI.post('/auth/register',data)
    toast.success('Account Created Successfully')
    return redirect('/account')
  } catch (error) {
    //  const errorMsg = error?.response?.data?.msg || 'Check Register Details'
    toast.error('Check Registered Details')
    return error
  }
 
}

const Register = () => {
  return (
   <Form method="POST" className="form form-layout">
       <h4>CREATE ACCOUNT</h4>
       {/* <FormInput name="firstName" textLabel="first name" type="text"/> */}
       <FormInput name="name" textLabel="Full Name" type="text"/>
      <FormInput name="email" label="email" type="email"/>
      <FormInput name="password" label="password"  text="*Password must be at least 6 characters" password={true}/>
      <FormBtn text="create account" type="submit"/>
    </Form>
  )
}

export default Register