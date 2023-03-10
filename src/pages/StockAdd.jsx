import {React,useState,useEffect} from 'react'
import { Formik, Form } from 'formik'
import { object, string, number } from 'yup';
import { Button, Divider, Dropdown } from 'semantic-ui-react'
import ASCTextInput from '../utilities/customFormControl/ASCTextInput';
import StockService from './../services/stockService';
import { toast } from 'react-toastify';
import TestService from '../services/testService';

export default function StockAdd() {
    const initalValues = {
        // eklerken formik defaults değerler istiyor tablonun default değerlerini
        // girdik
        code: "",
        name: "",
        photo: "",
        addedbyName: "",
        specode1: "",
        specode2: "",
        specode3: "",
        specode4: "",
        specode5: "",
        deneme:""
        // groupcode: "",
    }

    // validation rules for form
    const schema = object(
        {
            code: string().required("Stok Kod Türü Zorunlu (STK vb.)"),
            name: string().required("Stock Adı Zorunlu"),
            addedbyName: string().required("Ekleyen Kişi Adı Zorunlu"),
            specode1: number("sayı olmak zorunda"),
            specode2: number("sayı olmak zorunda"),
            specode3: number("sayı olmak zorunda"),
            specode4: number("sayı olmak zorunda"),
            specode5: number("sayı olmak zorunda"),
            deneme: string(),
        }
    );
    
    const [stockTypes, setStockTypes] = useState(null);

    useEffect(() => {
		let testService = new TestService()
        let res = testService.getStockTypes()
        res.then(function(data){
            const modifiedData = data.data.data.map(item => {
                return {
                    text: item.name,
                    value: item.id,
                    key: item.id,
                  };
            })
            setStockTypes(modifiedData);
		})
    }, []);

    const [categories, setCategories] = useState(null);

    useEffect(() => {
		let testService = new TestService()
        let res = testService.getAllCategory()
        res.then(function(data){
            const modifiedData = data.data.data.map(item => {
                return {
                    text: item.name,
                    value: item.id,
                    key: item.id,
                  };
            })
            setCategories(modifiedData);
		})
    }, []);

    const [vatTypes, setVatTypes] = useState(null);

    useEffect(() => {
		let testService = new TestService()
        let res = testService.getAllVatTypes()
        res.then(function(data){
            const modifiedData = data.data.data.map(item => {
                return {
                    text: item.name,
                    value: item.id,
                    key: item.id,
                  };
            })
            setVatTypes(modifiedData);
		})
    }, []);

    if (stockTypes === null) {
        return <div>Loading...</div>;
    }

    let stockNumber;
    let categoryNumber;
    let vatTypeNumber;
    return (

        <div style={{paddingBottom:'50px'}}> 
            <h1>Stok Ekle</h1>
            <Formik
                initialValues={initalValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    values.stocktypeId = stockNumber
                    values.categoryId = categoryNumber
                    values.vatTypeId = vatTypeNumber
                    let stockService = new StockService()
                    var res = stockService.addDataInStock(values)
                  res.then(function (data) {
                        if (data.code === 'ERR_BAD_RESPONSE') {
                            toast.error(data.message)
                            return;
                        }
                        toast.success(data.data.message)
                    })

                }}
            >

                <Form className='ui form'>
                    <ASCTextInput name="code" placeholder="Code" />
                    <ASCTextInput name="name" placeholder="Name" />
                    <ASCTextInput name="photo" placeholder="Photo" />
                    
                    <Dropdown
                        placeholder='Stok Türü Seç'
                        selection
                        search
                        style={{width:'100%',height:'50px',marginBottom:'20px'}}
                        options={stockTypes}
                        onChange={(event, data) => {
                            stockNumber = data.value
                           }}
                    />
                    <Dropdown
                        placeholder='Kategori Seç'
                        selection
                        search
                        style={{width:'100%',height:'50px',marginBottom:'20px'}}
                        options={categories}
                        onChange={(event, data) => {
                            categoryNumber = data.value
                           }}
                    />
                    <Dropdown
                        placeholder='KDV Türü Seç'
                        selection
                        search
                        style={{width:'100%',height:'50px'}}
                        options={vatTypes}
                        onChange={(event, data) => {
                            vatTypeNumber = data.value
                           }}
                    />
                    <ASCTextInput name="addedbyName" placeholder="AddedByName" />
                    <Divider horizontal>Istege Bagli</Divider>
                    <ASCTextInput name="specode1" placeholder="SPECode-1" />
                    <ASCTextInput name="specode2" placeholder="SPECode-2" />
                    <ASCTextInput name="specode3" placeholder="SPECode-3" />
                    <ASCTextInput name="specode4" placeholder="SPECode-4" />
                    <ASCTextInput name="specode5" placeholder="SPECode-5" />
                    {/* <ASCTextInput name="groupcode"  placeholder="Grup Kodu" /> */}

                    <Button size='huge' basic type='submit' color='green'>Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
