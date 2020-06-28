import React, { useCallback, useState } from 'react';
import { SelectBox, TextInput, PrimaryButton } from '../components/UIkit';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../reducks/products/operations';


const ProductEdit = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(''),
        [description, setDescription] = useState(''),
        [category, setCategory] = useState(''),
        [gender, setGender] = useState(''),
        [price, setPrice] = useState('');

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName]);
  
  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription]);

  const inputPrice = useCallback((event) => {
    setPrice(event.target.value)
  }, [setPrice]);

  const categories = [
    {id: "tops", name: "tops"},
    {id: "pants", name: "pants"},
    {id: "shorts", name: "shorts"},
  ];

  const genders = [
    {id: "all", name: "all"},
    {id: "male", name: "mens"},
    {id: "female", name: "ladies"},
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">Product Registration/Edit</h2>
      <div className="c-section-container">
        <TextInput
            fullWidth={true} label={'Product Name'} multiline={false} required={true} onChange={inputName} rows={1} value={name} type={'text'}
        />
        <TextInput
            fullWidth={true} label={'Product Description'} multiline={true} required={true} onChange={inputDescription} rows={5} value={description} type={'text'}      
        />
        <SelectBox
            label={'Category'} required={true} options={categories} select={setCategory} value={category}
        />
        <SelectBox
            label={'Gender'} required={true} options={genders} select={setGender} value={gender}
        />
        <TextInput
            fullWidth={true} label={'Product Price'} multiline={false} required={true} onChange={inputPrice} rows={1} value={price} type={'number'}
        />
        <div className='module-spacer--medium' />
        <div className='center'>
          <PrimaryButton
            label={'Save Product Info'}
            onClick={() => dispatch(saveProduct(name, description, category, gender, price))}
          />
        </div>
      </div>
    </section>
  )
}
export default ProductEdit