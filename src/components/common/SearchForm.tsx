import React, { useState, useEffect } from 'react';

import './SearchForm.css';
// import Mdmm from '../mdmm/Mdmm';

interface Mdmm {
  md_idmdmm: string;
  md_cdcstm: string;
  md_nommrb: string;
  md_nmmmbr: string;
  md_txmdmm: string;
  md_fganch: string;
  md_clmdmm: string;
  md_ccadip: string;
  md_ccmodu: string;
  createdAt: Date;
  updatedAt: Date;
}
interface Aclg {
  al_idactv: string;
  al_nmactv: string;
  al_noactv: string;
  al_dtactv: Date;
  al_cdsqsk: string;
  al_nmsqsk: string;
  al_nmsqbu: string;
  al_nmsqtn: string;
  al_txactv: string;
  al_susury: number;
  al_kgtnka: number;
  al_kggoke: number;
  al_txbiko: string;
  al_cdcstm: string;
  al_nmcstm: string;
  al_nmtnbu: string;
  al_nmtnto: string;
  createdAt: Date;
  updatedAt: Date;
}

interface SearchProps {
  cm_mdmms: Mdmm[];
  cm_aclgs: Aclg[];
  showList: boolean;
  searchHistory: [number];
  mdmmSearch: Function;
  aclgSearch: Function;
}

export const SearchForm: React.FC<SearchProps> = ({
  cm_mdmms,
  cm_aclgs,
  mdmmSearch,
  aclgSearch,
}) => {
  const [searchKey, setSearchKey] = useState('0');

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('SearchForm render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  return (
    <div className="searchForm-container">
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search.."
          onChange={e => {
            setSearchKey(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            mdmmSearch(searchKey);
            aclgSearch(searchKey);
          }}
        >
          <i className="material-icons">search</i>
        </button>
      </form>
      <div className="searchForm-currentContainer">
        {/*
        {() => {
          if (!cm_aclgs) {
            return null;
          }
          // TODO: not complete

          return (
            <div>
              <p className="searchForm-currentData">{cm_aclgs[0].al_nmsqsk}</p>
              <p className="searchForm-currentMessage">様の履歴一覧です。</p>
            </div>
          );
        }}
      */}
        {/*
        {() => {
          if (!cm_mdmms) {
            return null;
          }
          // TODO: not complete
        */}
        {() => {
          if (!cm_mdmms) {
            return null;
          }

          return (
            <div>
              <p className="searchForm-currentData">{cm_mdmms[0].md_cdcstm}</p>
              <p className="searchForm-currentMessage">様の履歴一覧です。</p>
            </div>
          );
        }}
      </div>
    </div>
  );
};
export default SearchForm;
