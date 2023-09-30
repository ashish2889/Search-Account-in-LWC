public with sharing class SearchAccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountData(){
        //String searchkeyValue = '%'+searchKey+'%';
        // return [SELECT Id,Name,AccountNumber FROM Account];
        // if(!String.isBlank(searchKey)){
        // List<Account> accList = [SELECT Id,Name,AccountNumber FROM Account WHERE Name like :searchkeyValue];
        // return accList;
        // }
        return [SELECT Id,Name,AccountNumber FROM Account];
        
        
    }
}