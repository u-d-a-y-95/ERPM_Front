import httpClient from "../../services/http/http-client";

export const getBusinessUnitList = (setter) => {
  httpClient
    .getData("")
    .then((res) => {
      setter(res?.data);
    })
    .catch((err) => {
      setter([]);
      console.log(err?.message);
    });
};
