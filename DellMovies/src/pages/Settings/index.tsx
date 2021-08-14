import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik} from 'formik';

import SettingsProps from '../../dtos/settings/SettingsDTO';
import SettingsActions from '../../store/modules/settings/duck';
import {ApplicationState} from '../../store';
import Layout from './Layout';

const UpdateSettings: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(
    (store: ApplicationState) => store.settings.settings,
  );

  const [fontSize, setFontSize] = useState(settings.font_size);
  

  const handleChangeData = (data: SettingsProps) => {
    setFontSize(data.font_size);
    
    dispatch(SettingsActions.setFontSize(fontSize));
  };

  const {handleSubmit, errors, values, setFieldValue} = useFormik({
    initialValues: settings,
    onSubmit: (data: SettingsProps) => handleChangeData(data),
  });


  return (
    <Layout
      fontSize={values.font_size}
      setFontSize={value => setFieldValue('font_size', value)}
    />
  );
};

export default UpdateSettings;
