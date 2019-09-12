import React, { useEffect, useCallback } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from './redux/actions/actionsMdmms';

import SearchForm from './components/common/SearchForm';
import Mdmm from './components/mdmm/Mdmm';
import Aclg from './components/mdmm/Aclg';

import './AppContainer.css';

const AppContainer: React.FC = () => {
  // TODO: any
  const mdmmState = useSelector((state: any) => state.mdmms);
  const aclgState = useSelector((state: any) => state.aclgs);
  const dispatch = useDispatch();

  const mdmmSearch = useCallback(
    (cdcstm: any) => dispatch(Actions.GetMdmms.start(cdcstm)),
    // dispatch(Actions.GetAclgs.start(cdcstm)),
    [dispatch],
  );
  const aclgSearch = useCallback(
    (cdcstm: any) => dispatch(Actions.GetAclgs.start(cdcstm)),
    [dispatch],
  );

  // const aclgSearch = useCallback(
  //   cdcstm => dispatch(Actions.GetAclgs.start(cdcstm)),
  //   [dispatch],
  // );

  const mdmmDelete = useCallback(
    ({ cdcstm, nommrb }) =>
      dispatch(Actions.DeleteMdmms.start({ cdcstm, nommrb })),
    [dispatch],
  );

  const mdmmEdit = useCallback(
    ({ cdcstm, nommrb, mdmm }) =>
      dispatch(Actions.EditMdmms.start({ cdcstm, nommrb, mdmm })),
    [dispatch],
  );

  const mdmmAdd = useCallback(mdmm => dispatch(Actions.AddMdmms.start(mdmm)), [
    dispatch,
  ]);

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('AppContainer render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  const AddForm = () => <div>AddForm</div>;
  // const EditForm = () => <MdmmEdit/>

  // TODO: <question> renderからcomponentに変えたが、再レンダリングが増えた(mdmm.js/mdmmTableの再render)ため、戻した
  // const mdmmContainer: React.FC = () => (
  //   <Mdmm
  //     {...mdmmState}
  //     mdmmDelete={mdmmDelete}
  //     mdmmEdit={mdmmEdit}
  //     mdmmAdd={mdmmAdd}
  //   />
  // );

  return (
    <>
      <div className="app-body-header">
        <SearchForm
          // {...aclgState}
          {...mdmmState}
          {...aclgState}
          mdmmSearch={mdmmSearch}
          aclgSearch={aclgSearch}
        />
      </div>

      <div className="app-body-container">
        {/* <Route exact path="/" component={mdmmContainer} /> */}
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Mdmm
                {...mdmmState}
                mdmmDelete={mdmmDelete}
                mdmmEdit={mdmmEdit}
                mdmmAdd={mdmmAdd}
              />
              <br></br>
              <h3>書籍・セミナー・大会履歴</h3>
              <Aclg {...aclgState} />
            </div>
          )}
        />
        {/* TODO: <question> renderからcomponentに変えたが、再レンダリングが増えた(mdmm.js/mdmmTableの再render)ため、戻した */}
        <Route exact path="/AddForm" component={AddForm} />
        {/* <Route path='/EditForm' component={EditForm} /> */}
      </div>
    </>
  );
};

export default AppContainer;
