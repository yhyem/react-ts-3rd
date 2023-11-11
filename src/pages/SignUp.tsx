import { useForm } from 'react-hook-form';
import { SignUpRequest } from '../payload/Signup';

const baseURL = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpRequest>();

  const onSubmit = (result: SignUpRequest) => {
    fetch(`${baseURL}/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify(result),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: 'Please enter your email.',
          })}
        />
        <input
          type="passowrd"
          {...register('password', {
            required: 'Please enter your password.',
          })}
        />
        <input
          {...register('username', {
            required: 'Please enter your username.',
          })}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default SignUp;
