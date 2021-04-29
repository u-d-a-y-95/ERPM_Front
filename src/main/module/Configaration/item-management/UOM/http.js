import httpClient from "../../../../services/http/http-client";
import { toast } from "react-toastify";

// Get UOM List
export const getUnitOfMeasurementList = (setter, setLoading) => {
  setLoading(true);
  httpClient
    .getData(`/domain/DDL/GetUOMDDL`)
    .then((res) => {
      setter(res?.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};
