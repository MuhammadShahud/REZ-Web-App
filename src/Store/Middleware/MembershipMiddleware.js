import Axios from 'axios';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import Apis from '../Apis';


export default {


    getAllSubscription: ({
        callback,
    }) => {
        return async dispatch => {
            try {
                let response = await Axios.get(
                    `${Apis.getAllSubscription}`,
                    await getHeaders(),
                );
                console.warn("Response", response);
                if (response.data.success) {
                    callback(response?.data);
                }
            } catch (error) {
                callback(false);
                console.warn('err ', error);
            }

        };
    },
    BookSubscription: ({
        plan_id,
        payment_method_id,
        callback,
    }) => {
        return async dispatch => {
            try {
                let formData = new FormData();
                formData.append('plan_id', plan_id)
                formData.append('payment_method_id', payment_method_id)
                console.warn("form data:", formData)
                let response = await Axios.post(
                    Apis.bookSubscription,
                    formData,
                    await getHeaders(),
                );
                console.warn("responce:", response);
                if (response.data.success) {
                    console.warn("responce success:", response);
                    callback(response);
                    alert('Subscribe Successfully!')
                }
            } catch (error) {
                callback(false);
                console.warn('err ', error);
            }

        };
    },



};


