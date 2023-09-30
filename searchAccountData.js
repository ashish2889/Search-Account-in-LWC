import { LightningElement,wire} from 'lwc';
import getAccountData from '@salesforce/apex/SearchAccountController.getAccountData';

export default class SearchAccountData extends LightningElement {
    searchKey='';
    accountData;
    error;
    //Wire adapter
    // @wire(getAccountData,{searchKey:'$searchKey'})accounts;

    //Wire function
    // @wire(getAccountData,{searchKey:'$searchKey'})
    // wireAccount({data,error}){
    //     if(data){
    //         this.accountData = data;

    //     }else{
    //         this.error = error;
    //     }
    // }

    // @wire(getAccountData,{searchKey:'$searchKey'})
    // wireAccount({data,error}){
    //     if(data){
    //         this.accountData = data;
    //         console.log('--- check data--',data);
    //     }else{
    //         this.error = error;
    //     }
    // }

    connectedCallback(){
        this.fetchAccountRecords();
        
    }

    handleChange(event){
        this.searchKey = event.target.value;
    }

    //call apex method imperativily
    fetchAccountRecords(){
        getAccountData()
        .then(result=>{
            this.accountData = result;
            console.log('---- check data--',this.accountData);
        })
        .catch(error=>{
            this.error = error;
        })
    }
}