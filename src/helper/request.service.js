import axios from "axios";

class RequestService{
    createRequest(expense_id,id,date,purpose,amount,description,category,created_at,image){
        return axios.post(
            'http://localhost:3000/api/emp/create?expense_id='+
            expense_id+'&id='+id+'&date='+date+'&purpose='+purpose+'&amount='
            +amount+'&description='+description+'&category='+category+'&status=Ongoing&created_at='+created_at+'&image='+image)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

}
export default new RequestService();