import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";



function Payment() {
    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location.state);

    const totalItem = location.state.totalItem;
    const totalPrice = location.state.totalPrice;
    console.log(totalItem, totalPrice)
    let transaction_uuid = uuidv4();
    let Message = `total_amount=${totalPrice},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
    var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return (
        <>


            <div>

                <div className="border-2 border-red-700 w-96 p-5 m-auto mt-36 shadow-2xl shadow-gray-600">

                    <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
                        <input
                            type="hidden"
                            id="amount"
                            name="amount"
                            value={totalPrice}
                            required />

                        <input type="hidden" id="tax_amount" name="tax_amount" value="0" required />
                        <input type="hidden" id="total_amount" name="total_amount" value={totalPrice} required />
                        <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required />
                        <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
                        <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
                        <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
                        <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/success" required />
                        <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/failure" required />
                        <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
                        <input type="hidden" id="signature" name="signature" value={hashInBase64} required />

                        <div className="space-y-3  flex  justify-center  flex-col items-center">
                            <h1>Total Items :{totalItem}</h1>
                            <h1>TotalPrice Rs.{totalPrice}</h1>

                            <input
                                className="bg-orange-500  text-white p-3  w-72"
                                value="Submit"
                                type="submit"
                            />

                            <input onClick={()=>{
                                navigate("/cart")
                            }} className="bg-red-500 text-center text-white p-3  w-72"
                            value="Cancel"
                                type="Cancel" />
                        </div>

                    </form>


                </div>






            </div>


        </>
    );
}

export default Payment;
