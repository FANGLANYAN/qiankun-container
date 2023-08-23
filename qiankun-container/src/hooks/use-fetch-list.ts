/**
 * 获取列表hook
 */
import { useEffect, useState } from "react";
// import { IFetchListProps } from "../types";
import { BasePaginationParams } from "../types";
export default function useFetchList<Response>(props: any) {
  const [dataSource, setDataSource] = useState<Response[]>([]);
  const [total, setTotal] = useState(0);
  const [filterParams, setFilterParams] = useState(new BasePaginationParams());
  /**
   * 请求列表接口
   * 拿到对应的dataSource total等
   * 传递给调用钩子的页面
   */

  useEffect(() => {
    getData();
  }, [filterParams]); //每次分页数据发生改变都要重新调用接口

  const getData = async () => {
    const { list, pagination } = await props.API(filterParams);
    list.forEach((item: any) => {
      item.key = item.id;
    });
    setDataSource(list);
    setTotal(pagination.total);
  };
  return {
    dataSource,
    total,
    filterParams,
    setFilterParams,
  };
}
