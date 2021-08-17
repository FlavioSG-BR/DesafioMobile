import * as Yup from 'yup';

const createSearchValidation = Yup.object().shape({
  api_key: Yup.string(),
  query: Yup.string().required('Obrigatório'),
});

export default createSearchValidation;
