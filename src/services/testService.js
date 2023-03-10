import axios from "axios";

export default class StockTypeService{
    getStockTypes(){
        return axios.get("https://localhost:7286/StockType").then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }

    getAllVatTypes(){
        return axios.get("https://localhost:7286/VatType").then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }

    getAllCategory(){
        return axios.get("https://localhost:7286/Category").then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }

    getBarcodebyId(id){
        return axios.get("https://localhost:7286/StockBarcode/"+id);
    }

    addDataInStockType(data){
        return axios.post("https://localhost:7286/StockType/",{
            name:data.name,
        }).then(function(response){
            return response.data.message;
        }).catch(function(err){
            console.log(err)
        })
    }
}
