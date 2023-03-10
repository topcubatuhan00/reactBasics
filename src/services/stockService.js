import axios from "axios";

export default class StockService {

    addDataInStock(data) {
        const newdata = {
            code: data.code,
            name: data.name,
            photo: data.photo,
            vatTypeId: data.vatTypeId ,
            stockTypeId: data.stocktypeId ,
            categoryId: data.categoryId ,
            createdByName: data.addedbyName,
            speCode1: data.specode1>0 ? parseInt(data.specode1) : 0,
            speCode2: data.specode2>0 ? parseInt(data.specode2) : 0,
            speCode3: data.specode3>0 ? parseInt(data.specode3) : 0,
            speCode4: data.specode4>0 ? parseInt(data.speCode4) : 0,
            speCode5: data.specode5>0 ? parseInt(data.specode5) : 0,
        }
        console.log(newdata)
        return axios.post("https://localhost:7286/Stock", {
            code: newdata.code,
            name: newdata.name,
            photo: newdata.photo,
            vatTypeId: newdata.vatTypeId,
            stockTypeId: newdata.stockTypeId,
            categoryId: newdata.categoryId,
            createdByName: newdata.createdByName,
            speCode1: newdata.speCode1,
            speCode2: newdata.speCode2,
            speCode3: newdata.speCode3,
            speCode4: newdata.speCode4,
            speCode5: newdata.speCode5,

        }).then(function (response) {
            return response
        }).catch(function (err) {
            return err;
        })
    }

    getAllStocks(){
        return axios.get("https://localhost:7286/Stock").then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }

    getActiveStocks(){
        return axios.get("https://localhost:7286/Stock/active").then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }

    deleteStock(id){
        return axios.delete(`https://localhost:7286/Stock/${id}/automatic"`).then(function (response) {
            return response
        }).catch(function (err) {
            console.log(err)
        })
    }
}
