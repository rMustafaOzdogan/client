import { useState, useEffect } from 'react';
import Axios from 'axios'
import moment from 'moment'
import {
  AppBar,
  TextField,
  Box,
  Grid
} from '@material-ui/core'
import useStyles from './style'
import useTurkeyCities from "use-turkey-cities";
import './App.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import background from './selcukLogo.png'


function App() {

  const [type, setType] = useState('template1');
  const [result, setResult] = useState('');
  let res;
  const classes = useStyles();
  const { cities, city, setCity } = useTurkeyCities();
  const [templateList, setTemplateList] = useState([]);


  useEffect(() => {
    Axios.get('https://mezuniyet.herokuapp.com/getTemplate').then(response => {
      setTemplateList(response.data);
    })
  },[])



  return (
    
    <div className="App" >
      <nav class="navbar navbar-light bg-primary">
            <div class="container-fluid d-flex justify-content-center">
                <h5 class="navbar-brand text-white">Selçuk Üniversitesi Hatırası Programı</h5>
            </div>
        </nav>
      <div hidden>mustafa Özdoğan tarafından yapılmıştır</div>
      <br />
      <div className='row w-100'>
      <div class="container-fluid pt-5">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                      İşlemler
                    </div>
                    <div class="card-body">
      <div className='images-container'>
      {templateList.map((template)=>{
        // eslint-disable-next-line jsx-a11y/alt-text
        return ( <div style={{margin: '0 20px'}}>
          <img
          className='images'
          src={`data:image/png;base64,${template}`}
        />
        <br/>
        </div>
        )
      })}
      </div>
      <br/>
      <Formik
      initialValues = {{
        nameSurname: "",
        email: "",
        faculty: "",
        department: "",
        city: "Adana",
        template: "template1",
        phoneNumber: ""
      }}
      validationSchema={
        Yup.object({
          nameSurname: Yup.string().required("Lütfen Boş Bırakmayın"),
          email: Yup.string().email().required("Lütfen Boş Bırakmayın"),
          department: Yup.string().required("Lütfen Boş Bırakmayın"),
          faculty: Yup.string().required("Lütfen Boş Bırakmayın"),
          phoneNumber: Yup.string().required("Lütfen Boş Bırakmayın")
        })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        Axios.post("https://mezuniyet.herokuapp.com/insert", {nameSurname: values.nameSurname.toLocaleUpperCase('tr-TR'), faculty: values.faculty, department: values.department.toLocaleUpperCase('tr-TR'), city: city, templateType: type, email: values.email, phoneNumber: values.phoneNumber })
        .then(
          function ( res ) {
            setResult(res.data);
            console.log(res.data);
          }
        )
         
      }}
      >
        {
          ({ values, errors, handleChange, handleSubmit, handleReset, dirty, isSubmitting}) => (
            <form onSubmit={handleSubmit}>
                <div className='col-12'>
                  <TextField className="TextField" style={{margin: "0 10px"}} required={true} id="nameSurname" value={values.nameSurname} label="İsim Soyisim" onChange={handleChange} />
                  <TextField className="TextField" style={{margin: "0 10px"}} required={true} id="email" value={values.email} label="E-mail" onChange={handleChange} />
                </div>
                <br/>
                <div className='col-12'>
                  <TextField className="TextField" style={{margin: "0 10px"}} required={true} id="faculty" value={values.faculty}  label="Fakülte" onChange={handleChange} />
                  <TextField className="TextField" style={{margin: "0 10px"}} required={true} id="department" value={values.department} label="Bölüm" onChange={handleChange} />
                </div>
                <br/>
                <div>
                <TextField className="TextField" style={{margin: "0 10px"}} required={true} id="phoneNumber" value={values.phoneNumber} label="Telefon" onChange={handleChange} />
                </div>
                <br/>
                <div className='col-12'>
            <div className='row justify-content-center'>
                <div>
                  <select
                    style = {{margin: '0 10px'}}
                    onChange={e => {
                    setCity(e.target.value);
                    }}
                    value={city}
                  >
                    {cities.map(city => (
                      <option key={`city-${city}`} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              <div>
                <select onChange={(e) => {setType(e.target.value)}}
                  style = {{margin: '0 10px'}}
                >
                  <option value="template1">şablon1</option>
                  <option value="template2">şablon2</option>
                  <option value="template3">şablon3</option>
                </select>
              </div>
            </div>
          </div>
          <br/>
          <button type="submit" disabled={!dirty} >Gönder</button>
            </form>
          )
        }
      </Formik>
       
     
      </div>
                  </div>
            </div>
      
            <div class="col">
                <div class="card">
                    <div class="card-header">
                      Sonuç
                    </div>
                    <div class="card-body">
      {result !== '' ? <div>
       <img style={{ width: '50%' }} src={`data:image/png;base64,${result}`} />
       <div className="mt-3 mb-3"></div>
      <a className="btn btn-primary" download={`${moment(new Date()).format("DD-MM-YYY HH:mm:ss")}`} href={`data:image/png;base64,${result}`} >Download</a>
      
      </div>: ''}
      </div>
                  </div>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <br/>
    </div>
    
  );
}

export default App;
