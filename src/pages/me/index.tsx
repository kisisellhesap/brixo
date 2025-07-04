import { useEffect, useState, type ChangeEvent, type FC, type MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../../redux/store';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getCurrentUser, updateInformationUser } from '../../redux/actions/userActions';
import type { User } from '../../types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Me: FC = () => {
  const { currentUser } = useSelector((store: RootState) => store.userReducer);
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [profileInput, setProfileInput] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    addresses: '',
  });

  const submitProfile = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileInput);
    console.log('Profile updated successfully!');

    const updateUser = {
      ...currentUser,
      firstName: profileInput.firstName,
      lastName: profileInput.lastName,
      phone: profileInput.phone,
      birthDate: profileInput.birthDate,
      addresses: profileInput.addresses,
    };

    await dispatch(updateInformationUser(updateUser as User));

    await dispatch(getCurrentUser());
    console.log(updateUser, 'updateUser');
    console.log(currentUser, 'currentUser');
    toast.success('Profile updated successfully!');
    if (cartProducts.length !== 0) {
      navigate('/cart');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setProfileInput((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (currentUser) {
      setProfileInput({
        firstName: currentUser.firstName ?? '',
        lastName: currentUser.lastName ?? '',
        email: currentUser.email ?? '',
        phone: currentUser.phone ?? '',
        birthDate: currentUser.birthDate ?? '',
        addresses: currentUser.addresses ?? '',
      });
    }
  }, [currentUser]);

  return (
    <div>
      <form onSubmit={submitProfile} className='flex flex-col gap-5'>
        <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
          <div>
            <label htmlFor='firstName' className='block text-sm/6 text-gray font-bold'>
              First Name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='firstName'
                autoComplete='firstName'
                required
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                onChange={handleChange}
                value={profileInput.firstName}
              />
            </div>
          </div>
          <div>
            <label htmlFor='firstName' className='block text-sm/6 text-gray font-bold'>
              Last Name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='lastName'
                autoComplete='lastName'
                required
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                onChange={handleChange}
                value={profileInput.lastName}
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm/6 text-gray font-bold'>
              Email
            </label>
            <div className='mt-2'>
              <input
                type='email'
                name='email'
                autoComplete='email'
                required
                className='block w-full bg-green-300 rounded-md px-3 py-1.5 text-base text-gray outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-red sm:text-sm/6'
                onChange={handleChange}
                value={profileInput.email}
                disabled
              />
            </div>
          </div>

          <div>
            <label htmlFor='phone' className='block text-sm/6 text-gray font-bold'>
              Phone
            </label>
            <div className='mt-2'>
              <PhoneInput
                country={'tr'} // Sabit ülke kodu
                disableDropdown={true} // Dropdown'u kapat
                value={profileInput.phone}
                onChange={(phone) =>
                  setProfileInput((prev: any) => ({
                    ...prev,
                    phone,
                  }))
                }
                inputProps={{
                  name: 'phone',
                  required: true,
                  className:
                    'block w-[91%] ml-auto px-3 rounded-md py-1.5 text-base text-gray outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-red sm:text-sm/6',
                  minLength: 17, // Minimum uzunluk
                }}
                containerClass='!w-full'
                inputClass='!w-full'
              />
            </div>
          </div>

          <div>
            <label htmlFor='birthDate' className='block text-sm/6 text-gray font-bold'>
              Birth Date
            </label>
            <div className='mt-2'>
              <input
                type='date'
                name='birthDate'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-red sm:text-sm/6'
                onChange={handleChange}
                value={profileInput.birthDate}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='addresses' className='block text-sm/6 text-gray font-bold'>
              Addresses
            </label>
            <div className='mt-2'>
              <textarea
                onChange={handleChange}
                name='addresses'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-red sm:text-sm/6 resize-none'
                value={profileInput.addresses ?? ''}
                required
              />
            </div>
          </div>
        </div>

        <button className='px-5 py-2 bg-red text-pink rounded-md cursor-pointer font-bold shadow-md hover:brightness-110 mt-10'>
          Update Information
        </button>
      </form>
    </div>
  );
};

export default Me;
