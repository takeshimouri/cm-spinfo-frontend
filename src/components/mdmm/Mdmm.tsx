import React, { useEffect, useState, useMemo } from 'react';

// import { Link } from 'react-router-dom'
import moment from 'moment';
import _ from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@material-ui/icons';

// import CircularProgress from '@material-ui/core/CircularProgress';

import Modal from '../common/Modal';

import MdmmEdit from './MdmmModalEdit';
import MdmmAdd from './MdmmModalAdd';
import './Mdmm.css';

// TODO: interfaceの整理、入れ子の対応調査
// TODO: any
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

interface MdmmProps {
  cm_mdmms: Mdmm[];
  showList: boolean;
  clearSortFilter: boolean;
  mdmmAdd: Function;
  mdmmEdit: Function;
  mdmmDelete: Function;
}

interface MdmmTableProps {
  cm_mdmms: Mdmm[];
  clearSortFilter: boolean;
  mdmmEdit: Function;
  mdmmDelete: Function;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(1),
  },
  iconHover: {
    margin: theme.spacing(1),
    color: '#668ad8',
    '&:hover': {
      // color: '#0b7dda',
      color: blue[800],
    },
  },
}));

const Mdmm: React.FC<MdmmProps> = ({
  cm_mdmms,
  mdmmAdd,
  mdmmEdit,
  mdmmDelete,
  showList,
  clearSortFilter,
}) => {
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('Mdmm render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  return (
    <div className="mdmmTable">
      <div className="mdmmTable-header">
        <p className="mdmmTable-title">お客様窓口メモ</p>

        <Modal
          title="新規メモ登録"
          // open={handleOpenModal => <button className='mdmmTable-addButton' onClick={handleOpenModal}>新規メモ登録</button>}
          open={(handleOpenModal: any) => (
            <button
              className="mdmmTable-addButton"
              type="button"
              onClick={handleOpenModal}
            >
              新規メモ登録
            </button>
          )}
          content={(handleCloseModal: Function) => (
            <MdmmAdd mdmmAdd={mdmmAdd} handleCloseModal={handleCloseModal} />
          )}
          outClickClose={false}
        />
      </div>

      {/* { props.state.isLoading && (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress style={{margin: '10px' }} />
        </div>
        )
      } */}

      {showList ? (
        <MdmmTable
          cm_mdmms={cm_mdmms}
          mdmmDelete={mdmmDelete}
          mdmmEdit={mdmmEdit}
          clearSortFilter={clearSortFilter}
        />
      ) : (
        <p>data nothing</p>
      )}
    </div>
  );
};

const MdmmTable: React.FC<MdmmTableProps> = ({
  cm_mdmms,
  mdmmEdit,
  mdmmDelete,
  clearSortFilter,
}) => {
  interface FilterQuery {
    md_nmmmbr_key: string;
    md_idmdmm?: string;
    md_cdcstm?: string;
    md_nommrb?: string;
    md_nmmmbr?: string;
    md_txmdmm?: string;
    md_fganch?: string;
    md_clmdmm?: string;
    md_ccadip?: string;
    md_ccmodu?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface Sort {
    key: string;
    order: number;
    icon?: any;
  }

  const classes = useStyles();

  const initialState = {
    md_nmmmbr: [],
    md_nmmmbr_key: '',
    sort: {
      key: 'md_nommrb',
      order: 0,
      icon: '',
    },
    filterQuery: {
      md_nmmmbr_key: '',
    },
  };

  const [mdmms, setMdmms] = useState(cm_mdmms);
  const [md_nmmmbrs, setNmmmbrs] = useState<string[]>(initialState.md_nmmmbr);
  // 検索条件
  const [filterQuery, setFilterQuery] = useState<FilterQuery>(
    initialState.filterQuery,
  );
  // ソート条件
  const [sort, setSort] = useState<Sort>(initialState.sort);

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('MdmmTable render!');

    setMdmms(cm_mdmms);
    setNmmmbrs(_.uniq(_.map(cm_mdmms, 'md_nmmmbr')));

    if (clearSortFilter) {
      setFilterQuery({ md_nmmmbr_key: '' });
      setSort({ key: 'md_nmmmrb', order: 0, icon: '' });
    }

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  }, [cm_mdmms, clearSortFilter]);

  const filteredMdmm = useMemo(() => {
    // const filteredMdmm = (() => {
    let tmpMdmms = mdmms;

    // 入力した文字は小文字にする
    const filterTxmdmm: string | undefined = filterQuery.md_txmdmm;

    tmpMdmms = tmpMdmms.filter(row => {
      // タイトルで絞り込み
      if (
        filterQuery.md_txmdmm &&
        String(row.md_txmdmm)
          .toLowerCase()
          .indexOf(filterTxmdmm || '') === -1
      ) {
        return false;
      }

      // カテゴリーで絞り込み
      if (
        filterQuery.md_nmmmbr_key &&
        row.md_nmmmbr !== filterQuery.md_nmmmbr_key
      ) {
        return false;
      }

      return row;
    });

    // ソート
    if (sort.key) {
      tmpMdmms = tmpMdmms.sort((a: any, b: any) => {
        a = a[sort.key];
        b = b[sort.key];

        return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
      });
    }

    return tmpMdmms;
  }, [filterQuery, sort, mdmms]);
  // })();

  // 入力した情報をfilterQueryに入れる
  const handleFilter = (e: any) => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });
  };

  // 選択したカラムをSortに入れる
  const handleSort = (column: string) => {
    if (sort.key === column) {
      setSort({
        ...sort,
        order: -sort.order,
        icon: -sort.order === 1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />,
      });
    } else {
      setSort({
        key: column,
        order: 1,
        icon: <ArrowDropUpIcon />,
      });
    }
  };

  return (
    <>
      <table className="mdmmTable-table">
        <thead className="mdmmTable-thead">
          <tr>
            <th rowSpan={2} onClick={() => handleSort('updatedAt')}>
              <p>更新日付 {sort.key === 'updatedAt' ? sort.icon : ''}</p>
            </th>
            <th rowSpan={2} onClick={() => handleSort('md_nommrb')}>
              <p>メモ連番 {sort.key === 'md_nommrb' ? sort.icon : ''}</p>
            </th>
            <th onClick={() => handleSort('md_nmmmbr')}>
              <p>メモ分類 {sort.key === 'md_nmmmbr' ? sort.icon : ''}</p>
            </th>
            <th onClick={() => handleSort('md_txmdmm')}>
              <p>内容 {sort.key === 'md_txmdmm' ? sort.icon : ''}</p>
            </th>
            <th rowSpan={2} style={{ padding: '0', width: '4em' }}>
              <p>編集</p>
            </th>
            <th rowSpan={2} style={{ padding: '0', width: '4em' }}>
              <p>削除</p>
            </th>
          </tr>
          <tr>
            <th>
              <select
                name="md_nmmmbr_key"
                // value={filterQuery.md_nmmmbr_key||""}
                value={filterQuery.md_nmmmbr_key}
                onChange={handleFilter}
              >
                <option value="">選択</option>
                {/* {md_nmmmbrs.map((item: string, index: any) => { */}
                {md_nmmmbrs.map((item: string) => {
                  return (
                    // <option key={index} value={item}>
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <input
                type="text"
                name="md_txmdmm"
                placeholder="絞り込み検索"
                value={filterQuery.md_txmdmm || ''}
                onChange={handleFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody className="mdmmTable-tbody">
          {filteredMdmm.map(mdmm => {
            return (
              <tr key={mdmm.md_idmdmm}>
                <td>{moment(mdmm.updatedAt).format('YYYY/MM/DD')}</td>
                <td>{mdmm.md_nommrb}</td>
                <td>{mdmm.md_nmmmbr}</td>
                <td>{mdmm.md_txmdmm}</td>
                {/* {
                      mdmm.md_nmmmbr ?
                        md_nmmmbrs.find(c => c.id === mdmm.md_nmmmbr).title : ''
                  } */}
                <td style={{ padding: '0', textAlign: 'center', width: '3em' }}>
                  <Modal
                    title="メモ編集"
                    // open={handleOpenModal => <EditIcon className={classes.iconHover} style={{fontSize: '1.5em', color: '#668ad8'}} onClick={handleOpenModal} />}
                    open={(handleOpenModal: any) => (
                      <EditIcon
                        className={classes.iconHover}
                        style={{ fontSize: '1.5em' }}
                        onClick={handleOpenModal}
                      />
                    )}
                    content={(handleCloseModal: Function) => (
                      <MdmmEdit
                        className={classes.iconHover}
                        mdmm={mdmm}
                        mdmmEdit={mdmmEdit}
                        handleCloseModal={handleCloseModal}
                      />
                    )}
                    outClickClose={false}
                  />
                </td>
                <td style={{ padding: '0', textAlign: 'center', width: '3em' }}>
                  <DeleteIcon
                    className={classes.iconHover}
                    style={{ fontSize: '1.5em' }}
                    onClick={e => {
                      e.preventDefault();
                      mdmmDelete({
                        cdcstm: mdmm.md_cdcstm,
                        nommrb: mdmm.md_nommrb,
                      });
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Mdmm;
