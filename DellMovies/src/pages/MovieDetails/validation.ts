import * as Yup from 'yup';

const createSearchValidation = Yup.object().shape({
  query: Yup.string().required('Obrigatório'),
});

export default createSearchValidation;
