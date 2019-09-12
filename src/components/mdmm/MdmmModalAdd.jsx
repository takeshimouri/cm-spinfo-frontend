import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import './MdmmModal.css';

export const MyForm = props => {
  const { touched, errors, isSubmitting } = props;

  return (
    <div className="mdmmModal-formContainer">
      <Form className="mdmmModal-form">
        <div className="mdmmModal-form-data">
          <div>
            <span className="mdmmModal-form-label">md_cdcstm</span>
            <Field
              name="md_cdcstm"
              type="text"
              placeholder="Enter md_cdcstm"
              autoComplete="off"
              className={errors.md_cdcstm && touched.md_cdcstm ? 'error' : ''}
            />
            {touched.md_cdcstm && errors.md_cdcstm && (
              <p className="input-feedback">{errors.md_cdcstm}</p>
            )}
          </div>

          <div>
            <span className="mdmmModal-form-label">md_nmmmbr</span>
            <Field
              name="md_nmmmbr"
              type="text"
              placeholder="Enter md_nmmmbr"
              autoComplete="off"
              className={errors.md_nmmmbr && touched.md_nmmmbr ? 'error' : ''}
            />
            {touched.md_nmmmbr && errors.md_nmmmbr && (
              <p className="input-feedback">{errors.md_nmmmbr}</p>
            )}
          </div>

          <div>
            <span className="mdmmModal-form-label">md_txmdmm</span>
            <Field
              name="md_txmdmm"
              component="textarea"
              rows="2"
              placeholder="Enter md_txmdmm"
              autoComplete="off"
              className={errors.md_txmdmm && touched.md_txmdmm ? 'error' : ''}
            />
            {touched.md_txmdmm && errors.md_txmdmm && (
              <p className="input-feedback">{errors.md_txmdmm}</p>
            )}
          </div>

          <div>
            <span className="mdmmModal-form-label">md_fganch</span>
            <Field
              name="md_fganch"
              type="text"
              placeholder="Enter md_fganch"
              autoComplete="off"
              className={errors.md_fganch && touched.md_fganch ? 'error' : ''}
            />
            {touched.md_fganch && errors.md_fganch && (
              <p className="input-feedback">{errors.md_fganch}</p>
            )}
          </div>

          <div>
            <span className="mdmmModal-form-label">md_clmdmm</span>
            <Field
              name="md_clmdmm"
              type="text"
              placeholder="Enter md_clmdmm"
              autoComplete="off"
              className={errors.md_clmdmm && touched.md_clmdmm ? 'error' : ''}
            />
            {touched.md_clmdmm && errors.md_clmdmm && (
              <p className="input-feedback">{errors.md_clmdmm}</p>
            )}
          </div>
        </div>

        <div className="mdmmModal-form-footer">
          <div className="mdmmModal-form-submit">
            {/* <input className="mdmmModal-form-submitButton" type="submit" disabled={isSubmitting} value="登録する" /> */}
            <button
              className="mdmmModal-form-submitButton"
              type="submit"
              disabled={isSubmitting}
            >
              登録する
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

const MdmmAdd = withFormik({
  // mapPropsToValues: () => ({ email: '', password: '', newsletter: true }),

  mapPropsToValues: ({
    // mdmmAdd,
    // handleCloseModal,
    md_cdcstm,
    md_nmmmbr,
    md_txmdmm,
    md_fganch,
    md_clmdmm,
  }) => ({
    md_cdcstm: md_cdcstm || '22222222',
    md_nmmmbr: md_nmmmbr || 'test',
    md_txmdmm: md_txmdmm || 'test data',
    md_fganch: md_fganch || '1',
    md_clmdmm: md_clmdmm || 'blue',

    // mdmmAdd,
    // handleCloseModal,
  }),

  validationSchema: Yup.object().shape({
    md_cdcstm: Yup.string()
      // .matches(/^[0-9]{8}/,('md_cdcstm is 8-digit numbar'))
      .matches(/^2[0-9]{7}/, '8-digit numbar starting from 2 [2XXXXXXX]')
      .length(8, 'md_cdcstm is 8 characters')
      .required('Enter a md_cdcstm'),
    md_nmmmbr: Yup.string().required('Enter a md_nmmmbr'),
    md_txmdmm: Yup.string().required('Enter a md_txmdmm'),
    md_fganch: Yup.string().required('Enter a md_fganch'),
    md_clmdmm: Yup.string().required('Enter a md_clmdmm'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm, setErrors }) => {
    setTimeout(() => {
      // if(values.email === 'test@test.test') {
      //   setErrors({ email: 'That email is already taken'})
      // } else {
      //   resetForm()
      // }
      //
      // values.mdmmAdd({
      props.mdmmAdd({
        md_idmdmm: '0',
        md_cdcstm: values.md_cdcstm,
        md_nommrb: '0',
        md_nmmmbr: values.md_nmmmbr,
        md_txmdmm: values.md_txmdmm,
        md_fganch: values.md_fganch,
        md_clmdmm: values.md_clmdmm,
        // "md_ccadip": mdCcadip,
        // "md_ccmodu": mdCcmodu,
        // "createdAt": "2019-05-24",
        // "updatedAt": "2019-05-24",
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      }) && props.handleCloseModal();
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm', // helps with React DevTools
})(MyForm);

export default MdmmAdd;
