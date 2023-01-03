import React from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {

    const { register, handleSubmit,  formState:{errors} } = useForm();
    const onSubmit = data => console.log(data , errors);
    return (
        <div className='container'>
           <form  onSubmit={handleSubmit(onSubmit)} className="row">
  <div className="col-lg-6 mt-2">
    <input type="text" className="form-control" placeholder="First name" {...register("firstName")}/>
  
  </div>
  <div className="col-lg-6 mt-2">
    <input type="text" className="form-control" placeholder="Last name" {...register("lastName")}/>
  </div>
  <div className="col-lg-6 mt-2">
    <input type="email" className="form-control" placeholder="Email"{...register("email")}/>
    {errors.email && <p>{errors.email?.message}</p>}
  </div>
  <div className="col-lg-6 mt-2">
    <input type="password" className="form-control" placeholder="Password" {...register("password")}/>
  </div>

<button type="submit" className='btn-btn-success'> Submit</button>
</form> 
        </div>
    );
};

export default Registration;