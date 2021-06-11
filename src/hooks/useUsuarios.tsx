import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRest";
import { ReqResListado, Usuario } from "../interfaces/reqRest";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [btnNextEnable, setBtnNextEnable] = useState(false);
  const [btnLastEnable, setBtnLastEnable] = useState(false);
  const refPage = useRef(1);
  const refCorrentPage = useRef(1);
  const refTotalPage = useRef(0);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await reqResApi.get<ReqResListado>("/users", {
      params: { page: refPage.current },
    });

    if (res.data.data.length > 0) {
      setUsuarios(res.data.data);

      refCorrentPage.current = res.data.page;
      refTotalPage.current = res.data.total_pages;

      if (refCorrentPage.current === 1) {
        setBtnLastEnable(true);
      }
    } else {
      refPage.current--;
    }
  };

  const nextPage = () => {
    if (refCorrentPage.current === refPage.current) {
      setBtnNextEnable(true);
    }
    refPage.current++;
    setBtnLastEnable(false);
    loadUser();
  };

  const lastPage = () => {
    if (refCorrentPage.current === 1) {
      setBtnLastEnable(true);
    }
    refPage.current--;
    setBtnNextEnable(false);
    loadUser();
  };

  return { usuarios, nextPage, lastPage, btnNextEnable, btnLastEnable };
};
