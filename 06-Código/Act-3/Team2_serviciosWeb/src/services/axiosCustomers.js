import axios from "axios";
const URI = "http://localhost:3002/libreriateam2/customer";

export const getCustomers = async () => {
  try {
    const response = await axios.get(URI);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(URI, customer);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomer = async (customer) => {
  try {
    const response = await axios.put(`${URI}/${customer.id}`, customer);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
